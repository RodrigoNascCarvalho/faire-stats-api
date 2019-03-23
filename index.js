const express = require('express');
const bodyParser = require('body-parser');
const customApi = require('./custom-api');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.TEST ? 3000 : 80;

app.get('/stats/products/sold', async (_, res) => {
    try {
        const results = await customApi.getProductsBySaleAmount()
        res.status(200).json(results);
    } catch(err) {
        res.status(500).json(err);
    }
});

app.get('/stats/product/:id', async (req, res) => {
    try {
        const productDetails = await customApi.getSpecificProductSales(req.params.id);
        res.status(200).json(productDetails);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(PORT, () => console.log(`Server started listening on port: ${PORT}`));
