import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home'; 
import Services from "./services"
import Ninos from "./Ninos" 
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicios" element={<Services/>} />
        <Route path="/ninos" element={<Ninos/>} />
      </Routes>
    </Router>
  );
}
export default App