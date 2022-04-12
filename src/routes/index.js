import express from 'express';
import HolidaysRouter from './holidaysRouter.js';

const appRouter = express.Router();

appRouter.use('/holiday', HolidaysRouter);

export default appRouter;