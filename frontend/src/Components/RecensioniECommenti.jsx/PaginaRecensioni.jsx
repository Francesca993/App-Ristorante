import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LasciaUnCommento from "./LasciaUnCommento";
import VisualizzaRecensioni from "./VisualizzaRecensioni";

export default function PaginaRecensioni() {
  return (
    <>
      <VisualizzaRecensioni />
      <LasciaUnCommento />
    </>
  );
}
