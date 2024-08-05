import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createPost } from "../../Services/api";

export default function LasciaUnCommento() {
  const [commento, setCommento] = useState({
    name: "",
    titolo: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommento({ ...commento, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(commento);
    } catch (err) {
      console.error("errore nell'inserimento del commento", err);
    }
  };
  return (
    <div style={{ border: "1px solid black", margin: "15px" }}>
      <Container>
        <h1>LASCIA QUI IL TUO COMMENTO</h1>
        <Row className="m-4">
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text" // Corretto: utilizza lo stato corretto
                  placeholder="Inserisci qui il tuo nome"
                  onChange={handleChange}
                  name="name"
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  name="email"
                />
                <Form.Label>Titolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Come siete stati?"
                  onChange={handleChange}
                  name="titolo"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Dicci la tua opinione:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleChange}
                  name="content"
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Invia!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
