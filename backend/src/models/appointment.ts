"use strict";

import { Model, Sequelize } from "sequelize";

interface AppointmentAttributes {
  id?: number;
  patient_name: string;
  doctor_id: number;
  speciality: string;
  appointment_date: Date;
  status: string;
  notes?: string | null;
  address: string;
  phone_number: string;
}

module.exports = (
  sequelize: Sequelize,
  DataTypes: { INTEGER: any; STRING: any; DATE: any; TEXT: any }
) => {
  class Appointment
    extends Model<AppointmentAttributes>
    implements AppointmentAttributes
  {
    id!: number;
    patient_name!: string;
    doctor_id!: number;
    speciality!: string;
    appointment_date!: Date;
    status!: string;
    notes?: string | null;
    address!: string;
    phone_number!: string;

    static associate(models: any) {
      // Each appointment belongs to a doctor
      Appointment.belongsTo(models.Doctor, {
        foreignKey: "doctor_id",
        as: "doctor", // ✅ must match include alias in API
      });
    }
  }

  Appointment.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      patient_name: { type: DataTypes.STRING, allowNull: false },
      doctor_id: { type: DataTypes.INTEGER, allowNull: false },
      speciality: { type: DataTypes.STRING, allowNull: false },
      appointment_date: { type: DataTypes.DATE, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false, defaultValue: "scheduled" },
      notes: { type: DataTypes.TEXT, allowNull: true },
      address: { type: DataTypes.STRING, allowNull: false },
      phone_number: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Appointment",
      tableName: "Appointments",
      timestamps: true,
    }
  );

  return Appointment;
};
