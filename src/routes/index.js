import express from 'express';
import { HolidaysRouter } from './holidaysRouter';

const appRouter = express.Router();

appRouter.use('/holidays', HolidaysRouter);

export default appRouter;