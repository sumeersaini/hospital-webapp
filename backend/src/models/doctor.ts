"use strict";

import { Model, Sequelize } from "sequelize";

interface DoctorAttributes {
  id?: number;
  name: string;
  speciality: string;
  phone_number: string;
  address: string;
}

module.exports = (
  sequelize: Sequelize,
  DataTypes: {
    INTEGER: any;
    STRING: any;
  }
) => {
  class Doctor extends Model<DoctorAttributes> implements DoctorAttributes {
    id!: number;
    name!: string;
    speciality!: string;
    phone_number!: string;
    address!: string;

    static associate(models: any) {
      // ✅ One doctor can have many appointments
      Doctor.hasMany(models.Appointment, {
        foreignKey: "doctorId",
        as: "appointments",
      });
    }
  }

  Doctor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      speciality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Doctor",
      tableName: "Doctors",
      timestamps: true,
    }
  );

  return Doctor;
};
