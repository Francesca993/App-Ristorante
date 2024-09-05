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
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  { collection: "ordine" }
);
export default mongoose.model("ListaOrdine", listaOrdineSchema);
