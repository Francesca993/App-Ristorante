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
  useEffect(() => {
    const fetchOrdine = async () => {
      try {
        const response = await getOrdine();
        setOrdine(response.data);
      } catch (err) {
        console.error("Errore nella visualizzazione dell''ordine");
      }
    };
    fetchOrdine();
  }, []);

  /* const handleDelete = async () => {
       try {
         const response = await deleteOrdine(piatti._id);
           console.log("Item deleted:", response.data);
            navigate("/riepilogoordine");
         // Puoi aggiungere ulteriori azioni qui, come aggiornare lo stato locale o notificare l'utente.
       } catch (error) {
         console.error("There was an error deleting the item:", error);
         // Gestisci l'errore in base alle necessità, ad esempio mostrando un messaggio di errore all'utente.
       }
    };*/

  return (
    <div>
      <Container>
        <Row>
          <Row>
            {ordine.map((piatti) => (
              <Col lg={12} key={piatti._id}>
                <Card className="d-flex flex-row cardStyle align-items-center m-2">
                  <Card.Img variant="top" src={piatti.foto} id="imgCard" />
                  <Card.Body>
                    <Card.Title className="titleStyle">
                      {piatti.nome}
                    </Card.Title>
                    <Card.Text>
                      <p>{piatti.descrizione}</p>
                      <p>Quantita:{piatti.valore}</p>
                      <p>Prezzo:{piatti.prezzo}</p>
                    </Card.Text>
                    <Button onClick={() => deleteOrdine(piatti._id)}>
                      Delete
                    </Button>{" "}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
}
