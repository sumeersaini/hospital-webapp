import express from 'express';
import admindashboard from '../controllers/adminController';
import { verifyToken } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/add_appointment', verifyToken, admindashboard.addAppointment);
router.post('/edit_appointment', verifyToken, admindashboard.editAppointment);
router.post('/delete_appointment', verifyToken, admindashboard.deleteAppointment);
router.post('/update_status', verifyToken, admindashboard.updateStatus);
router.post('/add_doctor', verifyToken, admindashboard.addDoctor);
router.post('/edit_doctor', verifyToken, admindashboard.editDoctor);
router.post('/list_doctors', verifyToken, admindashboard.listDoctors);
router.post('/get_doctor_by_id', verifyToken, admindashboard.getDoctorById);
router.post('/list_appointments', admindashboard.listAppointments);
router.post('/delete_doctor', verifyToken, admindashboard.deleteDoctor);
router.post('/add_doctor_time', verifyToken, admindashboard.deleteDoctor);
router.post('/delete_doctor_time', verifyToken, admindashboard.deleteDoctor);
router.post('/get_doctor_time',  admindashboard.deleteDoctor);
router.post('/add_timing',  admindashboard.addTiming);
router.post('/delete_timing',  admindashboard.deleteTiming);
router.post('/get_timings',  admindashboard.getTimings);





export default router;
