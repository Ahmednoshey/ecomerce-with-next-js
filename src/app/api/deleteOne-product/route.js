import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"
import ProductsModal from "app/DBconfig/model/products";
export async function DELETE(request) {
  // recived data from front end
const DatafromFrontEnd = await request.json()
// connect with Database
await connectMongoDB()
// get data from database
 await ProductsModal.deleteOne({
  _id: DatafromFrontEnd.productId,
});
// go back to frontEnd
return NextResponse.json({})
}