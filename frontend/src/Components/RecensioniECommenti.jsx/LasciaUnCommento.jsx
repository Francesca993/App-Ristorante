import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { createPost } from "../../Services/api";

export default function LasciaUnCommento({ fetchPosts }) {
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
      setCommento({ name: "", titolo: "", email: "", content: "" });
      await fetchPosts();
    } catch (err) {
      console.error("errore nell'inserimento del commento", err);
    }
  };
  return (
    <div className="lasciaUnCommentoStyle">
      <Container>
        <h1>LASCIA QUI IL TUO COMMENTO</h1>
        <Row className="m-4">
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="m-2">
                <Form.Label className="labelStyle">Nome</Form.Label>
                <Form.Control
                  type="text" // Corretto: utilizza lo stato corretto
                  placeholder="Inserisci qui il tuo nome"
                  onChange={handleChange}
                  name="name"
                  value={commento.name}
                />
                <Form.Label className="labelStyle">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                  name="email"
                  value={commento.email}
                />
                <Form.Label className="labelStyle">Titolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Come siete stati?"
                  onChange={handleChange}
                  name="titolo"
                  value={commento.titolo}
                />
              </Form.Group>
              <Form.Group
                className="m-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="labelStyle">
                  Dicci la tua opinione:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={handleChange}
                  name="content"
                  value={commento.content}
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
