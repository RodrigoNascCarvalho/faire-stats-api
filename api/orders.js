const faireApi = require('./faire-api');

const getAllOrders = async () => {
    try {
        const { data } = await faireApi.get(`/orders`);
        
        return data.orders;
    } catch (error) {
        console.error(`[ERROR][GET_ALL_ORDERS]:${error.message}: ${error}`);
    }
};

module.exports = {
    getAllOrders
};
