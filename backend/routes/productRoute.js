const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controller/productController');

const router = express.Router();

router.route("/allproducts").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/update/:id").put(updateProduct);

router.route("/product/delete/:id").delete(deleteProduct);

router.route("/product/getdetails/:id").get(getProductDetails);



module.exports =  router