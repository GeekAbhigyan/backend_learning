import { asyncHandler } from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";


const registerUser = asyncHandler( async(req , res)=>{
//   res.status(200).json({
//     message: "okk"
//   })
  
  
  
  
    //get user details from frontend
   //validation -> not empty
   //check if user already exist , email
   //check for images 
   //check for avatar 
   // upload them to cloudinary 
   // create user object  => create entry in db
   // remove password and refresh token field from response 
   // check for user creation
   // return res

   const {fullName,email,username,password} = req.body
    console.log("email",email);

    if()


})


export {registerUser}