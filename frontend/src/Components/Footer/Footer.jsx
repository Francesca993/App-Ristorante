import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="py-4 footerStyle">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Chi Siamo</h5>
            <p>
              Siamo un ristorante che combina tradizione e innovazione, offrendo
              piatti preparati con ingredienti freschi e di qualità. Vieni a
              trovarci per un'esperienza culinaria indimenticabile.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contatti</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Indirizzo:</strong> Via Roma 123, 00100 Roma
              </li>
              <li>
                <strong>Telefono:</strong> +39 06 1234567
              </li>
              <li>
                <strong>Email:</strong> info@ristorante.it
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Orari di Apertura</h5>
            <ul className="list-unstyled">
              <li>Lunedì - Venerdì: 12:00 - 15:00, 19:00 - 23:00</li>
              <li>Sabato: 12:00 - 16:00, 19:00 - 00:00</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              &copy; 2024 Ristorante. Tutti i diritti riservati.
            </p>
            <ul className="list-inline mt-2">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/francesca.montini2?locale=it_IT"
                  className="text-decoration-none"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/franci.wanderlust/"
                  className="text-white text-decoration-none"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/francesca-montini-19b90929a/"
                  className="text-white text-decoration-none"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
