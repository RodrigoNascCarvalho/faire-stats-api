const faireApi = require('./faire-api');

const getProducts = async () => {
    try {
        const { data } = await faireApi.get('/products');

        return data.products;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getProducts
};
