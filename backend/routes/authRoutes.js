import express from "express";
import Author from "../models/Author.js";
import { generateJWT } from "../utils/jwt.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import passport from "../config/passportConfig.js";

const router = express.Router();

// POST /login => restituisce token di accesso
router.post("/login", async (req, res) => {
  try {
    // Estrae email e password dal corpo della richiesta
    const { email, password } = req.body;

    // Cerca l'autore nel database usando l'email
    const author = await Author.findOne({ email });
    if (!author) {
      // Se l'autore non viene trovato, restituisce un errore 401
      return res.status(401).json({ message: "Credenziali non valide" });
    }

    // Verifica la password usando il metodo comparePassword definito nel modello Author
    const isMatch = await author.comparePassword(password);
    if (!isMatch) {
      // Se la password non corrisponde, restituisce un errore 401
      return res.status(401).json({ message: "Credenziali non valide" });
    }

    // Se le credenziali sono corrette, genera un token JWT
    const token = await generateJWT({ id: author._id });

    // Restituisce il token e un messaggio di successo
    res.json({ token, message: "Login effettuato con successo" });
  } catch (error) {
    // Gestisce eventuali errori del server
    console.error("Errore nel login:", error);
    res.status(500).json({ message: "Errore del server" });
  }
});

// GET /me => restituisce l'autore collegato al token di accesso
// authMiddleware verifica il token e aggiunge i dati dell'autore a req.author
router.get("/me", authMiddleware, (req, res) => {
  // Converte il documento Mongoose in un oggetto JavaScript semplice
  const authorData = req.author.toObject();
  // Rimuove il campo password per sicurezza
  delete authorData.password;
  // Invia i dati dell'autore come risposta
  res.json(authorData);
});

// Rotta per iniziare il processo di autenticazione Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Rotta di callback per l'autenticazione Google
router.get(
  "/google/callback",
  // Passport tenta di autenticare l'utente con le credenziali Google
  passport.authenticate("google", { failureRedirect: `/login` }),
  // Se l'autenticazione fallisce, l'utente viene reindirizzato alla pagina di login
  async (req, res) => {
    try {
      // A questo punto, l'utente è autenticato con successo - req.user contiene i dati dell'utente forniti da Passport
      // Genera un JWT (JSON Web Token) per l'utente autenticato - Usiamo l'ID dell'utente dal database come payload del token
      const token = await generateJWT({ id: req.user._id });
      // Reindirizza l'utente al frontend, passando il token come parametro URL
      // Il frontend può quindi salvare questo token e usarlo per le richieste autenticate
      res.redirect(`{http://localhost:5173/login}/login?token=${token}`);
    } catch (error) {
      // Se c'è un errore nella generazione del token, lo logghiamo
      console.error("Errore nella generazione del token:", error);
      // E reindirizziamo l'utente alla pagina di login con un messaggio di errore
      res.redirect(`/login/error=auth_failed`);
    }
  }
);
export default router;
