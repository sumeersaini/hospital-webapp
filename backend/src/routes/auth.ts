import express from 'express';
import adminController from "../controllers/adminController";

const router = express.Router();

router.post("/register", adminController.register);
router.post("/login", adminController.login);
router.post('/client_appointment', adminController.clientAppointment);
router.post('/get_doctors', adminController.listDoctors);
router.post('/get_doctors_timing', adminController.getDoctorTiming);

export default router;
