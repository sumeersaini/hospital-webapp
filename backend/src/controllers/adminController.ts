import { Request, Response } from 'express';
import AdminService from './service/adminService';
import commonHelper from '../helpers/commonHelper';
class AdminController {

  async login(req: Request, res: Response) {
    try {
      console.log(req.body, "login body")

      const { email, password } = req.body;
      await AdminService.login(
        {
          email, password
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async register(req: Request, res: Response) {
    try {
      console.log(req.body, "register body")

      const { email, password } = req.body;
      await AdminService.register(
        {
          email, password
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  
   async clientAppointment(req: Request, res: Response) {
    try {
      console.log(req.body, "clientAppointment body")

      const { patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes } = req.body;
      await AdminService.clientAppointment(
        {
          patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async addAppointment(req: Request, res: Response) {
    try {
      console.log(req.body, "addAppointment body")

      const { patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes } = req.body;
      await AdminService.addAppointment(
        {
          patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async editAppointment(req: Request, res: Response) {
    try {
      console.log(req.body, "editAppointment body")

      const { id, patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes } = req.body;
      await AdminService.editAppointment(
        {
          id, patient_name, doctor_id, speciality, appointment_date, address, phone_number, notes
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }


  async deleteAppointment(req: Request, res: Response) {
    try {
      console.log(req.body, "deleteAppointment body")

      const { id } = req.body;
      await AdminService.deleteAppointment(
        {
          id
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }



  async updateStatus(req: Request, res: Response) {
    try {
      console.log(req.body, "updateStatus body")

      const { id, status } = req.body;
      await AdminService.updateStatus(
        {
          id, status
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }



  async addDoctor(req: Request, res: Response) {
    try {
      console.log(req.body, "addDoctor body")

      const { name, speciality, phone_number, address } = req.body;
      await AdminService.addDoctor(
        {
          name, speciality, phone_number, address
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async editDoctor(req: Request, res: Response) {
    try {
      console.log(req.body, "editDoctor body")

      const {id, name, speciality, phone_number, address } = req.body;
      await AdminService.editDoctor(
        {
         id, name, speciality, phone_number, address
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async deleteDoctor(req: Request, res: Response) {
    try {
      console.log(req.body, "deleteDoctor body")

      const { id } = req.body;
      await AdminService.deleteDoctor(
        {
          id
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async listDoctors(req: Request, res: Response) {
    try {
      console.log(req.body, "listDoctors body")

      await AdminService.listDoctors(

        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async getDoctorById(req: Request, res: Response) {
    try {
      console.log(req.body, "getDoctorById body")

      const { id } = req.body;
      await AdminService.getDoctorById(
        {
          id
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  
  async getDoctorTiming(req: Request, res: Response) {
    try {
      console.log(req.body, "listDoctors body")

      await AdminService.getDoctorTiming(

        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

  async listAppointments(req: Request, res: Response) {
    try {
      console.log(req.body, "listAppointments body")

      const { page, limit } = req.body;
      await AdminService.listAppointments(
        {
          page, limit
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

 async addTiming(req: Request, res: Response) {
    try {
      console.log(req.body, "addTiming body")

      const {doctor_id, start_time, end_time } = req.body;
      await AdminService.addTiming(
        {
          doctor_id, start_time, end_time
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

   async deleteTiming(req: Request, res: Response) {
    try {
      console.log(req.body, "deleteTiming body")

      const { id } = req.body;
      await AdminService.deleteTiming(
        {
          id
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }

   async getTimings(req: Request, res: Response) {
    try {
      console.log(req.body, "getTimings body")

      const { doctor_id } = req.body;
      await AdminService.getTimings(
        {
          doctor_id
        },
        res
      );

    } catch (error: any) {
      commonHelper.errorMessage("Error:" + error, res)
    }
  }


}



export default new AdminController();
