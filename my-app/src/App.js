import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home'; // Asume que tienes un componente para la página principal
import Services from "./services" // Asume que tienes otro componente para la nueva página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicios" element={<Services/>} />
      </Routes>
    </Router>
  );
}
export default App