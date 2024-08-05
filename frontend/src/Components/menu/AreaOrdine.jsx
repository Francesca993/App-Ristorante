import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export default function AreaOrdine({ piatto, immagine }) {
  const [inputValue, setInputValue] = useState(""); // Stato per l'input del form
  const [quantity, setQuantity] = useState(""); // Stato per la quantità selezionata
  // Funzione per gestire il cambiamento di selezione
  const handleSelectChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddItem = () => {
    // Creiamo un nuovo oggetto elemento con il valore dell'input
    const newItem = {
      nome: piatto,
      foto: immagine,
      valore: inputValue,
      quantity: quantity,
    };

    // POST all'API per aggiungere il nuovo elemento
    fetch("http://localhost:4505/ordine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify(newItem), // Convertiamo il nuovo oggetto elemento in una stringa JSON
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) => setItems([...items, data])); // Aggiorniamo la lista degli elementi con il nuovo elemento
    setInputValue("");
    setQuantity(""); //Resettiamo gli input
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button type="submit" variant="secondary" onClick={handleAddItem}>
            Aggiungi al carrello
          </Button>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            value={quantity}
            onChange={handleSelectChange}
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
