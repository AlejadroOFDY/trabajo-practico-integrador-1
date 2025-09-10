import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const ArticleModel = sequelize.define(
  "Article",
  {
    title: {
      type: DataTypes.CHAR(200),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    excerpt: {
      type: DataTypes.CHAR(),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("published", "archived"),
      defaultValue: "published",
    },
  },
  { paranoid: true }
);

ArticleModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "author",
  onDelete: "CASCADE",
});
UserModel.hasMany(ArticleModel, {
  foreignKey: "user_id",
  as: "articles",
  onDelete: "CASCADE",
});
