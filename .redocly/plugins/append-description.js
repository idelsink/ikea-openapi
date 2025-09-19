/**
 * @fileoverview Simple Redocly plugin for appending a text file to OpenAPI info.description
 * @module append-description
 * @requires fs
 * @requires path
 */

import fs from "fs";
import path from "path";

/**
 * Creates a Redocly plugin that appends content from external files to the
 * info.description field of OpenAPI specifications during bundling or preview.
 *
 * This plugin is useful for maintaining shared content (like disclaimers,
 * common documentation sections, or API lists) in separate files and
 * automatically including them in multiple API specifications.
 *
 * @example
 * // In redocly.yaml:
 * plugins:
 *   - .redocly/plugins/append-description.js
 *
 * decorators:
 *   append-description/append-file:
 *     file: ./shared/disclaimer.md
 *     separator: "\n\n"
 *
 * @example
 * // Per-API configuration:
 * apis:
 *   product-catalog:
 *     root: ./product-catalog/openapi.yaml
 *     decorators:
 *       append-description/append-file:
 *         file: ./shared/disclaimer.md
 *
 * @returns {Object} Redocly plugin configuration object
 * @returns {string} returns.id - Unique identifier for the plugin
 * @returns {Object} returns.decorators - Decorator definitions for different API formats
 */
export default () => {
  return {
    id: "append-description",
    decorators: {
      oas3: {
        /**
         * Decorator that appends file content to the info.description field
         *
         * @function append-file
         * @param {Object} options - Configuration options for the decorator
         * @param {string} options.file - Path to the file to append (REQUIRED).
         *                                Can be absolute or relative to the current working directory.
         * @param {string} [options.separator=""] - String to insert between existing description
         *                                          and appended content. Common values: "\n", "\n\n", "\n---\n"
         *
         * @returns {Object} AST visitor object for traversing the OpenAPI document
         *
         * @throws {Error} Throws if the file option is not provided
         * @throws {Error} Throws if the specified file does not exist
         */
        "append-file": (options) => ({
          Info: {
            /**
             * Called when leaving the Info node after all its children have been visited.
             * This is where we modify the description field.
             *
             * Using 'leave' instead of 'enter' ensures all existing properties
             * are already processed before we make modifications.
             *
             * @param {Object} info - The Info object from the OpenAPI specification
             * @param {string} [info.description] - The existing description that we'll append to
             *
             * @returns {void} Modifies the info object in place
             */
            leave(info) {
              try {
                const { file, separator = "" } = options;

                if (!file) {
                  throw new Error(
                    "append-description plugin: file option is required"
                  );
                }

                const filePath = path.resolve(file);
                if (!fs.existsSync(filePath)) {
                  throw new Error(`File not found: ${filePath}`);
                }

                const contentToAppend = fs.readFileSync(filePath, "utf8");

                info.description += separator;
                info.description += contentToAppend;
              } catch (error) {
                console.error(`Failed to append file: ${error.message}`);
              }
            },
          },
        }),
      },
    },
  };
};
