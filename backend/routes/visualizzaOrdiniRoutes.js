import express from "express";
import VisualizzaOrdini from "../models/VisualizzaOrdini.js";

const router = express.Router();
//Ottenere la lista di tutti gli ordini
router.get("/", async (req, res) => {
  try {
    const ordinitotali = await VisualizzaOrdini.find({});
    res.json(ordinitotali);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creare un nuovo ordine (con validazione dei dati)
router.post("/", async (req, res) => {
  // Validazione minima dei dati
  const { ordini, email } = req.body;
  if (!ordini || !email) {
    return res
      .status(400)
      .json({ message: "Ordini ed email sono obbligatori" });
  }

  const nuovoOrdine = new VisualizzaOrdini({
    ordini,
    email,
  });

  try {
    const ordineSalvato = await nuovoOrdine.save();
    res.status(201).json(ordineSalvato);
  } catch (err) {
    res
      .status(400)
      .json({
        message: "Errore durante la creazione dell'ordine: " + err.message,
      });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    await VisualizzaOrdini.findByIdAndDelete(req.params.id);
    res.json({ message: "Prenotazione eliminata" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
