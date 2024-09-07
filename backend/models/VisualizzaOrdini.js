import mongoose from "mongoose";
const piattoSchema = new mongoose.Schema({
  titolo: {
    type: String,
    required: true,
  },
  quantita: {
    type: Number,
    required: true,
  },
});

const visualizzaOrdiniSchema = new mongoose.Schema(
  {
    ordini: {
      type: [piattoSchema], // Array di piatti con titolo e quantità
      required: true,
    },
    email: {
      type: String,
      required: true, // Aggiungi l'email dell'utente
    },
  },
  { collection: "Visualizzaordini" }
);

export default mongoose.model("Visualizzaordini", visualizzaOrdiniSchema);
