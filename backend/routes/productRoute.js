const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, addReview, getAllReviews, deleteReview } = require('../controller/productController');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

router.route("/allproducts").get(getAllProducts);

router.route("/admin/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

router.route("/admin/product/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);

router.route("/admin/product/delete/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/getdetails/:id").get(getProductDetails);

router.route("/product/addreview").put(isAuthenticatedUser,addReview);

router.route("/product/getallreviews").get(getAllReviews);

router.route("/product/deletereview").delete(isAuthenticatedUser,deleteReview);



module.exports =  router