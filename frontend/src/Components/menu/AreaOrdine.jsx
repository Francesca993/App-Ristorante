import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { createOrdine } from "../../Services/api";
import { useNavigate } from "react-router-dom";

export default function AreaOrdine({
  pnome,
  pimmagine,
  pdescrizione,
  pprezzo,
}) {
  const navigate = useNavigate();
  const [ordine, setOrdine] = useState({
    nome: pnome,
    foto: pimmagine,
    descrizione: pdescrizione,
    prezzo: pprezzo,
    valore: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrdine({ ...ordine, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrdine(ordine);
      setOrdine({
        nome: "",
        foto: "",
        valore: "",
        descrizione: "",
        prezzo: "",
      });
    } catch (err) {
      console.error("errore nell'inserimento dell'ordine", err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button
            className="buttonStyle"
            type="submit"
            variant="outline-secondary"
            onClick={handleSubmit}
          >
            Aggiungi al carrello
          </Button>
        </Col>
        <Col>
          <Form.Select
            type="text" // Corretto: utilizza lo stato corretto
            onChange={handleChange}
            name="valore"
          >
            <option>Quantità</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  );
}
