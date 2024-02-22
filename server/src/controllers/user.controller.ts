import { Request, Response } from 'express';
import User from '../models/user.model';

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    // Check if the user already exists
    if (existingUser) return res.status(200).send();

    // Create a new user if it doesn't already exist
    const newUser = new User(req.body);
    await newUser.save();

    // return the user to the frontend
    res.status(201).json(newUser.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error while creating user' });
  }
};

export default { createCurrentUser };
