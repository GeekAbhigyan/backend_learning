import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
  cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_API_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET  
});

 // Upload an image
 const uploadOnCloudinary = async (localFilePath)=>{
        try {
            if(!localFilePath) return null

          const response = await cloudinary.uploader.upload(localFilePath,{
                resource_type :"auto"
            })
            // file has been uploades successfully
            // console.log("file has been uploaded sussessfully",response.url)
            fs.unlinkSync(localFilePath)
            return response ;
        } catch (error)  {
                fs.unlinkSync(localFilePath) // remove the 
                //locally saved temporary filr as the upload 
                //operation got failed

                return null;
        }
 }

export {uploadOnCloudinary}
 

