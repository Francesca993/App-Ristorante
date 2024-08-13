import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AreaOrdine from "./AreaOrdine";
import { Link, useNavigate } from "react-router-dom";

export default function SingolaFigurina({ piatto }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Controlla se esiste un token nel localStorage
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    // Controlla lo stato di login all'avvio
    checkLoginStatus();

    // Aggiungi un event listener per controllare lo stato di login
    window.addEventListener("storage", checkLoginStatus);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  return (
    <Col xs="12" md="12" lg="6">
      <Card className="p-3 m-4 cardStyle">
        <div
          className="cardImgStyle"
          style={{
            backgroundImage: `url(${piatto.immagine})`,
          }}
        ></div>
        <Card.Body>
          <Card.Title className="titleCard">{piatto.nome}</Card.Title>
          <Card.Text>{piatto.descrizione}</Card.Text>
          <Card.Text>{piatto.prezzo}</Card.Text>
        </Card.Body>
        {isLoggedIn ? (
          <>
            {" "}
            <AreaOrdine
              piatto={piatto}
              pnome={piatto.nome}
              pimmagine={piatto.immagine}
              pdescrizione={piatto.descrizione}
              pprezzo={piatto.prezzo}
            />
          </>
        ) : (
          <Link className="cardLink" to="/register">
            Registrati e ordina!
          </Link>
        )}
      </Card>
    </Col>
  );
}
