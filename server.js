const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy Data
let products = [
  { id: 1, name: "Classic T-Shirt", price: 499 },
  { id: 2, name: "Running Sneakers", price: 1499 },
  { id: 3, name: "Smart Watch", price: 2999 }
];

let orders = [];

// API Routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/order", (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ message: "Order placed successfully!" });
});

// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("✅ Backend running on PORT:", PORT);
});