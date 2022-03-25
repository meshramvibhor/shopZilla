const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

// importing routes from routes
const product = require("./routes/productRoute");
const user = require("./routes/userRote");
const order = require("./routes/orderRoute");

app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/d1", product);
app.use("/api/d1", user);
app.use("/api/d1", order);

//error middleware
app.use(errorMiddleware);

module.exports = app;
