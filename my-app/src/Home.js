import './styles/App.css';

function Home() {
    return (
        <div className="App snap-container">
          {/* Sección Hero */}
          <div className="hero-section section " id="home">
            <div>
              <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>
            <div>
              <h1 className='title1'>"El resultado de tu entrenamiento</h1>
              <h1 className='title2'>se ve en base a tu esfuerzo,</h1>
              <h1 className='title1'>mótivate a superarte"</h1>
            </div>
          </div>
          {/* Sección Quiénes Somos */}
          <section className="about-us section" id="quienes-somos">
            <div className='text'>
              <h2 className='subtitle'>IDENTIDAD QENQO </h2>
              <p className='textaboutus'>Ayudamos a potenciar tu performance, desarrollar tu fuerza y exigirte en cada entrenamiento para llegar
                a tu máximo nivel físico y mental, trabajando en base a la pirámide de rendimiento usando regresiones y progresiones.</p>
            </div>
            <div className='img'>
              <img src="/images/img1aboutus.jpg" alt="img1aboutus" className="imgaboutus1" />
              <img src="/images/img2aboutus.jpg" alt="img2aboutus" className="imgaboutus2" />
            </div>
          </section>
          {/* Sección Contacto */}
          <section className="contact section" id="contacto">
            <div className="text">
              <h2 className="subtitle">EMPIEZA EL CAMBIO</h2>
            </div>
            <div className="form-container">
              <form>
                <input type="text" placeholder="Nombres" />
                <input type="text" placeholder="Apellidos" />
                <input type="text" placeholder="Dni" />
                <input type="text" placeholder="Correo/Número" />
                <select>
                  <option>Tipo de consulta</option>
                  <option>Consulta 1</option>
                  <option>Consulta 2</option>
                </select>
                <textarea placeholder="Mensaje personalizado"></textarea>
                <button type="submit">Consultar</button>
              </form>
            </div>
          </section>
        </div>
      );
}
export default Home