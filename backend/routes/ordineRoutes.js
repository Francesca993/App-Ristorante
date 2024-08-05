import express from "express";
import ListaOrdine from "../models/ListaOrdine.js";

const router = express.Router();
//Ottenere la lista di tutti i post
router.get("/", async (req, res) => {
  try {
    const OrdineTotale = await ListaOrdine.find({});
    res.json(OrdineTotale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Rotta singolo Post
router.get("/:id", async (req, res) => {
  try {
    const singoloPiatto = await singoloPiatto.findById(req.params.id);
    if (!singoloPiatto) {
      return res.status(404).json({ message: "Recensione non trovata" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Rotta per creare un post
router.post("/", async (req, res) => {
  const singoloPiatto = new ListaOrdine(req.body);
  try {
    const newOrdine = await singoloPiatto.save();
    res.status(201).json(newOrdine);
  } catch (err) {
    res.status(400).json({ message: err.mssage });
  }
});
//rotta per aggiornare un utente
router.patch("/:id", async (req, res) => {
  try {
    const updatePiatto = await singoloPiatto.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatePiatto);
  } catch (err) {
    res.status(400).json({ message: err.mssage });
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await singoloPiatto.findByIdAndDelete(req.params.id);
    res.json({ message: "Utente eliminato" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
