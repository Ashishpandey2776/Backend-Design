import { Promise } from "mongoose"

const asyncHandler=(requestHandler)=>{
    (res,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err));
    }
}   
//both type we can use both are same just writing tech diff

// const asyncHandler=(requestHandler)=>async(req,res,next)=>{
//     try{
//        await fn(req,res,next)
//     }catch(error){
//        res.status(err.code || 500).json({
//         success:false,
//         message:err.message
//        })
//     }
// }

//this is a wrapper func which make dev easy