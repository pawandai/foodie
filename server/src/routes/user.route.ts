import express from 'express';
import userController from '../controllers/user.controller';
import { jwtCheck } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/', jwtCheck, userController.createCurrentUser);

export default router;
