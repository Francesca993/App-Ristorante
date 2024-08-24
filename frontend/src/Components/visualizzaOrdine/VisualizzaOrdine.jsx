import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { getOrdine, deleteOrdine } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import "./visualizzaOrdine.css";

export default function VisualizzaOrdine() {
  const navigate = useNavigate(); // Inizializza useNavigate per poter navigare programmaticamente
  const [ordine, setOrdine] = useState([]);
  const [totale, setTotale] = useState(0); // Stato per il totale del carrello

  useEffect(() => {
    const fetchOrdine = async () => {
      try {
        const response = await getOrdine();
        setOrdine(response.data);
        // Calcolo del totale
        const sommaTotale = response.data.reduce(
          (acc, piatto) =>
            acc + parseFloat(piatto.prezzo) * parseFloat(piatto.valore),
          0
        );
        setTotale(sommaTotale);
      } catch (err) {
        console.error("Errore nella visualizzazione dell'ordine");
      }
    };
    fetchOrdine();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteOrdine(id);

      // Filtra fuori l'elemento cancellato dallo stato
      const nuovoOrdine = ordine.filter((piatto) => piatto._id !== id);
      setOrdine(nuovoOrdine);

      // Ricalcola il totale dopo la cancellazione
      const nuovoTotale = nuovoOrdine.reduce(
        (acc, piatto) =>
          acc + parseFloat(piatto.prezzo) * parseFloat(piatto.valore),
        0
      );
      setTotale(nuovoTotale);

      navigate("/riepilogoordine");
    } catch (error) {
      console.error("Errore durante l'eliminazione dell'elemento:", error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          {ordine.map((piatti) => (
            <Col lg={12} key={piatti._id}>
              <Card className="d-flex flex-row cardStyle align-items-center m-2">
                <Card.Img variant="top" src={piatti.foto} id="imgCard" />
                <Card.Body>
                  <Card.Title className="titleStyle">{piatti.nome}</Card.Title>
                  <Card.Text>
                    <p>{piatti.descrizione}</p>
                    <p>Quantita:{piatti.valore}</p>
                    <p>Prezzo:{piatti.prezzo}</p>
                  </Card.Text>
                  <Button onClick={() => handleDelete(piatti._id)}>
                    Delete
                  </Button>{" "}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={12}>
            <h2 className="text-end m-4">Totale Carrello: €{totale}</h2>
          </Col>
          <Col>
            <Button>Invia Ordine!</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
