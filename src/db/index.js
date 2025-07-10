import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB =async()=>{
    try{
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host} `)
    }
    catch(error)
    {
        console.log("Error in connecting mongodb"+error)
        process.exit(1)  //return or exits with 1 status 
    }
}
export default connectDB