import express from 'express';
import multer from 'multer';
import restaurantController from '../controllers/restaurant.controller';
import { jwtCheck, jwtParse } from '../middleware/auth.middleware';
import { validateRestaurantRequest } from '../middleware/validation.middleware';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5mb
  },
});

router.get('/', jwtCheck, jwtParse, restaurantController.getRestaurant);

router.post(
  '/',
  upload.single('imageFile'),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantController.createRestaurant
);

router.put(
  '/',
  upload.single('imageFile'),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantController.updateRestaurant
);

export default router;
