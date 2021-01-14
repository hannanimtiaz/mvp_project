var ProductModel = require('../../models/product');

exports.getProductsDetail = async function (req, res, next) {
    let products = await ProductModel.find();
    console.log('products: ', products);
    if (!products.length) {
        products = null;
    }
    res.render('products', { products });
}

exports.createProductGet = async function (req, res) {
    res.render('admin/createProduct');
}

exports.createProductPost = async function (req, res) {

    const { code, name, value, supplierName, color, sizeUnit, sizeWidth, sizeHeight } = req.body;

    let isProduct = await ProductModel.exists({ code: code })

    if (isProduct) {
        return res.json({
            msg: 'Product already exists'
        })
    }
    else {
        let product = await ProductModel.create({
            code, name, value, supplierName, color, sizeUnit, sizeWidth, sizeHeight
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

exports.editProductGet = async function (req, res) {
    let product_id = req.params.product_id

    let product = await ProductModel.findById(product_id)
    res.render('admin/editProduct', { product })
}

exports.editProductPost = async function(req, res){
    
}
