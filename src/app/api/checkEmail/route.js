import UserModal from "app/DBconfig/model/user"
import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"




export async function POST(request) {

// recived data from front end
const DatafromFrontEnd = await request.json()
console.log("******************  IS USER EXIST  *************************")
console.log(DatafromFrontEnd)


// connect with Database
await connectMongoDB()

// try to story data in database
const user =  await UserModal.findOne({
  Email: DatafromFrontEnd.Email,
})
console.log("*****************************************");
console.log(user);
// go back to frontEnd
return NextResponse.json({user})

}