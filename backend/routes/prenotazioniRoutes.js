import express from "express";
import Prenotazioni from "../models/Prenotazioni.js";

const router = express.Router();
//Ottenere la lista di tutti i post
router.get("/", async (req, res) => {
  try {
    const appuntamenti = await Prenotazioni.find({});
    res.json(appuntamenti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Rotta singola recensione
router.get("/:id", async (req, res) => {
  try {
    const prenotazione = await Prenotazioni.findById(req.params.id);
    if (!prenotazione) {
      return res.status(404).json({ message: "Prenotazione non trovata" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//Rotta per creare una recensione
router.post("/", async (req, res) => {
  const prenotazione = new Prenotazioni(req.body);
  try {
    const newPrenotazione = await prenotazione.save();
    res.status(201).json(newPrenotazione);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//rotta per aggiornare una recensione
router.patch("/:id", async (req, res) => {
  try {
    const updatePrenotazione = await Prenotazioni.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatePrenotazione);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  try {
    await Prenotazioni.findByIdAndDelete(req.params.id);
    res.json({ message: "Prenotazione eliminata" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
