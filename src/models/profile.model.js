import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ProfileModel = sequelize.define("Profile", {
  first_name: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
  biography: {
    type: DataTypes.TEXT(),
    allowNull: true,
  },
  avatar_url: {
    type: DataTypes.CHAR(/*255*/),
    allowNull: true,
  },
  birth_date: {
    type: DataTypes.DATE(),
    allowNull: true,
  },
});
