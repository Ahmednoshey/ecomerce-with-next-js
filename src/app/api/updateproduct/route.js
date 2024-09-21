import ProductsModal from "app/DBconfig/model/products";
import { connectMongoDB } from "app/DBconfig/mongoDB";
import { NextResponse } from "next/server";

export async function PUT(request) {
  // recived data from front end
  const DatafromFrontEnd = await request.json();

  // connect with Database
  await connectMongoDB();

  // try to story data in database
  await ProductsModal.updateOne(
    { _id: DatafromFrontEnd.productId },
    {
      Title: DatafromFrontEnd.Title,
      Price: DatafromFrontEnd.Price,
      Description: DatafromFrontEnd.Description,
    }
  );
  // go back to frontEnd
  return NextResponse.json({});
}
