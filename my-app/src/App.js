import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home'; 
import Services from "./services"
import Ninos from "./Ninos" 
import Navbar from "./components/navbar.jsx"
import Opengym from "./Opengym"
import Artes from "./Artes"
import Nutricion from "./Nutricion"



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/ninos" element={<Ninos/>} />
        <Route path="/opengym" element={<Opengym/>} />
        <Route path="/artes" element={<Artes/>} />
        <Route path="/nutricion" element={<Nutricion/>} />
      </Routes>
    </Router>
  );
}
export default App