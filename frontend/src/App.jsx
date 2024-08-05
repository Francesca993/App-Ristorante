import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDiNavigazione from "./Components/Navbar/BarraDiNavigazione";
import PaginaRecensioni from "./Components/RecensioniECommenti.jsx/PaginaRecensioni";
import ContentMenu from "./Components/menu/ContentMenu.jsx";
import PrimaParte from "./Components/Jumbotron/PrimaParte.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <BarraDiNavigazione />
      <Routes>
        <Route path="/" element={<PrimaParte />} />
        <Route path="/menu" element={<ContentMenu />} />
        <Route path="/commentiErecensioni" element={<PaginaRecensioni />} />
      </Routes>
    </Router>
  );
}

export default App;
