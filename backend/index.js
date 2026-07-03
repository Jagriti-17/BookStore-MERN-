import express from "express";
import mongoose from 'mongoose';
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();


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
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("App connected to database");

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });