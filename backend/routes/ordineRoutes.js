import express from "express";
import ListaOrdine from "../models/ListaOrdine.js";
// import authMiddleware from "";

const router = express.Router();
//router.use(authMiddleware); per consentire solo a chi è autenticato di fare ordini

//Ottenere la lista di tutti gli ordini
router.get("/", async (req, res) => {
  try {
    const OrdineTotale = await ListaOrdine.find({});
    res.json(OrdineTotale);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//ROTTA PER OTTENERE GLI ORDINE PER IL LOGIN
/* 
router.get("/", async (req, res) => {
 try {
    const OrdineTotale = await ListaOrdine.find({ email: req.user.email }); // Filtra per email
    res.json(OrdineTotale);
  } catch (err) {
    res.st
    atus(500).json({ message: err.message });
  }

 */
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
//Rotta per creare un ordine
router.post("/", async (req, res) => {
  const singoloPiatto = new ListaOrdine(req.body);
  try {
    const newOrdine = await singoloPiatto.save();
    res.status(201).json(newOrdine);
  } catch (err) {
    res.status(400).json({ message: err.message });
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
