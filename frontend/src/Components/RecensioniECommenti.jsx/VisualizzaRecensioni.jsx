import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deletePost } from "../../Services/api";

export default function VisualizzaRecensioni({ fetchPosts, posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);
  // Funzioni per navigare tra le pagine
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  console.log(posts);
  return (
    <div className="visualizzaRecensioniContainer">
      <Container>
        <h1>LE VOSTRE RECENSIONI</h1>
        <Row>
          {posts.map((post) => (
            <Col xs md lg={12} key={post._id} className="m-2">
              <div className="card">
                <div className="card-header">
                  AUTORE RECENSIONE: {post.name}
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    TITOLO RECENSIONE:{post.titolo}
                  </h5>
                  <p className="card-text">{post.content}</p>
                  <Button onClick={() => deletePost(post._id)}>
                    Delete
                  </Button>{" "}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="p-3">
          <Col className="d-flex justify-content-center">
            <Button
              variant="primary"
              size="lg"
              className="m-2"
              onClick={handlePreviousPage}
            >
              Indietro
            </Button>
            <Button
              onClick={handleNextPage}
              variant="primary"
              size="lg"
              className="m-2"
            >
              Avanti
            </Button>
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <div className="vsStyle">Pag:</div>
            <div className="vsStyle">
              <p>{currentPage}</p>
            </div>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
