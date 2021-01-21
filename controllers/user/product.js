const ProductModel = require('../../models/product')

exports.getProducts = async function (req, res, next) {
    let products = await ProductModel.find();
    console.log('products: ', products);
    if (!products.length) {
        products = null;
    }
    res.render('products', { products });
}