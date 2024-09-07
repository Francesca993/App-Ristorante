import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { getOrderForAdmin, deleteOrderForAdmin } from "../../Services/api";

export default function DashboardAdmin() {
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
    <Container>
      <Row>
        {ordini.length > 0 ? (
          ordini.map((ordine, index) => (
            <Card key={index} className="mb-4">
              <Card.Header>Ordine {index + 1}</Card.Header>
              <Card.Body>
                <Card.Title>Email: {ordine.email}</Card.Title>
                <Card.Text>
                  {ordine.ordini.map((piatto, idx) => (
                    <div key={idx}>
                      <strong>{piatto.titolo}</strong>: {piatto.quantita} units
                    </div>
                  ))}
                </Card.Text>
                <Button
                  variant="danger"
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
