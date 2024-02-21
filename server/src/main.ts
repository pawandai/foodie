import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('App is connected to MongoDB.'));

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' });
});

app.listen(7000, () => {
  console.log('Server started on port 7000');
});
