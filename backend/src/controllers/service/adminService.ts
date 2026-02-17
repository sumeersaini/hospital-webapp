import db from "../../models";
const { QueryTypes, Op } = require("sequelize");
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const JWT_SECRET = process.env.JWT_SECRET!;
dotenv.config();
import commonHelper from "../../helpers/commonHelper";
// import { where } from "sequelize";

const adminEmail: any = process.env.ADMIN_EMAIL;

class AdminService {

    async login(payload: any, res: Response) {
        try {
            const { email, password } = payload;
            const checkUser = await db.User.findOne({ where: { email } });

            if (!checkUser) {
                return res.status(200).send({ message: "Admin not found" });
            }

            if (!adminEmail.includes(checkUser.email)) {
                return res.status(200).send({ message: "Invalid Admin!" });
            }
            const isMatch = await bcrypt.compare(password, checkUser.password);
            if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

            const token = jwt.sign({ id: checkUser.id, email: checkUser.email, is_admin: checkUser.is_admin }, JWT_SECRET, {
                expiresIn: '30d',
            });

            commonHelper.successMessage({
                token: token,
            }, "User Login successfully", res);

        } catch (error) {
            console.error("Error fetching users:", error);
            commonHelper.errorMessage("Error:" + error, res)
        }
    }

    async register(payload: any, res: Response) {
        try {
            const { email, password } = payload;

            console.log("inside register request", payload);


            if (!adminEmail.includes(email)) {
                return res.status(200).send({ message: "Invalid Admin!" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const usersData = await db.User.create({
                email,
                password: hashedPassword,
                is_admin: true,
            });

            commonHelper.successMessage({}, "Register successfully", res);

        } catch (error) {
            console.error("Error fetching users:", error);
            commonHelper.errorMessage("Error:" + error, res)
        }
    }


    async clientAppointment(payload: any, res: Response) {
        try {
            const { patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes } = payload;

            if (!patient_name || !doctor_id || !speciality || !appointment_date || !address || !phone_number) {
                return res.status(400).send({ message: "Missing required fields!" });
            }

            const newAppointment = await db.Appointment.create({
                patient_name,
                doctor_id,
                speciality,
                appointment_date,
                address,
                phone_number,
                notes,
                status: "scheduled",
            });

            commonHelper.successMessage(newAppointment, "Appointment created successfully", res);
        } catch (error) {
            console.error("Error creating appointment:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    async addAppointment(payload: any, res: Response) {
        try {
            const { patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes } = payload;

            if (!patient_name || !doctor_id || !speciality || !appointment_date || !address || !phone_number) {
                return res.status(400).send({ message: "Missing required fields!" });
            }

            const newAppointment = await db.Appointment.create({
                patient_name,
                doctor_id,
                speciality,
                appointment_date,
                address,
                phone_number,
                notes,
                status: "scheduled",
            });

            commonHelper.successMessage(newAppointment, "Appointment created successfully", res);
        } catch (error) {
            console.error("Error creating appointment:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Edit Appointment (update details except status)
    async editAppointment(payload: any, res: Response) {
        try {
            const { id, patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes } = payload;
            const appointment = await db.Appointment.findByPk(id);

            if (!appointment) {
                return res.status(404).send({ message: "Appointment not found" });
            }

            await appointment.update(patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes);

            commonHelper.successMessage(appointment, "Appointment updated successfully", res);
        } catch (error) {
            console.error("Error editing appointment:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Delete Appointment
    async deleteAppointment(payload: any, res: Response) {
        try {
            const { id } = payload;
            const appointment = await db.Appointment.findByPk(id);
            if (!appointment) {
                return res.status(404).send({ message: "Appointment not found" });
            }

            await appointment.destroy();

            commonHelper.successMessage({}, "Appointment deleted successfully", res);
        } catch (error) {
            console.error("Error deleting appointment:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Update Appointment Status
    async updateStatus(payload: any, res: Response) {
        try {
            const { id, status } = payload;
            const appointment = await db.Appointment.findByPk(id);
            if (!appointment) {
                return res.status(404).send({ message: "Appointment not found" });
            }

            if (!["scheduled", "completed", "cancelled"].includes(status)) {
                return res.status(400).send({ message: "Invalid status value!" });
            }

            await appointment.update({ status });

            commonHelper.successMessage(appointment, "Status updated successfully", res);
        } catch (error) {
            console.error("Error updating status:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    async addDoctor(payload: any, res: Response) {
        try {
            const { name, speciality, phone_number, address } = payload;

            if (!name || !speciality || !phone_number || !address) {
                return res.status(400).send({ message: "All fields are required!" });
            }

            const doctor = await db.Doctor.create({
                name,
                speciality,
                phone_number,
                address,
            });

            commonHelper.successMessage(doctor, "Doctor added successfully", res);
        } catch (error) {
            console.error("Error adding doctor:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Edit Doctor
    async editDoctor(payload: any, res: Response) {
        try {
            const { id, name, speciality, phone_number, address } = payload;
            const doctor = await db.Doctor.findOne({ where: { id } });
            if (!doctor) {
                return res.status(404).send({ message: "Doctor not found" });
            }

            await doctor.update({
                name,
                speciality,
                phone_number,
                address,
            });

            commonHelper.successMessage(doctor, "Doctor updated successfully", res);
        } catch (error) {
            console.error("Error editing doctor:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Delete Doctor
    async deleteDoctor(payload: any, res: Response) {
        try {
            const { id } = payload;
            const doctor = await db.Doctor.findByPk(id);
            if (!doctor) {
                return res.status(404).send({ message: "Doctor not found" });
            }

            await doctor.destroy();

            commonHelper.successMessage({}, "Doctor deleted successfully", res);
        } catch (error) {
            console.error("Error deleting doctor:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ List all Doctors
    async listDoctors(res: Response) {
        try {
            const doctors = await db.Doctor.findAll();

            commonHelper.successMessage(doctors, "Doctors fetched successfully", res);
        } catch (error) {
            console.error("Error fetching doctors:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Get Doctor by ID
    async getDoctorById(payload: any, res: Response) {
        try {
            const { id } = payload;
            const doctor = await db.Doctor.findByPk(id);
            if (!doctor) {
                return res.status(404).send({ message: "Doctor not found" });
            }

            commonHelper.successMessage(doctor, "Doctor fetched successfully", res);
        } catch (error) {
            console.error("Error fetching doctor:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }
    async getDoctorTiming(res: Response) {
        try {
            const doctorsWithTimings = await db.sequelize.query(
                `
      SELECT 
        d.id as doctor_id,
        d.name,
        d.speciality,
        d.phone_number,
        d.address,
        dt.id as timing_id,
        dt.start_time,
        dt.end_time
      FROM Doctors d
      LEFT JOIN DoctorTimings dt
        ON dt.doctor_id = d.id
      ORDER BY d.id, dt.start_time
      `,
                {
                    type: db.Sequelize.QueryTypes.SELECT,
                }
            );

            // Transform the flat result into nested structure: { doctor -> [timings] }
            const doctorsMap: any = {};

            doctorsWithTimings.forEach((row: any) => {
                if (!doctorsMap[row.doctor_id]) {
                    doctorsMap[row.doctor_id] = {
                        id: row.doctor_id,
                        name: row.name,
                        speciality: row.speciality,
                        phone_number: row.phone_number,
                        address: row.address,
                        timings: [],
                    };
                }

                if (row.timing_id) {
                    doctorsMap[row.doctor_id].timings.push({
                        id: row.timing_id,
                        start_time: row.start_time,
                        end_time: row.end_time,
                    });
                }
            });

            const result = Object.values(doctorsMap);

            commonHelper.successMessage(
                result,
                "Doctors with timings fetched successfully",
                res
            );
        } catch (error) {
            console.error("Error fetching doctors with timings:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    async listAppointments(payload: any, res: Response) {
        try {
            const { page = 1, limit = 10 } = payload;
            const offset = (page - 1) * limit;

            const { count, rows } = await db.Appointment.findAndCountAll({
                include: [
                    {
                        model: db.Doctor,
                        as: "doctor", // ✅ must match Appointment.associate
                        attributes: ["id", "name", "speciality", "phone_number", "address"],
                    },
                ],
                order: [["appointment_date", "DESC"]],
                limit,
                offset,
            });

            const totalPages = Math.ceil(count / limit);

            // Map doctor info into appointment for frontend
            const appointments = rows.map((appt: any) => ({
                ...appt.toJSON(),
                doctor_name: appt.doctor?.name || "",
                speciality: appt.doctor?.speciality || "",
            }));

            commonHelper.successMessage(
                {
                    appointments,
                    pagination: {
                        totalRecords: count,
                        totalPages,
                        currentPage: page,
                        pageSize: limit,
                    },
                },
                "Appointments fetched successfully",
                res
            );
        } catch (error) {
            console.error("Error fetching appointments:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Get Appointment by ID
    async getAppointmentById(payload: any, res: Response) {
        try {
            const { id } = payload;
            const appointment = await db.Appointment.findByPk(id, {
                include: [
                    {
                        model: db.Doctor,
                        as: "doctor",
                        attributes: ["id", "name", "speciality", "phone_number", "address"],
                    },
                ],
            });

            if (!appointment) {
                return res.status(404).send({ message: "Appointment not found" });
            }

            commonHelper.successMessage(appointment, "Appointment fetched successfully", res);
        } catch (error) {
            console.error("Error fetching appointment:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    async addTiming(payload: any, res: Response) {
        try {
            const { doctor_id, start_time, end_time } = payload;

            if (!doctor_id || !start_time || !end_time) {
                return res.status(400).send({ message: "doctorId, start_time and end_time are required!" });
            }

            // Check if doctor exists
            const doctor = await db.Doctor.findByPk(doctor_id);
            if (!doctor) {
                return res.status(404).send({ message: "Doctor not found" });
            }

            const timing = await db.DoctorTiming.create({
                doctor_id,
                start_time,
                end_time,
            });

            commonHelper.successMessage(timing, "Timing added successfully", res);
        } catch (error) {
            console.error("Error adding timing:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    // ✅ Delete a timing
    async deleteTiming(payload: any, res: Response) {
        try {
            const { id } = payload;
            const timing = await db.DoctorTiming.findByPk(id);
            if (!timing) {
                return res.status(404).send({ message: "Timing not found" });
            }

            await timing.destroy();

            commonHelper.successMessage({}, "Timing deleted successfully", res);
        } catch (error) {
            console.error("Error deleting timing:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }

    async getTimings(payload: any, res: Response) {
        try {
            const { doctor_id } = payload;
            // Check if doctor exists
            const doctorTiming = await db.DoctorTiming.findAll({ where: { doctor_id } });

            if (!doctorTiming) {
                return res.status(404).send({ message: "Doctor not found" });
            }

            commonHelper.successMessage(
                doctorTiming,
                "Doctor timings fetched successfully",
                res
            );
        } catch (error) {
            console.error("Error fetching doctor timings:", error);
            commonHelper.errorMessage("Error: " + error, res);
        }
    }
}


export default new AdminService();