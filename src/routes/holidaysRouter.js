import express from 'express';
import Controller from '../controllers/index.js'
const HolidaysController = Controller.HolidaysController.default;
const HolidaysRouter = express.Router();

HolidaysRouter.get('/:year/:country', HolidaysController.getHolidays)

export default HolidaysRouter;