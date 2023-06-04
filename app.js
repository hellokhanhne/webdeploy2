const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const cartRouter = require("./routes/cartRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const chatRouter = require("./routes/chatRoutes");
const app = express();

app.use(
  cors({
    origin: "https://web-fux0.onrender.com",
  })
);
app.use(express.static("public/image"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(mongoSanitize());

app.use("/myway/api/products", productRouter);
app.use("/myway/api/users", userRouter);

app.use("/myway/api/carts", cartRouter);
app.use("/myway/api/bookings", bookingRouter);
app.use("/myway/api/reviews", reviewRouter);
app.use("/myway/api/chats", chatRouter);

app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

module.exports = app;
