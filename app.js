import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { start_DB } from "./src/config/database.js";
import userRoute from "./src/routes/user.route.js";
import articleRoute from "./src/routes/article.route.js";
import articleTagRoute from "./src/routes/articleTag.route.js";
import profileRoute from "./src/routes/profile.route.js";
import tagRoute from "./src/routes/tag.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // No es una dirección arbitraria es una desde donde se consulta el front
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/tag", tagRoute);
app.use("/api/article", articleRoute);
app.use("/api/articleTag", articleTagRoute);

app.listen(PORT, async () => {
  await start_DB(), console.log(`Servidor corriendo en: localhost ${PORT}`);
  console.log("---------------------------------------------------");
});
