import express from "express";
import dotenv from "dotenv";
import { start_DB } from "./src/config/database.js";
import userRoute from "./src/routes/user.route.js";
import { ArticleModel } from "./src/models/article.model.js";
import { ArticleTagModel } from "./src/models/articleTag.model.js";
import profileRoute from "./src/routes/profile.route.js";
import { TagModel } from "./src/models/tag.model.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/profile", profileRoute);

app.listen(PORT, async () => {
  await start_DB(), console.log(`Servidor corriendo en: localhost ${PORT}`);
});
