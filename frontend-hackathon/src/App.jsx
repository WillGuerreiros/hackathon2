import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicio from './components/PaginaInicio';  
import PaginaCadastro from './components/PaginaCadastro';
import PaginaLogin from './components/PaginaLogin';
import PaginaOds from "./components/PaginaOds";
import PaginaQuiz from "./components/PaginaQuiz";
import './App.css';
import PaginaSobre from "./components/PaginaSobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/ods" element={<PaginaOds />} />
        <Route path="/sobre" element={<PaginaSobre/>}/>
        <Route path="/quiz" element={<PaginaQuiz/>} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;

