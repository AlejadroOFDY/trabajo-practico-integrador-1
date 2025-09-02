import express from "express";
import dotenv from "dotenv";
import { start_DB } from "./src/config/database.js";
import { UserModel } from "./src/models/user.model.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
// app.use("/api/user", "colocar la ruta");

app.listen(PORT, async () => {
  await start_DB(), console.log(`Servidor corriendo en: localhost ${PORT}`);
});
