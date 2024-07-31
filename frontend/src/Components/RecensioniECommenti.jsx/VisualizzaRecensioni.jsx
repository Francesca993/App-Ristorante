import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function VisualizzaRecensioni() {
  return (
    <div style={{ border: "1px solid black", margin: "15px", padding: "20px" }}>
      <Container>
        <h1>LE VOSTRE RECENSIONI</h1>
        <Row>
          <Col>
            <div class="card">
              <div class="card-header">AUTORE RECENSIONE</div>
              <div class="card-body">
                <h5 class="card-title">TITOLO RECENSIONE</h5>
                <p class="card-text">TESTO RECENSIONE</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
