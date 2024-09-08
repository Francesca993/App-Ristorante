import { useState, useEffect } from "react"; // Importa il hook useState da React per gestire lo stato
import { useNavigate, useLocation } from "react-router-dom"; // Importa useNavigate da react-router-dom per navigare programmaticamente
import { loginUser } from "../../Services/api"; // Importa la funzione API per effettuare il login
import Button from "react-bootstrap/Button";
import "./registerLogin.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "", // Stato iniziale del campo email
    password: "", // Stato iniziale del campo password
  });
  const navigate = useNavigate(); // Inizializza il navigatore per cambiare pagina
  const location = useLocation(); // NEW! Per accedere ai parametri dell'URL corrente

  useEffect(() => {
    // Questo effect viene eseguito dopo il rendering del componente
    // e ogni volta che location o navigate cambiano

    // Estraiamo i parametri dall'URL
    const params = new URLSearchParams(location.search);
    // Cerchiamo un parametro 'token' nell'URL
    const token = params.get("token");
    console.log("Received token:", token);

    if (token) {
      // Se troviamo un token, lo salviamo nel localStorage
      localStorage.setItem("token", token);
      console.log("Token saved, navigating to home");
      // Dispatchamo un evento 'storage' per aggiornare altri componenti che potrebbero dipendere dal token
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event("loginStateChange"));
      // Navighiamo alla home page
      navigate("/");
    }
  }, [location, navigate]); // Questo effect dipende da location e navigate

  // Gestore del cambiamento degli input del form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Aggiorna lo stato del form con i valori degli input
  };

  // Gestore dell'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form di ricaricare la pagina
    try {
      const response = await loginUser(formData); // Chiama la funzione loginUser per autenticare l'utente
      localStorage.setItem("token", response.token); // Memorizza il token di autenticazione nel localStorage
      // Trigger l'evento storage per aggiornare la Navbar
      window.dispatchEvent(new Event("storage")); // Scatena un evento di storage per aggiornare componenti come la Navbar
      console.log("Login effettuato con successo!"); // Mostra un messaggio di successo
      navigate("/"); // Naviga alla pagina principale
    } catch (error) {
      console.error("Errore durante il login:", error); // Logga l'errore in console
      alert("Credenziali non valide. Riprova."); // Mostra un messaggio di errore
    }
  };

  // Funzione aggiornata per gestire il login con Google
  const handleGoogleLogin = () => {
    window.location.href = `http://localhost:4505/api/auth/google`;
  };

  return (
    <Container className="containerRegister">
      <Row>
        <h1>Login</h1>
      </Row>
      <Row>
        <form className="formStyle" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="outline-secondary"
            size="lg"
            className="formStyleButton"
          >
            Accedi
          </Button>
          <Button
            variant="outline-secondary"
            size="lg"
            className="formStyleButton m-2 d-flex align-items-center"
            onClick={handleGoogleLogin}
          >
            {" "}
            <img
              src="./src/assets/icone/google.png" // Sostituisci con il percorso della tua icona di Google
              alt="Google Icon"
              className="logogoogle"
            />
            Accedi con Google
          </Button>
        </form>
      </Row>
    </Container>
  );
}
