import { connectMongoDB } from "app/DBconfig/mongoDB"
import { NextResponse } from "next/server"




export async function POST(request) {

// recived data from front end
const DatafromFrontEnd = await request.json()
console.log(DatafromFrontEnd)


// connect with Database
await connectMongoDB()

// try to story data in database



// go back to frontEnd
return NextResponse.json({})

}