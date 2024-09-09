import UserModal from "app/DBconfig/model/user"
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"




export async function POST(request) {

// recived data from front end
const DatafromFrontEnd = await request.json()
console.log(DatafromFrontEnd)


// connect with Database
await connectMongoDB()

// try to story data in database
await UserModal.create({
  Name: DatafromFrontEnd.Name,
  Email: DatafromFrontEnd.Email,
  Password: DatafromFrontEnd.Password
})


// go back to frontEnd
return NextResponse.json({})

}