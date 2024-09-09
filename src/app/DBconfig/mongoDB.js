const mongoose = require("mongoose");
 
export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ahmedeldomiaty0:79BlMbKE0iXrmfWk@cluster0.qds76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("ERROR WITH CONNECTING  MongoDB", error);
  }
};