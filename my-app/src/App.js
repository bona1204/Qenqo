import React from 'react';
import './styles/App.css';
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <div className="App snap-container">
      <Navbar />
      {/* Sección Hero */}
      <div className="hero-section section " id="home">
        <div>
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </div>
        <div>
          <h1 className='title1'>DESAFÍA TUS</h1>
          <h1 className='title2'>LÍMITES</h1>
          <div>
            <a href="#join" className="join-button">ÚNETE HOY</a>
          </div>
        </div>
      </div>
      {/* Sección Quiénes Somos */}
      <section className="about-us section" id="quienes-somos">
        <div className='text'>
          <h2 className='subtitle'>QUIENES SOMOS</h2>
          <p className='textaboutus'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc maximus diam ac mi rutrum elementum. Fusce sed varius sapien. Aenean nec molestie purus ac molestie leo.</p>
          <a href="#ver-mas" className='readmore'>Ver más</a>
        </div>
        <div className='img'>
          <img src="/images/img2aboutus.jpeg" alt="img1aboutus" className="imgaboutus1" />
          <img src="/images/img2aboutus.jpeg" alt="img2aboutus" className="imgaboutus2" />
        </div>
      </section>
      {/* Sección Servicios */}
      <section className="services section" id="servicios">
        <h2>SERVICIOS</h2>
        <h3>CENTRO DE PREPARACIÓN FÍSICA Y NUTRICIÓN</h3>
        <div class="services-container">
          <div class="service">
            <img src="/images/img2aboutus.jpeg" alt="Entrenamiento Semipersonalizado" />
            <p>ENTRENAMIENTO SEMIPERSONALIZADO</p>
          </div>
          <div class="service">
            <img src="/images/img2aboutus.jpeg" alt="Entrenamiento Grupal" />
            <p>ENTRENAMIENTO GRUPAL</p>
          </div>
          <div class="service">
            <img src="/images/img2aboutus.jpeg" alt="Entrenamiento Personalizado" />
            <p>ENTRENAMIENTO PERSONALIZADO</p>
          </div>
        </div>
      </section>
      {/* Sección Testimonios */}
      <section className="testimonials section" id="testimonios">
        <div className="title">
          <h2>Testimonios /Entrenadores</h2>
        </div>
        {/* Ejemplo de Testimonio */}
        <div class="testimonials-container">
          <div class="testimonial">
            <img src="/images/testimonio.jpeg" alt="Entrenamiento Semipersonalizado" />
            <div className='box'>
              <p>"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."</p>
              <footer>— Donna Bleaker, 31</footer>
            </div>
          </div>
          <div class="testimonial">
            <img src="/images/testimonio.jpeg" alt="Entrenamiento Grupal" />
            <div className='box'>
              <p>"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."</p>
              <footer>— Lauren Cross, 28</footer>
            </div>
          </div>
          <div class="testimonial">
            <img src="/images/testimonio.jpeg" alt="Entrenamiento Personalizado" />
            <div className='box'>
              <p>"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."</p>
              <footer>— Thomas Xue, 44</footer>
            </div>
          </div>
        </div>
      </section>
      <section class="contact section" id="contacto">
        <div className='title'>
          <h2>CONTACTANOS</h2>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <h3>DIRECCIÓN:</h3>
            <p>QENQO</p>
          </div>
          <div class="contact-item">
            <h3>CORREO ELECTRÓNICO:</h3>
            <p>contacto@qenqo.com</p>
          </div>
          <div class="contact-item">
            <h3>TELÉFONO:</h3>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
