# faire-stats-api

## Description
Based on [Faire External API](https://faire.github.io/external-api-docs/#orders), this project exposes two API endpoint to help visualize data for specific products.

GET /stats/products/sold
Example: /stats/products/sold
```
[
   {
      "product": {
         "id": "p_4kuk5vf3",
         "name": "Individual Tea Drops"
      },
      "quantity": 25
   },
   {
      "product": {
         "id": "p_1fg44tc5",
         "name": "Mini Unfilled Wood Box"
      },
      "quantity": 20
   },
   {
      "product": {
         "id": "p_7r7d71nc",
         "name": "Unfilled Large Wood Box"
      },
      "quantity": 20
   },
   {
      "product": {
         "id": "p_ebah7hfq",
         "name": "Mini Unfilled Wood Box"
      },
      "quantity": 17
   },
   {
      "product": {
         "id": "p_7pid8vps",
         "name": "Unfilled Large Wood Box"
      },
      "quantity": 120
   },
   {
      "product": {
         "id": "p_c2dny7bu",
         "name": "Tea Drops in Compostable Box"
      },
      "quantity": 54
   },
   {
      "product": {
         "id": "p_55pt0wp8",
         "name": "Tea Drops in Compostable Box"
      },
      "quantity": 540
   },
   {
      "product": {
         "id": "p_9d0tbjep",
         "name": "Tea Drops in Medium Wood Box"
      },
      "quantity": 171
   },
   {
      "product": {
         "id": "p_4kneqjyb",
         "name": "Individual Tea Drops"
      },
      "quantity": 25
   },
   {
      "product": {
         "id": "p_3zpsqodl",
         "name": "Single Serve Tea Drops"
      },
      "quantity": 5325
   },
   {
      "product": {
         "id": "p_fanyskjg",
         "name": "Tea Drops in Medium Wood Box"
      },
      "quantity": 30
   },
   {
      "product": {
         "id": "p_63sorm2b",
         "name": "Single Serve Tea Drops"
      },
      "quantity": 300
   },
   {
      "product": {
         "id": "p_2k5o128gwg",
         "name": "Tea Copy 1"
      },
      "quantity": 10
   }
]
```

GET /stats/product/:id, where id is a product identifier
Example: /stats/product/p_4kuk5vf3
```
{
   "id": "p_4kuk5vf3",
   "created_at": "20180423T214414.000Z",
   "updated_at": "20190323T080025.000Z",
   "brand_id": "b_d2481b88",
   "short_description": "Tea Drops are organic pressed teas that dissolve in your cup.",
   "description": "Tea Drops are organic pressed teas that dissolve in your cup. Comprised of USDA organic tea, spices, and lightly sweetened with raw sugar, Tea Drops can be enjoyed anytime, anywhere, just by adding hot water.\n\nEach Tea Drop is protected in a recyclable sealed bag, and your collective Tea Drops order will arrive carefully cushioned in a recyclable box. ",
   "wholesale_price_cents": 85,
   "retail_price_cents": 200,
   "active": true,
   "name": "Individual Tea Drops",
   "unit_multiplier": 25,
   "options": [
      {
         "id": "po_59w6yhym",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Rose Early Grey",
         "sku": "IND0001",
         "product_id": "p_4kuk5vf3",
         "quantity": 25
      },
      {
         "id": "po_eu5oac0q",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Citrus Ginger",
         "sku": "IND0002",
         "product_id": "p_4kuk5vf3",
         "quantity": 0
      },
      {
         "id": "po_971h77ml",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Sweet Peppermint",
         "sku": "IND0003",
         "product_id": "p_4kuk5vf3",
         "quantity": 0
      },
      {
         "id": "po_eoxg5jgw",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Vanilla White Tea",
         "sku": "IND0004",
         "product_id": "p_4kuk5vf3",
         "quantity": 0
      },
      {
         "id": "po_alub07sg",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Matcha Green Tea",
         "sku": "IND0005",
         "product_id": "p_4kuk5vf3",
         "quantity": 0
      },
      {
         "id": "po_7c5g6hj0",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Cardamom Spice",
         "sku": "IND0007",
         "product_id": "p_4kuk5vf3",
         "quantity": 0
      },
      {
         "id": "po_18ve9rdm",
         "created_at": "20180423T214414.000Z",
         "updated_at": "20181031T192909.000Z",
         "active": true,
         "name": "Chocolate Earl Grey",
         "sku": "IND0009",
         "product_id": "p_4kuk5vf3",
         "quantity": 0
      }
   ]
}


```

## How-to-run

In order to test the API in development mode, just run the following command:
```
npm run dev
```
