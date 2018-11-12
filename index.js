require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const products = require("./api/products")

app.use("/products",products)

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
