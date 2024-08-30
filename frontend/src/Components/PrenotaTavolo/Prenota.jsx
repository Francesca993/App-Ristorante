import React from "react";
import "./prenota.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getPrenotazioni,
  getPrenotazione,
  createPrenotazione,
  updatePrenotazione,
  deletePrenotazione,
} from "../../Services/api";

export default function Prenota() {
  const [formData, setFormData] = useState({
    email: "",
    data: "",
    ora: "",
    telefono: "",
  }); // Gestore per aggiornare lo stato quando i campi del form cambiano

  const navigate = useNavigate();
  const handleChange = (e) => {
    // Aggiorna il campo corrispondente nello stato con il valore attuale dell'input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestore per la sottomissione del form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form di ricaricare la pagina
    try {
      await createPrenotazione(formData); //
      alert("Prenotazione avvenuta con successo!"); // Mostra un messaggio di successo
      navigate("/menu");
    } catch (error) {
      console.error("Errore durante la prenotazione:", error); // Logga l'errore in console
      alert("Errore durante la prenotazione. Riprova."); // Mostra un messaggio di errore
    }
  };

  return (
    <div>
      <Container className="containerPrenotazioni">
        <form className="formStyle" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Inserisci la tua email"
            required
            onChange={handleChange}
          />
          <label htmlFor="telefono">Numero di telefono:</label>
          <input
            type="tel"
            name="telefono"
            placeholder="Inserisci il tuo numero di telefono"
            required
            onChange={handleChange}
          />
          <label htmlFor="date">Scegli il giorno</label>
          <input type="date" name="data" required onChange={handleChange} />
          <label htmlFor="ora">Seleziona un orario:</label>
          <select name="ora" onChange={handleChange} required>
            <option value="">Seleziona un orario</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
          </select>
          <Button
            type="submit"
            variant="outline-secondary"
            size="lg"
            className="formStyleButton"
          >
            Prenota
          </Button>
        </form>
      </Container>
    </div>
  );
}
