import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AreaOrdine from "./AreaOrdine";

export default function SingolaFigurina({ piatto }) {
  return (
    <Col xs="12" md="12" lg="6">
      <Card className="p-3 m-4" style={{ maxWidth: 500 }}>
        <div
          style={{
            maxWidth: 460,
            height: 350,
            maxHeight: 350,
            backgroundImage: `url(${piatto.immagine})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <Card.Body>
          <Card.Title>{piatto.nome}</Card.Title>
          <Card.Text>{piatto.descrizione}</Card.Text>
        </Card.Body>
        <AreaOrdine piatto={piatto.nome} immagine={piatto.immagine} />
      </Card>
    </Col>
  );
}
