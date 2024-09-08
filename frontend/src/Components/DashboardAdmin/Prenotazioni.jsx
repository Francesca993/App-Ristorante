import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { getPrenotazioni, deletePrenotazione } from "../../Services/api";
import "./dashboardAdmin.css";

export default function Prenotazioni() {
  const [prenotazioni, setPrenotazioni] = useState([]); // Stato per memorizzare le prenotazioni
  const [error, setError] = useState(null); // Stato per gestire errori
  const [loading, setLoading] = useState(true); // Stato per indicare il caricamento

  useEffect(() => {
    const fetchPrenotazioni = async () => {
      try {
        const response = await getPrenotazioni();
        setPrenotazioni(response.data); // Imposta le prenotazioni nello stato
      } catch (err) {
        setError("Errore nel recupero delle prenotazioni.");
        console.error("Errore nel recupero delle prenotazioni:", err);
      } finally {
        setLoading(false); // Termina il caricamento
      }
    };

    fetchPrenotazioni();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePrenotazione(id);
      // Filtra la prenotazione cancellata dallo stato
      setPrenotazioni(
        prenotazioni.filter((prenotazione) => prenotazione._id !== id)
      );
    } catch (err) {
      setError("Errore nella cancellazione della prenotazione.");
      console.error("Errore nella cancellazione della prenotazione:", err);
    }
  };

  if (error) return <p>{error}</p>;
  if (loading) return <p>Caricamento in corso...</p>;

  return (
    <Container className=" p-3">
      <Row>
        {prenotazioni.length > 0 ? (
          prenotazioni.map((prenotazione, index) => (
            <Col xs={12} md lg={6}>
              <Card key={index} className="m-3 cardPrenotazioniStyle">
                <Card.Body>
                  <h4>
                    Prenotazione {index + 1} per il giorno {prenotazione.data}
                  </h4>
                  <h5>Email:</h5> <p>{prenotazione.email}</p>
                  <h5>Data:</h5> <p>{prenotazione.data} anno/mese/giorno</p>
                  <h5>Ora:</h5> <p>{prenotazione.ora}</p>
                  <h5>Telefono:</h5> <p>{prenotazione.telefono}</p>
                  <Button
                    variant="outline-danger"
                    size="lg"
                    className="buttonDelete m-2"
                    onClick={() => handleDelete(prenotazione._id)}
                  >
                    Cancella Prenotazione
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Card>
            <Card.Body>
              <Card.Text>Nessuna prenotazione disponibile</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
    </Container>
  );
}
