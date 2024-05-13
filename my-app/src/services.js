function Services() {
  return (
      <div>
          <section className="services section" id="servicios">
              <h2>SERVICIOS</h2>
              <h3>CENTRO DE PREPARACIÓN FÍSICA Y NUTRICIÓN</h3>
              <div className="services-container">
                  <div className="service">
                      <img src="/images/img2aboutus.jpg" alt="Entrenamiento Semipersonalizado" />
                      <p>ENTRENAMIENTO SEMIPERSONALIZADO</p>
                  </div>
                  <div className="service">
                      <img src="/images/img2aboutus.jpg" alt="Entrenamiento Grupal" />
                      <p>ENTRENAMIENTO GRUPAL</p>
                  </div>
                  <div className="service">
                      <img src="/images/img2aboutus.jpg" alt="Entrenamiento Personalizado" />
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
              <div className="testimonials-container">
                  <div className="testimonial">
                      <img src="/images/testimonio.jpeg" alt="Entrenamiento Semipersonalizado" />
                      <div className='box'>
                          <p>"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."</p>
                          <footer>— Donna Bleaker, 31</footer>
                      </div>
                  </div>
                  <div className="testimonial">
                      <img src="/images/testimonio.jpeg" alt="Entrenamiento Grupal" />
                      <div className='box'>
                          <p>"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."</p>
                          <footer>— Lauren Cross, 28</footer>
                      </div>
                  </div>
                  <div className="testimonial">
                      <img src="/images/testimonio.jpeg" alt="Entrenamiento Personalizado" />
                      <div className='box'>
                          <p>"Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."</p>
                          <footer>— Thomas Xue, 44</footer>
                      </div>
                  </div>
              </div>
          </section>
          <section className="contact section" id="contacto">
              <div className='title'>
                  <h2>CONTACTANOS</h2>
              </div>
              <div className="contact-info">
                  <div className="contact-item">
                      <h3>DIRECCIÓN:</h3>
                      <p>QENQO</p>
                  </div>
                  <div className="contact-item">
                      <h3>CORREO ELECTRÓNICO:</h3>
                      <p>contacto@qenqo.com</p>
                  </div>
                  <div className="contact-item">
                      <h3>TELÉFONO:</h3>
                      <p>(123) 456-7890</p>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Services