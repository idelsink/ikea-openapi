# IKEA OpenAPI Specifications

[![Scheduled Contract Testing](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-contract-test.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-contract-test.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenAPI Version](https://img.shields.io/badge/OpenAPI-3.1-green.svg)](https://www.openapis.org/)

Unofficial OpenAPI specifications for various IKEA APIs.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [:warning: Disclaimer](#warning-disclaimer)
- [:robot: Available API Specifications](#robot-available-api-specifications)
  - [1. Product Catalog API](#1-product-catalog-api)
  - [2. Search API](#2-search-api)
  - [3. Sales Item API](#3-sales-item-api)
  - [4. After Purchase Ordering API](#4-after-purchase-ordering-api)
- [:zap: Quick start](#zap-quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [:test_tube: Daily tests](#test_tube-daily-tests)
- [:balance_scale: License](#balance_scale-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## :warning: Disclaimer

- This project is based on publicly available information and analysis of network requests
- It is **not affiliated with, endorsed by, or supported by IKEA**
- Endpoints, schemas, and behaviors may change at any time
- These specifications may not reflect official or supported APIs
- Use at your own risk

## :robot: Available API Specifications

All API specifications can be found in their respective [openapi](openapi) directory and are hosted using GitHub Pages at [ingmar.dels.ink/ikea-openapi](https://ingmar.dels.ink/ikea-openapi).

### 1. Product Catalog API

Access IKEA's product categories, store information, and detailed product information.

- **OpenAPI definition**: [openapi/product-catalog](openapi/product-catalog)
- **API Documentation**: [ingmar.dels.ink/ikea-openapi/product-catalog](https://ingmar.dels.ink/ikea-openapi/product-catalog/)

### 2. Search API

Search and list IKEA products.

- **OpenAPI definition**: [openapi/search](openapi/search)
- **API Documentation**: [ingmar.dels.ink/ikea-openapi/search](https://ingmar.dels.ink/ikea-openapi/search/)

### 3. Sales Item API

Get real-time product availability and packaging information.

- **OpenAPI definition**: [openapi/sales-item](openapi/sales-item)
- **API Documentation**: [ingmar.dels.ink/ikea-openapi/sales-item](https://ingmar.dels.ink/ikea-openapi/sales-item/)

### 4. After Purchase Ordering API

Access IKEA's spare parts and After Purchase Ordering (APO) system.

- **OpenAPI definition**: [openapi/after-purchase-ordering](openapi/after-purchase-ordering)
- **API Documentation**: [ingmar.dels.ink/ikea-openapi/after-purchase-ordering](https://ingmar.dels.ink/ikea-openapi/after-purchase-ordering/)

## :zap: Quick start

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

## :test_tube: Daily tests

[![Scheduled Contract Testing](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-contract-test.yaml/badge.svg?branch=main&event=schedule)](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-contract-test.yaml)

[Daily Tests](https://github.com/idelsink/ikea-openapi/actions/workflows/scheduled-contract-test.yaml) are ran to validate the defined OpenAPI specs against the IKEA Endpoints and detect API changes.



## :balance_scale: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
