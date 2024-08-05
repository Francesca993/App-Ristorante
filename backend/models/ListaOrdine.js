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
  },
  { collection: "ordine" }
);
export default mongoose.model("ListaOrdine", listaOrdineSchema);
