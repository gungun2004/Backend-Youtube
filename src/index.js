import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB().then(()=>
{
    app.on("error",(error)=>{
        console.log("ERR:",error)
        throw error                                   //we are litening error for any event 
    })
    app.listen(process.env.PORT||8000),()=>{
        console.log(`SERVER IS RUNNING AT PORT${process.env.PORT}`)
    }
}).
catch((error)=>
{
    console.log("MONGO DB CONNECTION FAILED",error)
})
