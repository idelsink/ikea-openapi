# IKEA OpenAPI Specifications

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenAPI Version](https://img.shields.io/badge/OpenAPI-3.1-green.svg)](https://www.openapis.org/)
[![After Purchase Ordering API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-after-purchase-ordering.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-after-purchase-ordering.yaml)
[![Product Catalog API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-product-catalog.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-product-catalog.yaml)
[![Sales Item API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-sales-item.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-sales-item.yaml)
[![Search API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-search.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-search.yaml)

Unofficial OpenAPI specifications for various IKEA APIs.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Disclaimer](#disclaimer)
- [Available API Specifications](#available-api-specifications)
  - [📦 Product Catalog API](#-product-catalog-api)
  - [🔍 Search API](#-search-api)
  - [📊 Sales Item API](#-sales-item-api)
  - [🔧 After Purchase Ordering API](#-after-purchase-ordering-api)
- [Quick start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Daily tests](#daily-tests)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Disclaimer

- This project is based on publicly available information and analysis of network requests
- It is **not affiliated with, endorsed by, or supported by IKEA**
- Endpoints, schemas, and behaviors may change at any time
- These specifications may not reflect official or supported APIs
- Use at your own risk

## Available API Specifications

All API specifications can be found in their respective [openapi](openapi) directory and are hosted using GitHub Pages at [ingmar.dels.ink/ikea-openapi](https://ingmar.dels.ink/ikea-openapi).

<table>
<tr>
<td>

### 📦 Product Catalog API

Access IKEA's product categories, store information, and detailed product information.

[![Product Catalog API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-product-catalog.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-product-catalog.yaml)

**[API Documentation](https://ingmar.dels.ink/ikea-openapi/product-catalog/)** • **[OpenAPI definition](openapi/product-catalog)**

</td>
</tr>
</table>

<table>
<tr>
<td>

### 🔍 Search API

Search and list IKEA products.

[![Search API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-search.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-search.yaml)

**[API Documentation](https://ingmar.dels.ink/ikea-openapi/search/)** • **[OpenAPI definition](openapi/search)**

</td>
</tr>
</table>

<table>
<tr>
<td>

### 📊 Sales Item API

Get real-time product availability and packaging information.

[![Sales Item API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-sales-item.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-sales-item.yaml)

**[API Documentation](https://ingmar.dels.ink/ikea-openapi/sales-item/)** • **[OpenAPI definition](openapi/sales-item)**

</td>
</tr>
</table>

<table>
<tr>
<td>

### 🔧 After Purchase Ordering API

Access IKEA's spare parts and After Purchase Ordering (APO) system.

[![After Purchase Ordering API Contract Test](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-after-purchase-ordering.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-test-after-purchase-ordering.yaml)

**[API Documentation](https://ingmar.dels.ink/ikea-openapi/after-purchase-ordering/)** • **[OpenAPI definition](openapi/after-purchase-ordering)**

</td>
</tr>
</table>

## Quick start

### Prerequisites

- [mise](https://mise.jdx.dev/) (for dev tools and task runner)

### Installation

```sh
# Clone the repository
git clone https://github.com/idelsink/ikea-openapi.git
cd ikea-openapi

# Install dependencies (if using mise)
mise install

# Build documentation
mise run build:docs
```

## Daily tests

[Daily contract tests](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-contract-test.yaml) are run to validate the defined OpenAPI specs against the IKEA endpoints and detect API changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
