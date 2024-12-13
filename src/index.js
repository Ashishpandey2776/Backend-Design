    import mongoose from "mongoose";
   import { DB_NAME } from "./constant.js";
   import connectDB from "./db/index.js";
   import dotenv from 'dotenv';
   import app from "./app.js";
    dotenv.config({
        path:"./env"
    });
  

//    (async()=>{
//     try{
//         await mongoose.connect(`${process.env.URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error:",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app iss listen on ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//          console.error("ERROR:",error)
//          throw err
//     }
//    })()

   connectDB()
   .then(()=>{
      app.listen( process.env.PORT || 8080,()=>{
         console.log("app is listen on 8080")
      })
   })
   .catch((err)=>{
      console.log("mongodb connection fails:",err)
   })
