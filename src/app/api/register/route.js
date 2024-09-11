import UserModal from "app/DBconfig/model/user"
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";



export async function POST(request) {

// recived data from front end
const DatafromFrontEnd = await request.json()
console.log(DatafromFrontEnd)


// connect with Database
await connectMongoDB()

// hash password
const salt = await bcrypt.genSalt();
const hashedPassword = await bcrypt.hash(DatafromFrontEnd.Password, salt);


// try to story data in database
await UserModal.create({
  name: DatafromFrontEnd.name,
  email: DatafromFrontEnd.email,
  Password: hashedPassword,
})


// go back to frontEnd
return NextResponse.json({})

}