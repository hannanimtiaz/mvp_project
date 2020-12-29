var ProductModel = require('../../models/product');

exports.getProductsDetail = function (req, res, next) {
    res.render('products');
}

exports.createProductGet = async function (req, res) {
    res.render('admin/createProduct');
}

exports.createProductPost = async function (req, res) {

    const { productCode, productName, productValue, supplierName, productColor, productSizeUnit, productSizeWidth, productSizeHeight } = req.body;

    let isProduct = await ProductModel.exists({ productCode: productCode })

    if (isProduct) {
        return res.json({
            msg: 'Product already exists'
        })
    }
    else {
        let product = await ProductModel.create({
            productCode, productName, productValue, supplierName, productColor, productSizeUnit, productSizeWidth, productSizeHeight
        });

        console.log('product: ', product);

        if (product) {
            console.log('Product created');
        }
        else {
            console.log('Product not created');
        }
    }
}

exports.showProductsget = async function (req, res) {
    
    let getAllProducts = await ProductModel.find({});
    res.render('admin/showProducts', {products:getAllProducts});
}
