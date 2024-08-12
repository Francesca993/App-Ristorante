import { useState } from "react"; // Importa il hook useState da React per gestire lo stato del componente
import { useNavigate } from "react-router-dom"; // Importa useNavigate da react-router-dom per navigare tra le pagine
import { registerUser } from "../../Services/api"; // Importa la funzione registerUser dal file api.js per effettuare la registrazione
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./registerLogin.css";
export default function Register() {
  // Definisce lo stato del form con useState, inizializzato con campi vuoti
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    dataDiNascita: "",
  });

  const navigate = useNavigate(); // Inizializza useNavigate per poter navigare programmaticamente

  // Gestore per aggiornare lo stato quando i campi del form cambiano
  const handleChange = (e) => {
    // Aggiorna il campo corrispondente nello stato con il valore attuale dell'input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestore per la sottomissione del form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form di ricaricare la pagina
    try {
      await registerUser(formData); // Chiama la funzione registerUser con i dati del form
      alert("Registrazione avvenuta con successo!"); // Mostra un messaggio di successo
      navigate("/login"); // Naviga alla pagina di login dopo la registrazione
    } catch (error) {
      console.error("Errore durante la registrazione:", error); // Logga l'errore in console
      alert("Errore durante la registrazione. Riprova."); // Mostra un messaggio di errore
    }
  };

  return (
    <Container>
      <Row>
        <h1>Registrazione</h1>
      </Row>
      <Row>
        {" "}
        <form className="formStyle" onSubmit={handleSubmit}>
          <label for="nome">Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={handleChange}
            required
          />{" "}
          <label for="cognome">Cognome</label>
          <input
            type="text"
            name="cognome"
            placeholder="Cognome"
            onChange={handleChange}
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />{" "}
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <label for="dataDiNascita">Data Di Nascita</label>
          <input
            type="date"
            name="dataDiNascita"
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="outline-secondary"
            size="lg"
            className="formStyleButton"
          >
            Invia!
          </Button>
        </form>
      </Row>
    </Container>
  );
}
