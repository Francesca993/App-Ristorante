import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraDiNavigazione from "./Components/Navbar/BarraDiNavigazione";
import PaginaRecensioni from "./Components/RecensioniECommenti.jsx/PaginaRecensioni";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <BarraDiNavigazione />
      <Routes>
        <Route path="/commentiErecensioni" element={<PaginaRecensioni />} />
      </Routes>
      <h1>CIAONE</h1>
      <h2>ciaone</h2>
    </Router>
  );
}

export default App;
