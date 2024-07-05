import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"; 

console.log(process.env.DB_NAME)
console.log(process.env.PORT)
const connectDB=async()=>{
    try{
    const connectInstance= await mongoose.connect(`mongodb+srv://ashish2776:16CG6FDTHPmuW9rQ@backendcode0.uqcn1el.mongodb.net/${DB_NAME}`)
     
      console.log(`connected !! DB HOST: ${connectInstance.connection.host}`)

    }catch(error){
        console.log("mongoDb connection error:",error)
        process.exit(1)
    }
}

export default connectDB; 