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
      </Routes>
    </Router>
  );
}

export default App;
