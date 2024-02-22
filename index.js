const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Encoding to allow usage of form x-www-url-encoded

//Homepage response
app.get("/", (req, res) => {
  res.send("Node is working properly ATM");
});

//Routes
app.use("/api/products", productRoute);

//Get all products(moved to controllers)
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

//Get one product(moved to controllers)
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

//Add new product(moved to controllers)
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//Update a product(moved to controllers)
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     //Show product by finding it again in database
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

//Delete a product(moved to controllers)
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://admin:6lMR8CHNYmGkhjEx@backenddb.df4k2yg.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
