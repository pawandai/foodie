import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRoute from './routes/user.route';

mongoose
  .connect(process.env.MONGODB_URL as string, {
    dbName: 'Database',
  })
  .then(() => console.log('App is connected to MongoDB.'));

const app = express();
app.use(express.json());
app.use(cors());

// Create a route group
app.use('/api/user', userRoute);

app.listen(7000, () => {
  console.log('Server started on port 7000');
});
