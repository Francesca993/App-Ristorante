import express from "express";
import User from "../models/User.js";

const router = express.Router();
//Ottenere la lista di tutti gli utenti
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Rotta singolo Utente
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: err.message });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Rotta per creare un utente
router.post("/", async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.mssage });
  }
});

//rotta per aggiornare un utente
router.patch("/:id", async (req, res) => {
  try {
    const updateUser = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updateUser);
  } catch (err) {
    res.status(400).json({ message: err.mssage });
  }
});

//Delete
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Utente eliminato" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
