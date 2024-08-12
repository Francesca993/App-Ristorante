import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Barradinavigazione.css";

export default function BarraDiNavigazione() {
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar expand="lg" id="navbarStyle" className="text-center d-flex">
      <Navbar.Brand href="#home">
        <img
          src="./src/assets/background/L__arte-removebg-preview2.png"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">
              {" "}
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/commentiErecensioni">
              {" "}
              Recensioni&Commenti
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/menu">
              Menù
            </Link>
          </Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link>
                <Link className="nav-link" to="/" onClick={handleLogout}>
                  Log Out
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/riepilogoordine">
                  Vai al tuo ordine
                </Link>
              </Nav.Link>
            </>
          ) : (
            <>
              {" "}
              <Nav.Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/register">
                  Registrati
                </Link>
              </Nav.Link>{" "}
            </>
          )}{" "}
        </Nav>
        <Nav className="ms-auto m-4">
          <Nav.Link href="https://www.facebook.com/francesca.montini2?locale=it_IT">
            <ion-icon name="logo-facebook"></ion-icon>
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/franci.wanderlust/">
            <ion-icon name="logo-instagram"></ion-icon>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/francesca-montini-19b90929a/">
            {" "}
            <ion-icon name="logo-linkedin"></ion-icon>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
