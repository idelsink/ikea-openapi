## Swagger UI

This API can be tested using swagger-ui at [./swagger-ui.html](swagger-ui.html) as long as the
CORS header `Access-Control-Allow-Origin` are configured as `*`.
At the moment of writing this is only the case for the [IKEA Search API](../search/index.html).

## Other APIs

* [IKEA Product Catalog API](../product-catalog/index.html)
* [IKEA Search API](../search/index.html)
* [IKEA Sales Item API](../sales-item/index.html)
* [IKEA After Purchase Ordering API](../after-purchase-ordering/index.html)

## ⚠️ Disclaimer

* This project is based on publicly available information and analysis of network requests.
* It is not affiliated with, endorsed by, or supported by IKEA.
* Endpoints, schemas, and behaviors may change at any time and may not reflect official or supported APIs.
* Use this specification at your own risk.

### See also

This section lists resources used during the creation of these APIs to exent and check validity of the API.
These are not in any special order but useful as references.

* [OpenAPI Spec for api.salesitem.ingka.com](https://github.com/shrabdut123/cart-multi-agent/blob/a10dc96ac7a1fd98701afebe2cde585e6d9a6a08/service_coordinator_agent/salesitem_api.yaml#L13) - Very verbose OpenAPI Spec with detailed resources referring to inside IKEA knowledge.
* [DavisChappins/ikeaStockChecker](https://github.com/DavisChappins/ikeaStockChecker/blob/45fa92f26ac2b37d03c37eb34e0c618c4a8477e8/ikea_stock_scanner.py#L11) - Use of `api.salesitem.ingka.com` endpoint.
* [Mirzaei81/ikeaScraper](https://github.com/Mirzaei81/ikeaScraper/blob/cdeef5c9fb76660b18a8e569d7213828ffe5f9d2/app.py#L74) - Use of `api.salesitem.ingka.com` endpoint.
* [Ephigenia/ikea-availability-checker/postman/schemas/ikea-ingka-api.yaml](https://github.com/Ephigenia/ikea-availability-checker/blob/c7fe2f9bc8306c01783f8d22329d34ed76a582c9/postman/schemas/ikea-ingka-api.yaml) - This contains resources related to the `api.salesitem.ingka.com` (Sales Item API)
* [vrslev/ikea-api-client/src/ikea_api/endpoints/search.py](https://github.com/vrslev/ikea-api-client/blob/ce70c8d743302a465931bdb6a9f7b0bc5c1d882f/src/ikea_api/endpoints/search.py#L14C1-L14C117) - Use of the Search API and some other endpoints.
