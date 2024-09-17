import ProductsModal from "app/DBconfig/model/products"
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"
export async function POST(request) {
// recived data from front end
const DatafromFrontEnd = await request.formData();
// connect with Database
await connectMongoDB()
// try to story data in database
await ProductsModal.create({
  Title: DatafromFrontEnd.get("Title"),
  Price: DatafromFrontEnd.get("Price"),
  Description: DatafromFrontEnd.get("Description"),
  productImg: DatafromFrontEnd.get("productImg")
})
// go back to frontEnd
return NextResponse.json({})
}