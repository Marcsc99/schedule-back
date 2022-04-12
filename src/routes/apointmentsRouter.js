import express from 'express';
import Controller from '../controllers/index.js'
const ApointmentsController = Controller.ApointmentsController.default;
const ApointmentsRouter = express.Router();

ApointmentsRouter.get('/', ApointmentsController.getApointments)
ApointmentsRouter.post('/', ApointmentsController.createApointment)

export default ApointmentsRouter;