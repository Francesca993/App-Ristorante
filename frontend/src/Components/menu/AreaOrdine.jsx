import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { createOrdine, getUserData } from "../../Services/api";

export default function AreaOrdine({
  pnome,
  pimmagine,
  pdescrizione,
  pprezzo,
}) {
  const [userId, setUserId] = useState(null); // Stato per memorizzare l'ID utente
  const [ordine, setOrdine] = useState({
    nome: pnome,
    foto: pimmagine,
    descrizione: pdescrizione,
    prezzo: pprezzo,
    valore: "",
    userId: "", // Aggiungi userId all'oggetto ordine
    author: "",
    email: "",
  });

  // Recupera i dati dell'utente loggato
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserData(); // Ottiene i dati dell'utente loggato
        setUserId(userData._id); // Memorizza l'ID utente
      } catch (err) {
        console.error("Errore nel recupero dei dati utente", err);
      }
    };
    fetchUserData();
  }, []);

  // Utilizza useEffect per aggiornare l'ordine quando cambiano le props o l'userId
  useEffect(() => {
    setOrdine((prevOrdine) => ({
      ...prevOrdine,
      nome: pnome,
      foto: pimmagine,
      descrizione: pdescrizione,
      prezzo: pprezzo,
      userId: userId, // Aggiorna userId
      author: "",
      email: "",
    }));
  }, [pnome, pimmagine, pdescrizione, pprezzo, userId]);

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
        userId: userId, // Mantieni userId
        author: "",
        email: "",
      });
      window.location.reload();
    } catch (err) {
      console.error("Errore nell'inserimento dell'ordine", err);
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
          <Form.Select type="text" onChange={handleChange} name="valore">
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
