import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const ArticleModel = sequelize.define("Article", {
  title: {
    type: DataTypes.CHAR(200),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT(),
    allowNull: false,
  },
  excerpt: {
    type: DataTypes.CHAR(500),
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("published", "archived"),
    defaultValue: "published",
  },
});
