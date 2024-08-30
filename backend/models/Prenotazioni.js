import mongoose from "mongoose";

const prenotazioniSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    data: {
      type: String,
    },
    ora: {
      type: String,
    },
    telefono: {
      type: String,
    },
    email: {
      type: String,
      required: true, // Campo obbligatorio per associare l'ordine all'utente
    },
  },
  { collection: "prenotazioni" }
);
export default mongoose.model("Prenotazioni", prenotazioniSchema);
