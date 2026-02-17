"use strict";

import { Model, Sequelize } from "sequelize";

interface DoctorTimingAttributes {
  id?: number;
  doctor_id: number;
  start_time: string; // e.g., "09:00"
  end_time: string;   // e.g., "12:00"
}

module.exports = (
  sequelize: Sequelize,
  DataTypes: {
    INTEGER: any;
    STRING: any;
  }
) => {
  class DoctorTiming extends Model<DoctorTimingAttributes> implements DoctorTimingAttributes {
    id!: number;
    doctor_id!: number;
    start_time!: string;
    end_time!: string;

    static associate(models: any) {
      // ✅ Each timing belongs to one doctor
      DoctorTiming.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
      });
    }
  }

  DoctorTiming.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DoctorTiming",
      tableName: "DoctorTimings",
      timestamps: true,
    }
  );

  return DoctorTiming;
};
