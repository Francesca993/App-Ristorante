import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./dashboardAdmin.css";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export default function DashboardAdmin() {
  const navigate = useNavigate(); // Inizializza useNavigate

  const handleCardClickOrder = () => {
    navigate("/ordiniForAdmin"); // Reindirizza alla pagina degli ordini
  };
  const handleCardClickBooking = () => {
    navigate("/PrenotazioniForAdmin"); // Reindirizza alla pagina degli ordini
  };
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col
          xs={12}
          md
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            className="dashboardCommand m-3 p-4 text-center"
            onClick={handleCardClickBooking}
          >
            <Card.Img
              className="imgstyle"
              variant="top"
              src="./src/assets/icone/reception.png"
            />
            <Card.Body>
              <Card.Title className="m-3">Prenotazioni</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card
            className="dashboardCommand m-3 p-4 text-center"
            onClick={handleCardClickOrder}
          >
            <Card.Img
              className="imgstyle"
              variant="top"
              src="./src/assets/icone/cooking.png"
            />
            <Card.Body>
              <Card.Title className="m-3">Ordini</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
