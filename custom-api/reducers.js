/**
 * Flatten all items inside order into one array
 * @function flattenItems
 * @param {Array} orders
 * @returns {Array} flattenedArray
 */
const flattenItems = (orders) => (
    orders.reduce((flattened, order) => flattened.concat(order.items), [])
);

const reduceProductsByQuantity = (orders) => {
    const orderItems = flattenItems(orders);

    const productQuantityReducer = (uniqueProducts, item) => {
        const {product_id, product_name, quantity} = item;

        if (!uniqueProducts.has(product_id)) {
            uniqueProducts.set(product_id, {
                product: {
                    id: product_id,
                    name: product_name
                },
                quantity
            });

            return uniqueProducts;
        }

        const currentProduct = uniqueProducts.get(product_id);

        currentProduct.quantity += item.quantity;
        uniqueProducts.set(product_id, currentProduct);

        return uniqueProducts;
    };

    const productByQuantityMap = orderItems.reduce(productQuantityReducer, new Map());
    return [...productByQuantityMap].map(map => map[1]);
};

const reduceProductOptionByQuantity = (product, orders) => {
    const orderItems = flattenItems(orders);
    
    return product.options.map((option) => {
        const orderItemOption = orderItems.filter((item) => item.product_option_id === option.id)[0];
        const quantity = orderItemOption ? orderItemOption.quantity : 0;

        return {
            ...option,
            quantity
        }
    });
};

module.exports = {
    reduceProductsByQuantity,
    reduceProductOptionByQuantity
};
