import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { getPosts } from "../../Services/api";

export default function VisualizzaRecensioni() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (err) {
        console.error("Errore nella visualizzazione di tutti i post");
      }
    };
    fetchPosts();
  }, []);
  return (
    <div style={{ border: "1px solid black", margin: "15px", padding: "20px" }}>
      <Container>
        <h1>LE VOSTRE RECENSIONI</h1>
        <Row>
          {posts.map((post) => (
            <Col key={post.id}>
              <div className="card">
                <div className="card-header">
                  AUTORE RECENSIONE: {post.name}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    TITOLO RECENSIONE:{post.titolo}
                  </h5>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="p-3">
          <Col className="d-flex justify-content-center">
            <Button variant="primary" size="lg" className="m-2">
              Indietro
            </Button>
            <Button variant="primary" size="lg" className="m-2">
              Avanti
            </Button>
          </Col>
          <Col>
            {" "}
            <Form.Select aria-label="Default select example" className="m-3">
              <option>Quantità di prodotti per pagina</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <div
              style={{
                border: "1px solid black",
                height: "30px",
                padding: "2px",
                margin: "8px",
              }}
            >
              Pag:
            </div>
            <div
              style={{
                width: "20px",
                border: "1px solid black",
                height: "30px",
                padding: "2px",
              }}
            >
              <p>1</p>
            </div>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
