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
  },
  { collection: "prenotazioni" }
);
export default mongoose.model("Prenotazioni", prenotazioniSchema);
