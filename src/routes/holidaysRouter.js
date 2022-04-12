import express from 'express';
import { HolidaysController } from '../controllers'

const HolidaysRouter = express.Router();

router.get('/:year/:country', HolidaysController.getHolidays())

export default HolidaysRouter;