import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Barradinavigazione.css";
import { getUserData } from "../../Services/api"; // Importa la funzione per ottenere i dati utente

export default function BarraDiNavigazione() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Stato per login
  const [userRole, setUserRole] = useState(""); // Stato per il ruolo dell'utente
  const navigate = useNavigate();

  useEffect(() => {
    // Funzione per controllare lo stato di login e ottenere i dati utente
    const checkLoginStatus = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);

        try {
          // Recupera i dati dell'utente, incluso il ruolo
          const userData = await getUserData();
          setUserRole(userData.ruolo); // Imposta il ruolo dell'utente nello stato
        } catch (error) {
          console.error("Errore nel recupero del ruolo dell'utente:", error);
        }
      } else {
        setIsLoggedIn(false);
        setUserRole(""); // Resetta il ruolo se non loggato
      }
    };

    checkLoginStatus();

    // Listener per aggiornare lo stato quando cambia il token
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserRole(""); // Resetta il ruolo quando si effettua il logout
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
          {/* Menu visibile sempre */}
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/commentiErecensioni" className="nav-link">
            Recensioni&Commenti
          </Nav.Link>

          <Nav.Link as={Link} to="/menu" className="nav-link">
            Menù
          </Nav.Link>

          {/* Se l'utente non è loggato */}
          {!isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/login" className="nav-link">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link">
                Registrati
              </Nav.Link>
            </>
          )}

          {/* Se l'utente è loggato come user */}
          {isLoggedIn && userRole === "user" && (
            <>
              <Nav.Link as={Link} to="/prenota" className="nav-link">
                Prenota
              </Nav.Link>
              <Nav.Link as={Link} to="/riepilogoordine" className="nav-link">
                Vai al tuo ordine
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={handleLogout}
              >
                Log Out
              </Nav.Link>
            </>
          )}

          {/* Se l'utente è loggato come admin */}
          {isLoggedIn && userRole === "admin" && (
            <>
              <Nav.Link as={Link} to="/adminDashboard" className="nav-link">
                Dashboard Admin
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={handleLogout}
              >
                Log Out
              </Nav.Link>
            </>
          )}
        </Nav>

        {/* Sezione delle icone social, visibile sempre */}
        <Nav className="ms-auto m-4 nav-link">
          <Nav.Link href="https://www.facebook.com/francesca.montini2?locale=it_IT">
            <ion-icon name="logo-facebook"></ion-icon>
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/franci.wanderlust/">
            <ion-icon name="logo-instagram"></ion-icon>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/francesca-montini-19b90929a/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
