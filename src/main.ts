import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoute from './routes/user.route';
import { v2 as cloudinary } from 'cloudinary';
import restaurantRoute from './routes/restaurant.route';

mongoose
  .connect(process.env.MONGODB_URL as string, {
    dbName: 'Database',
  })
  .then(() => console.log('App is connected to MongoDB.'));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

// Create a route group
app.use('/api/user', userRoute);
app.use('/api/restaurant', restaurantRoute);

app.listen(7000, () => {
  console.log('Server started on port 7000');
});
