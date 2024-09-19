import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"
import ProductsModal from "app/DBconfig/model/products";
export async function DELETE(request) {
  // recived data from front end
const DatafromFrontEnd = await request.json()
console.log("ahmedddddddddddddddddddddddddd");
console.log(DatafromFrontEnd);
// connect with Database
await connectMongoDB()
// get data from database
 await ProductsModal.deleteOne({
  _id: DatafromFrontEnd.productId,
});
//Delet img from cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
await cloudinary.uploader.destroy(DatafromFrontEnd.puplicId);
// go back to frontEnd
return NextResponse.json({})
}