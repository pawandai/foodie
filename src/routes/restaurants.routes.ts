import express from 'express';
import { param } from 'express-validator';
import restaurantsControllers from '../controllers/restaurants.controllers';

const router = express.Router();

router.get(
  '/search/:city',
  param('city')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('City parameter must be a valid string'),
  restaurantsControllers.searchRestaurant
);

export default router;
