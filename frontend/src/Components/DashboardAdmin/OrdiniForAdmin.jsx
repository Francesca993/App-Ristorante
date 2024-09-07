import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { getOrderForAdmin, deleteOrderForAdmin } from "../../Services/api";
import "./dashboardAdmin.css";

export default function OrdiniForAdmin() {
  const [ordini, setOrdini] = useState([]); // Stato per memorizzare gli ordini
  const [error, setError] = useState(null); // Stato per gestire errori

  useEffect(() => {
    const fetchOrdini = async () => {
      try {
        const response = await getOrderForAdmin();
        setOrdini(response.data); // Imposta gli ordini nello stato
      } catch (err) {
        setError("Errore nel recupero degli ordini.");
        console.error("Errore nel recupero degli ordini:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdini();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteOrderForAdmin(id);
      // Filtra l'ordine cancellato dallo stato
      setOrdini(ordini.filter((ordine) => ordine._id !== id));
    } catch (err) {
      setError("Errore nella cancellazione dell'ordine.");
      console.error("Errore nella cancellazione dell'ordine:", err);
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <Container className="containerStyle p-3">
      <Row>
        {ordini.length > 0 ? (
          ordini.map((ordine, index) => (
            <Card key={index} className="m-2 cardStyle">
              <Card.Body>
                <h4>Ordine {index + 1}</h4>
                <h5>Email di riferimento:</h5> <p>{ordine.email}</p>
                <h5>Dettagli dell'ordine:</h5>
                {ordine.ordini.map((piatto, idx) => (
                  <div key={idx}>
                    <span className="titolopiattostyle">{piatto.titolo}: </span>
                    quantità{" "}
                    <span className="titolopiattostyle">{piatto.quantita}</span>
                  </div>
                ))}
                <Button
                  variant="outline-danger"
                  size="lg"
                  className="buttonDelete m-2"
                  onClick={() => handleDelete(ordine._id)}
                >
                  Delete Order
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Body>
              <Card.Text>No orders available</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
    </Container>
  );
}
