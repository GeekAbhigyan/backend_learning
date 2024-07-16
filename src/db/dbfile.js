import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";










const connectDB = async()=>{
    try {

        const connectionInstance = await mongoose.connect
        (`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        
    console.log(`MONGODB connected !! DB HOST : ${connectionInstance.connection.host} `);

    } catch (error) {
        console.log("MongoDB connection error now",error);
        process.exit(1);
    }
}

export default connectDB;