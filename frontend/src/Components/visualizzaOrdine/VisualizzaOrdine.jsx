import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { getOrdine, deleteOrdine } from "../../Services/api";

export default function VisualizzaOrdine() {
  const [ordine, setOrdine] = useState([]);
  useEffect(() => {
    const fetchOrdine = async () => {
      try {
        const response = await getOrdine();
        setOrdine(response.data);
      } catch (err) {
        console.error("Errore nella visualizzazione di tutti i post");
      }
    };
    fetchOrdine();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Row>
            {ordine.map((piatti) => (
              <Col lg={12} key={piatti._id}>
                <div>
                  <h3> nome: {piatti.nome}</h3>
                  <h5>Quantita:{piatti.valore}</h5>
                  <h5>foto:{piatti.foto}</h5>
                  <Button onClick={() => deleteOrdine(piatti._id)}>
                    Delete
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
}
