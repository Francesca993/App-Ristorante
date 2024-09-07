import express from "express";
import endpoints from "express-list-endpoints";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogPostRoutes from "./routes/blogPostRoutes.js";
import ordineRoutes from "./routes/ordineRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import prenotazioniRoutes from "./routes/prenotazioniRoutes.js";
import visualizzaOrdiniRoutes from "./routes/visualizzaOrdiniRoutes.js";
import cors from "cors";
import session from "express-session";
import passport from "./config/passportConfig.js";

// importo i middleware
import {
  badRequestHandler,
  unauthorizedHandler,
  notFoundHandler,
  genericErrorHandler,
} from "./middleware/errorHandlers.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Configurazione della sessione
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Inizializzazione di Passport
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb connesso"))
  .catch((err) => console.error("MONGO DB: ERRORE ", err));

app.use("/api/auth", authRoutes); // rotte per autenticaione
app.use("/api/posts", blogPostRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/ordine", authMiddleware, ordineRoutes);
app.use("/api/visualizzaordini", visualizzaOrdiniRoutes);
app.use("/api/prenotazioni", prenotazioniRoutes);

const PORT = process.env.PORT || 6001;
// Applicazione dei middleware per la gestione degli errori
app.use(badRequestHandler); // Gestisce errori 400 Bad Request
app.use(unauthorizedHandler); // Gestisce errori 401 Unauthorized
app.use(notFoundHandler); // Gestisce errori 404 Not Found
app.use(genericErrorHandler); // Gestisce tutti gli altri errori

app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
  console.log("sono disponibili i seguenti endpoints");
  console.table(endpoints(app));
});
