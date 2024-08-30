import mongoose from "mongoose";
const listaOrdineSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
    },
    foto: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    valore: {
      type: Number,
    },
    descrizione: {
      type: String,
    },
    prezzo: {
      type: String,
    },
    email: {
      type: String,
      required: true, // Campo obbligatorio per associare l'ordine all'utente
    },
  },
  { collection: "ordine" }
);
export default mongoose.model("ListaOrdine", listaOrdineSchema);
