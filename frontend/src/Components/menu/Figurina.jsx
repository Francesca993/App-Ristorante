import React from "react";
import Row from "react-bootstrap/Row";
import SingolaFigurina from "./SingolaFigurina";

export default function Figurina(props) {
  return (
    <Row>
      {props.piatti.map((piatto) => (
        <SingolaFigurina piatto={piatto} />
      ))}
    </Row>
  );
}
