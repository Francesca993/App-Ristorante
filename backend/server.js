import express from "express";
import endpoints from "express-list-endpoints";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogPostRoutes from "./routes/blogPostRoutes.js";
import ordineRoutes from "./routes/ordineRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import prenotazioniRoutes from "./routes/prenotazioniRoutes.js";
import cors from "cors";

// importo i middleware
import {
  badRequestHandler,
  unauthorizedHandler,
  notFoundHandler,
  genericErrorHandler,
} from "./middleware/errorHandlers.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connesso"))
  .catch((err) => console.error("MONGO DB: ERRORE ", err));

const PORT = process.env.PORT || 6001;

app.use("/api/auth", authRoutes); // rotte per autenticaione
app.use("/api/authors", authorRoutes);
app.use("/api/posts", blogPostRoutes);
app.use("/api/ordine", ordineRoutes);
app.use("/api/prenotazioni", prenotazioniRoutes);
// Applicazione dei middleware per la gestione degli errori

app.listen(PORT, () => {
  console.log("server acceso sulla porta ", PORT);
  console.log("sono disponibili i seguenti endpoints");
  console.table(endpoints(app));
});
