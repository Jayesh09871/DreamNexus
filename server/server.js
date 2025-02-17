import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  app.listen(8000, () => {
    console.log('Server is running on port 8000!');
  });
  