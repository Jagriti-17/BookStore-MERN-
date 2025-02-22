import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';


const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy
//Method 1:
app.use(cors());

//Method 2:
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (req,res)=>{
    console.log(res)
    return res.status(234).send("Welcome , User :) !");

});

app.use('/books', booksRoutes);


mongoose
    .connect(mongoDBURL)
    .then(() =>{
    console.log(`App connected to database`);
    app.listen(PORT , ()=>{
        console.log(`App is listening to port : ${PORT}`);
    });
        
    })
    .catch((error) =>{
        console.log(error);
    })