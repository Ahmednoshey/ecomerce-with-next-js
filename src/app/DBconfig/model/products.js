const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;
// define the Schema (the structure of the article)
const userSchema = new Schema({
  Title: String,
  Price: Number,
  Description: String,
  productImg: String,
  puplicId: String,
});
// Create a model based on that schema
const ProductsModal = models.Product || mongoose.model("Product", userSchema);
// export the model
module.exports = ProductsModal;