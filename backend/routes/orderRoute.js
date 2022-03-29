const express = require('express');
const { addOrder, getSingleOrder, getMyOrders, getAllOrders, updateOrderStatus, deleteOrder } = require('../controller/orderController');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser,addOrder)

router.route("/order/getsingleorder/:id").get(isAuthenticatedUser, getSingleOrder)

router.route("/order/myorders").get(isAuthenticatedUser, getMyOrders)

router.route("/admin/order/getallorders").get(isAuthenticatedUser,authorizeRoles("admin"), getAllOrders)

router.route("/admin/order/updateStatus/:id").put(isAuthenticatedUser,authorizeRoles("admin"), updateOrderStatus)

router.route("/admin/order/deleteorder/:id").delete(isAuthenticatedUser,authorizeRoles("admin"), deleteOrder)

module.exports =  router