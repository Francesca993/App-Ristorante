import express from "express";
import endpoints from "express-list-endpoints";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import blogPostRoutes from "./routes/blogPostRoutes.js";
import ordineRoutes from "./routes/ordineRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connesso"))
  .catch((err) => console.error("MONGO DB: ERRORE ", err));

const PORT = process.env.PORT || 6001;
app.use("/api/users", userRoutes);
app.use("/api/posts", blogPostRoutes);
app.use("/api/ordine", ordineRoutes);
app.listen(PORT, () => {
  console.log("server acceso sulla porta");
  console.log("sono disponibili i seguenti endpoints");
  console.table(endpoints(app));
});
