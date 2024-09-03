import express from "express";
import BlogPost from "../models/BlogPost.js";

const router = express.Router();

//Ottenere la lista di tutti i post
/*router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find({});
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});*/

// Rotta per ottenere i post con paginazione

router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const posts = await BlogPost.find()
      .limit(limit)
      .skip((page - 1) * limit);

    const count = await BlogPost.countDocuments();
    res.json({
      posts,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

// Rotta per ottenere i post con paginazione
/*
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Estrae il numero di pagina dalla query, default a 1 se non specificato
    const limit = parseInt(req.query.limit) || 10; // Estrae il limite di risultati per pagina, default a 10
    const sort = req.query.sort || "name"; // Determina il campo per l'ordinamento, default a "name"
    const sortDirection = req.query.sortDirection === "desc" ? -1 : 1; // Determina la direzione dell'ordinamento (1 per ascendente, -1 per discendente)
    const skip = (page - 1) * limit; // Calcola quanti documenti saltare per arrivare alla pagina richiesta

    // Esegue la query al database con paginazione, ordinamento e limite
    const posts = await BlogPost.find({})
      .sort({ [sort]: sortDirection }) // Ordina i risultati
      .skip(skip) // Salta i documenti delle pagine precedenti
      .limit(limit); // Limita il numero di risultati

    // Conta il numero totale di post nel database
    const total = await BlogPost.countDocuments();

    // Invia la risposta JSON con i dati dei post e tutte le informazioni di paginazione
    res.json({
      posts, // Array dei post per la pagina corrente
      currentPage: page, // Numero della pagina corrente
      totalPages: Math.ceil(total / limit), // Calcola il numero totale di pagine
      totalPosts: total, // Numero totale di post nel database
    });
  } catch (err) {
    // Gestisce eventuali errori inviando un messaggio di errore
    res.status(500).json({ message: err.message });
  }
});*/

//Rotta singola recensione
router.get("/:id", async (req, res) => {
  try {
    const singoloPost = await BlogPost.findById(req.params.id);
    if (!singoloPost) {
      return res.status(404).json({ message: "Recensione non trovata" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Rotta per creare una recensione
router.post("/", async (req, res) => {
  const singoloPost = new BlogPost(req.body);
  try {
    const newPost = await singoloPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//rotta per aggiornare una recensione
router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Commento eliminato" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
