import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function LasciaUnCommento() {
  return (
    <>
      <div style={{ border: "1px solid black", margin: "15px" }}>
        <Container>
          <h1>LASCIA QUI IL TUO COMMENTO</h1>
          <Row className="m-4">
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci quì il tuo nome"
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                  <Form.Label>Titolo</Form.Label>
                  <Form.Control type="email" placeholder="Come siete stati?" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Dicci la tua opinione:</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary">Invia!</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
