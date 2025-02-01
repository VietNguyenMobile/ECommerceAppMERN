const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRouter = require("./src/routes/auth/auth-routes");
const adminProductsRouter = require("./src/routes/admin/products-routes");

const shopProductsRouter = require("./src/routes/shop/products-routes");
const shopCartRouter = require("./src/routes/shop/cart-routes");
const shopAddressRouter = require("./src/routes/shop/address-routes");
const shopOrderRouter = require("./src/routes/shop/order-routes");
const shopSearchRouter = require("./src/routes/shop/search-routes");
const shopReviewRouter = require("./src/routes/shop/review-routes");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, // enable set cookie
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});