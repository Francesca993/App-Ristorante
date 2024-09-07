import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import {
  getOrdine,
  deleteOrdine,
  createOrderForAdmin,
  getUserData,
} from "../../Services/api";
import { useNavigate } from "react-router-dom";
import "./visualizzaOrdine.css";

export default function VisualizzaOrdine() {
  const navigate = useNavigate(); // Inizializza useNavigate per poter navigare programmaticamente
  const [ordine, setOrdine] = useState([]);
  const [totale, setTotale] = useState(0); // Stato per il totale del carrello

  useEffect(() => {
    const fetchOrdine = async () => {
      try {
        const response = await getOrdine(); // Recupera solo gli ordini dell'utente loggato
        setOrdine(response.data);
        const sommaTotale = response.data.reduce(
          (acc, piatto) =>
            acc + parseFloat(piatto.prezzo) * parseFloat(piatto.valore),
          0
        );
        setTotale(sommaTotale);
      } catch (err) {
        console.error("Errore nella visualizzazione dell'ordine", err);
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

      window.location.reload();
    } catch (error) {
      console.error("Errore durante l'eliminazione dell'elemento:", error);
    }
  };

  const handleSendOrder = async () => {
    try {
      // Recupera i dati dell'utente, inclusa l'email
      const userData = await getUserData();
      const email = userData.email; // Assumi che l'email sia presente nei dati dell'utente

      const orderData = {
        ordini: ordine.map((piatto) => ({
          titolo: piatto.nome, // Assumi che 'nome' sia il titolo del piatto
          quantita: piatto.valore, // Assumi che 'valore' sia la quantità
        })),
        email: email, // Utilizza l'email recuperata dall'utente loggato
      };

      // Invia l'ordine all'amministratore
      await createOrderForAdmin(orderData);

      // Cancellare l'ordine dal backend dell'utente loggato
      await Promise.all(
        ordine.map(async (piatto) => await deleteOrdine(piatto._id))
      );

      // Resetta lo stato locale per svuotare il carrello
      setOrdine([]);
      setTotale(0);

      // Messaggio di successo e reindirizzamento
      alert("Ordine inviato con successo e carrello svuotato!");
      navigate("/"); // Naviga verso la homepage o altra pagina desiderata
    } catch (error) {
      console.error("Errore durante l'invio dell'ordine:", error);
      alert("Errore nell'invio dell'ordine. Per favore, riprova.");
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
          <Col className="d-flex justify-content-end m-4">
            <Button onClick={handleSendOrder}>Invia Ordine!</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
