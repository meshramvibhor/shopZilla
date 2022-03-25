const express = require('express');
const { addOrder } = require('../controller/orderController');
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser,addOrder)

module.exports =  router