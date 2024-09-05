import express from "express";
import Author from "../models/Author.js";
import ListaOrdine from "../models/ListaOrdine.js";

const router = express.Router();

// GET /authors: ritorna la lista degli user
router.get("/", async (req, res) => {
  try {
    // Recupera tutti gli autori dal database
    const authors = await Author.find();
    // Invia la lista degli autori come risposta JSON
    res.json(authors);
  } catch (err) {
    // In caso di errore, invia una risposta di errore
    res.status(500).json({ message: err.message });
  }
});

// GET /authors/123: ritorna il singolo user
router.get("/:id", async (req, res) => {
  try {
    // Cerca un autore specifico per ID
    const author = await Author.findById(req.params.id);
    if (!author) {
      // Se l'autore non viene trovato, invia una risposta 404
      return res.status(404).json({ message: "User non trovato" });
    }
    // Invia l'autore trovato come risposta JSON
    res.json(author);
  } catch (err) {
    // In caso di errore, invia una risposta di errore
    res.status(500).json({ message: err.message });
  }
});

// NEW! POST /authors: crea un nuovo user
router.post("/", async (req, res) => {
  try {
    // Crea una nuova istanza di Author con i dati dalla richiesta
    const author = new Author(req.body);
    // Salva il nuovo user nel database
    const newAuthor = await author.save();

    // Rimuovi la password dalla risposta per sicurezza
    const authorResponse = newAuthor.toObject();
    delete authorResponse.password;

    // Invia il nuovo user creato come risposta JSON con status 201 (Created)
    res.status(201).json(authorResponse);
  } catch (err) {
    // In caso di errore (es. validazione fallita), invia una risposta di errore
    res.status(400).json({ message: err.message });
  }
});

// PUT /authors/123: modifica l'user con l'id associato
router.put("/:id", async (req, res) => {
  try {
    // Trova e aggiorna l'user nel database
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAuthor) {
      // Se l'user non viene trovato, invia una risposta 404
      return res.status(404).json({ message: "Autore non trovato" });
    }
    // Invia l'user aggiornato come risposta JSON
    res.json(updatedAuthor);
  } catch (err) {
    // In caso di errore, invia una risposta di errore
    res.status(400).json({ message: err.message });
  }
});

// DELETE /authors/123: cancella l'user con l'id associato
router.delete("/:id", async (req, res) => {
  try {
    // Trova e elimina l'user dal database
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      // Se l'user non viene trovato, invia una risposta 404
      return res.status(404).json({ message: "Autore non trovato" });
    }
    // Invia un messaggio di conferma come risposta JSON
    res.json({ message: "User eliminato" });
  } catch (err) {
    // In caso di errore, invia una risposta di errore
    res.status(500).json({ message: err.message });
  }
});

// GET /authors/:id/ordine: ricevi tutti gli ordini di uno specifico user
router.get("/:id/ordine", async (req, res) => {
  try {
    // Cerca l'user specifico per ID
    const author = await Author.findById(req.params.id);
    if (!author) {
      // Se l'user non viene trovato, invia una risposta 404
      return res.status(404).json({ message: "User non trovato" });
    }
    // Cerca gli ordini dell'autore usando la sua email
    const OrdineTotale = await ListaOrdine.find({ author: author.email });
    // Invia la lista dei blog post come risposta JSON
    res.json(OrdineTotale);
  } catch (err) {
    // In caso di errore, invia una risposta di errore
    res.status(500).json({ message: err.message });
  }
});

export default router;
