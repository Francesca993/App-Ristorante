import mongoose from "mongoose";

const prenotazioniSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    ora: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
    },
  },
  { collection: "prenotazioni" }
);
export default mongoose.model("Prenotazioni", prenotazioniSchema);
