import ProductsModal from "app/DBconfig/model/products"
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { uploadStream } from "helper/uploadImgCloudniry";
import { NextResponse } from "next/server"
export async function POST(request) {
// recived data from front end
const DatafromFrontEnd = await request.formData();
//upload img to cloudinary
const productImgupload = DatafromFrontEnd.get("productImg")
const bytes = await productImgupload.arrayBuffer();
const buffer = Buffer.from(bytes);
const uploadedImg = await uploadStream(buffer)
// connect with Database
await connectMongoDB()
// try to story data in database
await ProductsModal.create({
  Title: DatafromFrontEnd.get("Title"),
  Price: DatafromFrontEnd.get("Price"),
  Description: DatafromFrontEnd.get("Description"),
  productImg: uploadedImg.url,
  puplicId: uploadedImg.public_id
})
// go back to frontEnd
return NextResponse.json({})
}