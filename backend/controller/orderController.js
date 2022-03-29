const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const res = require("express/lib/response");

//creating new order
exports.addOrder = catchAsyncError(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

//get single order
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//get userSpecific order
exports.getMyOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

//get all orders - admin
exports.getAllOrders = catchAsyncError(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true.valueOf,
    orders,
    totalAmount,
  });
});

// update order status
exports.updateOrderStatus = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found"));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("This order has already delivered", 400));
  }

  order.orderItems.forEach(async (order) => {
    await updateStock(order.product, order.quantity);
  });

  order.status = req.body.orderStatus;

  if (req.body.orderStatus === "Delivered") {
    order.deliveredAt = Date.now();
  }

  order.orderStatus = req.body.orderStatus;

  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Order updated successfully",
  });
});

//function to update stock
async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stock -= quantity;
  await product.save({ validateBeforeSave: false });
}

//delete order - admin
exports.deleteOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found"));
  }

  await order.remove();

  res.status(200).json({
    success: true,
    message: "Deleted order successfully",
  });
});
