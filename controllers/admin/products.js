var ProductModel = require('../../models/product');

exports.getProductsDetail = function (req, res, next) {
    res.render('products');
}

exports.createProduct = async function (req, res) {
    const { name } = req.body;

    let product = await ProductModel.create({
        name
    });
    console.log('product: ', product);

    if (product) {
        return res.json({
            msg: 'Product created'
        });
    }
    else {
        return res.json({
            msg: 'Product not created'
        });
    }
}
