const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');




// creating product  -- admin route  
exports.createProduct = async (req,res,next)=>{
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}


//get all products
exports.getAllProducts = async (req,res,next)=>{

    const products = await Product.find();

    res.status(200).json({
        success:true,
        products
    })

}

// update product -- Admin route 
exports.updateProduct = async (req,res,next)=>{
    
    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product not found", 400))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    }) 

    res.status(200).json({
        success : true,
        product
    })
}


//delete a product
exports.deleteProduct = async (req,res, next) =>{

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product not found", 400))
    }

    product = await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message :"product deleted successfully"
    })
}


// get single product/details
exports.getProductDetails = async (req,res, next)=>{

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Product not found", 400))
    }

    res.status(200).json({
        success: true,
        product
    })
}