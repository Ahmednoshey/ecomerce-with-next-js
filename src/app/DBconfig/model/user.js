const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = mongoose.models;

// define the Schema (the structure of the article)
const userSchema = new Schema({
  Name: String,
  Email: String,
  Password: String,
});

// Create a model based on that schema
const UserModal = models.User || mongoose.model("User", userSchema);

// export the model
module.exports = UserModal;