import React from "react";
import VisualizzaRecensioni from "./VisualizzaRecensioni";
import "bootstrap/dist/css/bootstrap.min.css";
import LasciaUnCommento from "./LasciaUnCommento";

export default function PaginaRecensioni() {
  return (
    <>
      <VisualizzaRecensioni />
      <LasciaUnCommento />
    </>
  );
}
