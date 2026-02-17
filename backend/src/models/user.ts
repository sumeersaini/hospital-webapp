"use strict";

import { Model, DataTypes, Sequelize } from "sequelize";

interface UserAttributes {
  id?: number;
  email: string | null;
  password: string | null;
  is_admin: number;
}

module.exports = (
  sequelize: Sequelize,
  DataTypes: {
    INTEGER: any;
    STRING: any;
    BOOLEAN: any;
  }
) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    email!: string | null;
    password!: string | null;
    is_admin!:number;

    static associate(models: any) {
      // define associations here if any
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_admin:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true,
    }
  );

  return User;
};
