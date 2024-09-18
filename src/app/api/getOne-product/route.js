
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"
import ProductsModal from "app/DBconfig/model/products";
export async function GET(request) {
// connect with Database
await connectMongoDB()
// get data from database
const id = request.nextUrl.searchParams.get("id")
const objData = await ProductsModal.findOne({
  _id: id,
});
// go back to frontEnd
return NextResponse.json(objData)
}