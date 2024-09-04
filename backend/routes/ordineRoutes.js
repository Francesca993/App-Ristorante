import express from "express";
import ListaOrdine from "../models/ListaOrdine.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
//router.use(authMiddleware); per consentire solo a chi è autenticato di fare ordini
/*
//Ottenere la lista di tutti gli ordini
router.get("/", async (req, res) => {
  try {
    const OrdineTotale = await ListaOrdine.find({});
    res.json(OrdineTotale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
*/

//ROTTA PER OTTENERE GLI ORDINE PER IL LOGIN
router.get("/", authMiddleware, async (req, res) => {
  try {
    // Filtra gli ordini per l'utente loggato
    const OrdineTotale = await ListaOrdine.find({ author: req.author._id });
    res.json(OrdineTotale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Rotta singolo ordine
router.get("/:id", async (req, res) => {
  try {
    const singoloPiatto = await ListaOrdine.findById(req.params.id);
    if (!singoloPiatto) {
      return res.status(404).json({ message: "Recensione non trovata" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/*
//Rotta per creare un ordine
router.post("/", authMiddleware, async (req, res) => {
  const singoloPiatto = new ListaOrdine(req.body);
  try {
    const newOrdine = await singoloPiatto.save();
    res.status(201).json(newOrdine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
*/

//Rotta per creare un ordine associato all'id
router.post("/", authMiddleware, async (req, res) => {
  try {
    // Associa l'ID dell'utente loggato all'ordine
    const singoloPiatto = new ListaOrdine({
      ...req.body,
      author: req.author._id, // `_id` è l'ID dell'utente loggato ottenuto dal middleware
    });

    const newOrdine = await singoloPiatto.save();
    res.status(201).json(newOrdine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//rotta per aggiornare un ordine
router.patch("/:id", async (req, res) => {
  try {
    const updatePiatto = await ListaOrdine.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatePiatto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await ListaOrdine.findByIdAndDelete(req.params.id);
    res.json({ message: "Ordine eliminato" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
