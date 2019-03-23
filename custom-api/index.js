const { getProducts, getAllOrders } = require('../api');
const { reduceProductsByQuantity, reduceProductOptionByQuantity } = require('./reducers');

const getProductsBySaleAmount = async () => {
    try {
        const orders = await getAllOrders();

        return reduceProductsByQuantity(orders);
    } catch (error) {
        throw error;
    }
};

const getSpecificProduct = async (id) => {
    try {
        const products = await getProducts();

        return products.filter(product => product.id === id)[0];
    } catch (error) {
        throw error;
    }
};

const getSpecificProductSales = async (id) => {
    try {
        const orders = await getAllOrders();
        const products = await getProducts();

        const product = products.filter(product => product.id === id)[0];
        const options = reduceProductOptionByQuantity(product, orders);

        return {
            ...product,
            options
        };
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getProductsBySaleAmount,
    getSpecificProduct,
    getSpecificProductSales
};
