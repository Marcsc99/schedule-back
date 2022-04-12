import express from 'express';
import HolidaysRouter from './holidaysRouter.js';
import ApointmentsRouter from './apointmentsRouter.js';

const appRouter = express.Router();

appRouter.use('/holiday', HolidaysRouter);
appRouter.use('/apointments', ApointmentsRouter);

export default appRouter;