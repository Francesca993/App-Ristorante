import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDiNavigazione from "./Components/Navbar/BarraDiNavigazione";
import PaginaRecensioni from "./Components/RecensioniECommenti.jsx/PaginaRecensioni";
import ContentMenu from "./Components/menu/ContentMenu.jsx";
import PrimaParte from "./Components/Jumbotron/PrimaParte.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/RegisterLogin/Register.jsx";
import Login from "./Components/RegisterLogin/Login.jsx";
import VisualizzaOrdine from "./Components/visualizzaOrdine/VisualizzaOrdine.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Prenota from "./Components/PrenotaTavolo/Prenota.jsx";
import DashboardAdmin from "./Components/DashboardAdmin/DashboardAdmin.jsx";
import Button from "react-bootstrap/esm/Button.js";

function App() {
  return (
    <Router>
      <BarraDiNavigazione />
      <Routes>
        <Route path="/" element={<PrimaParte />} />
        <Route path="/menu" element={<ContentMenu />} />
        <Route path="/commentiErecensioni" element={<PaginaRecensioni />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/riepilogoordine" element={<VisualizzaOrdine />} />
        <Route path="/prenota" element={<Prenota />} />
        <Route path="/adminDashboard" element={<DashboardAdmin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
