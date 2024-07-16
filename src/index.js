// require('dotenv').config({path:'./env'});

import dotenv from "dotenv"
// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants"
import connectDB from './db/dbfile.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch(()=>{
    console.log("mongo db connection failed")
})









// import express from "express";
// const app = express();
// ( async ()=> {

//     try {

//         mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        
//         app.on("error",(error)=>{
//             console.log("ERRR:",error);
//             throw error
//         })


//         appp.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.port}`);
//         })


//     } catch (error) {
//        console.log("ERROR:",error) ;
//        throw err
//     }

// } )()