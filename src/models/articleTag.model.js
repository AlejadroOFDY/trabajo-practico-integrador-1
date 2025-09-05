import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { ArticleModel } from "./article.model.js";
import { TagModel } from "./tag.model.js";

export const ArticleTagModel = sequelize.define("ArticleTag", {
  id: {
    type: DataTypes.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

ArticleTagModel.belongsTo(ArticleModel, {
  foreignKey: "article_id",
  as: "article",
  onDelete: "CASCADE",
});

ArticleTagModel.belongsTo(TagModel, {
  foreignKey: "tag_id",
  as: "tag",
  onDelete: "CASCADE",
});

ArticleModel.belongsToMany(TagModel, {
  through: ArticleTagModel,
  foreignKey: "article_id",
  as: "tags",
  onDelete: "CASCADE",
});

TagModel.belongsToMany(ArticleModel, {
  through: ArticleTagModel,
  foreignKey: "tag_id",
  as: "articles",
  onDelete: "CASCADE",
});
