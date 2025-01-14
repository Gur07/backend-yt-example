// // require('dotenv').config({path:'./env'})
// import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// dotenv.config({
// })

// import express from "express"
// const app = express()

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("error", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log("listening");
//         })
//         console.log("Connected to MongoDB Atlas!");
//     } catch (error) {
//         console.error("error", error)
//         throw error
//     }
// })()


import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import { DB_NAME } from './constants.js';

dotenv.config();

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB Atlas!");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
})();
