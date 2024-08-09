import express from "express";
import BlogPost from "../models/BlogPost.js";

const router = express.Router();
//Ottenere la lista di tutti i post
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find({});
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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
