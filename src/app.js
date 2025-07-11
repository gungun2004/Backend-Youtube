import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express()

app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }))   //data from other source
app.use(express.json({
    limit:"16kb"
}))//form data will be fetched here
 app.use(express.urlencoded({extended:true,limit:"16kb"}))
 //feth data from url
 app.use(express.static("public"))  //for assets storing in localstorage
app.use(cookieParser())

export {app}
