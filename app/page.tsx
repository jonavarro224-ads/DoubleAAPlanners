'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Trabajar con Double A Planners fue la mejor decisión que tomamos. Convirtieron nuestra visión en algo aún más hermoso de lo que pudimos imaginar.",
    author: "— Alejandra & Rodrigo, Boda en León 2024"
  },
  {
    quote: "Cada detalle fue perfecto. Nuestra quinceañera superó todo lo que habíamos soñado — la dedicación y creatividad del equipo fueron extraordinarias.",
    author: "— Familia Hernández, León 2023"
  },
  {
    quote: "Nuestra gala corporativa fue impecable. El equipo de Double A aportó sofisticación y energía que dejó a nuestros invitados hablando durante meses.",
    author: "— Grupo Empresarial Norte, Evento Anual 2024"
  }
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
        setOpacity(1)
      }, 300)
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  const handleDotClick = (idx: number) => {
    setOpacity(0)
    setTimeout(() => {
      setCurrent(idx)
      setOpacity(1)
    }, 300)
  }

  return (
    <>
      <nav className="custom-nav">
        <a className="nav-logo" href="#"><span>AA</span> Planners</a>
        <ul className="nav-links">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#process">Proceso</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Comenzar</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="hero-label">Bodas y Eventos</p>
          <h1 className="hero-title">
            Cada detalle<br />
            cuenta <em>tu</em><br />
            historia de amor
          </h1>
          <p className="hero-sub">
            Double A Planners crea celebraciones extraordinarias que reflejan quiénes son — desde ceremonias íntimas hasta grandes eventos de destino, ejecutados con gracia e intención.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Comenzar</a>
            <a href="#portfolio" className="btn-text">Ver Nuestro Trabajo</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-new.jpg" alt="Ceremonia de boda elegante" />
          <div className="hero-image-overlay">
            <p>Evento Destacado</p>
            <strong>Boda en León, Guanajuato</strong>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-bar">
        <div className="marquee-track">
          <span className="marquee-item">Bodas <span>✦</span> Eventos Corporativos <span>✦</span> Quinceañeras <span>✦</span> Galas Sociales <span>✦</span> Eventos de Destino <span>✦</span> Reuniones Íntimas <span>✦</span></span>
          <span className="marquee-item">Bodas <span>✦</span> Eventos Corporativos <span>✦</span> Quinceañeras <span>✦</span> Galas Sociales <span>✦</span> Eventos de Destino <span>✦</span> Reuniones Íntimas <span>✦</span></span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="custom-section" id="services">
        <div className="section-header">
          <span className="section-label">Lo Que Ofrecemos</span>
          <h2 className="section-title">Celebraciones <em>creadas</em><br />para cada ocasión</h2>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-num">01</span>
            <h3 className="service-name">Planificación de Bodas</h3>
            <p className="service-desc">Servicio completo desde tu primera visión hasta el último baile. Nos encargamos de cada detalle para que puedas vivir plenamente tu día más especial.</p>
            <a href="#contact" className="service-link">Consultar →</a>
          </div>
          <div className="service-card">
            <span className="service-num">02</span>
            <h3 className="service-name">Eventos Corporativos</h3>
            <p className="service-desc">Conferencias, galas y experiencias de marca diseñadas para impresionar. Aportamos elegancia y precisión a los eventos corporativos con el mismo cuidado que damos a las celebraciones personales.</p>
            <a href="#contact" className="service-link">Consultar →</a>
          </div>
          <div className="service-card">
            <span className="service-num">03</span>
            <h3 className="service-name">Celebraciones Sociales</h3>
            <p className="service-desc">Quinceañeras, aniversarios, bautizos y momentos especiales. Cada evento es una historia única — te ayudamos a contarla de manera hermosa.</p>
            <a href="#contact" className="service-link">Consultar →</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="about-section" id="about">
        <div className="about-image">
          <img src="/images/about-new.jpg" alt="Double A Planners" />
        </div>
        <div className="about-content">
          <span className="section-label">Nuestra Historia</span>
          <h2 className="section-title">Donde la <em>pasión</em><br />encuentra la precisión</h2>
          <p className="about-text">Double A Planners nació de un profundo amor por dar vida a momentos significativos. Creemos que cada celebración merece un toque intencional y personal — y que el proceso de planificación debe sentirse tan alegre como el evento mismo.</p>
          <p className="about-text">Con base en León, Guanajuato, y produciendo eventos en toda la República Mexicana y más allá, nuestro equipo combina visión creativa con logística impecable para hacer realidad la celebración de tus sueños.</p>
          <div className="about-stats">
            <div><div className="stat-num">200+</div><div className="stat-label">Eventos Celebrados</div></div>
            <div><div className="stat-num">8+</div><div className="stat-label">Años de Excelencia</div></div>
            <div><div className="stat-num">100%</div><div className="stat-label">Satisfacción del Cliente</div></div>
            <div><div className="stat-num">MX</div><div className="stat-label">y Eventos de Destino</div></div>
          </div>
          <a href="#contact" className="btn-primary">Trabaja Con Nosotros</a>
        </div>
      </div>

      {/* GALLERY */}
      <section className="gallery-section custom-section" id="portfolio">
        <div className="section-header">
          <span className="section-label">Nuestro Portafolio</span>
          <h2 className="section-title">Momentos que hemos <em>creado</em><br />con amor</h2>
        </div>
        <div className="gallery-grid">
          <a className="gallery-item" href="https://www.instagram.com/oficial.doublea/" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery-new-1.jpg" alt="Boda en hacienda" />
            <div className="gallery-caption"><p>Recepción en Gran Salón</p></div>
          </a>
          <a className="gallery-item" href="https://www.instagram.com/oficial.doublea/" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery-new-2.jpg" alt="Mesa floral elegante" />
            <div className="gallery-caption"><p>Mesas Florales</p></div>
          </a>
          <a className="gallery-item" href="https://www.instagram.com/oficial.doublea/" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery-new-3.jpg" alt="Recepción con flores" />
            <div className="gallery-caption"><p>Ceremonia en Jardín</p></div>
          </a>
          <a className="gallery-item" href="https://www.instagram.com/oficial.doublea/" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery-new-4.jpg" alt="Recepción dorada" />
            <div className="gallery-caption"><p>Reunión Íntima</p></div>
          </a>
          <a className="gallery-item" href="https://www.instagram.com/oficial.doublea/" target="_blank" rel="noopener noreferrer">
            <img src="/images/gallery-new-5.jpg" alt="Montaje floral" />
            <div className="gallery-caption"><p>Gala Corporativa</p></div>
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section custom-section" id="process">
        <div className="section-header">
          <span className="section-label">Cómo Trabajamos</span>
          <h2 className="section-title">Nuestro <em>cuidadoso</em> proceso</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="process-icon">I</div>
            <h3 className="process-name">Consulta</h3>
            <p className="process-desc">Comenzamos escuchando — entendiendo tu visión, tus valores y lo que hace única tu celebración.</p>
          </div>
          <div className="process-step">
            <div className="process-icon">II</div>
            <h3 className="process-name">Diseño</h3>
            <p className="process-desc">Desarrollamos un concepto a medida — desde la dirección estética hasta la selección de proveedores — completamente adaptado a tu historia.</p>
          </div>
          <div className="process-step">
            <div className="process-icon">III</div>
            <h3 className="process-name">Coordinación</h3>
            <p className="process-desc">Cada detalle se gestiona con cuidado meticuloso. Tiempos, logística, proveedores — lo manejamos todo sin contratiempos.</p>
          </div>
          <div className="process-step">
            <div className="process-icon">IV</div>
            <h3 className="process-name">Celebración</h3>
            <p className="process-desc">Tu único trabajo es estar presente y disfrutar. Ejecutamos a la perfección para que puedas vivir cada momento plenamente.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section custom-section">
        <div
          className="testimonial-quote"
          style={{ transition: 'opacity 0.3s', opacity: opacity }}
        >
          {testimonials[current].quote}
        </div>
        <p
          className="testimonial-author"
          style={{ transition: 'opacity 0.3s', opacity: opacity }}
        >
          {testimonials[current].author}
        </p>
        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={current === idx ? 'active' : ''}
              onClick={() => handleDotClick(idx)}
            ></span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section custom-section" id="contact">
        <div className="contact-info">
          <span className="section-label">Contáctanos</span>
          <h2 className="section-title">Planifiquemos<br />algo <em>hermoso</em></h2>
          <p className="contact-text">Sería un honor conocer tu celebración. Comparte algunos detalles y nos pondremos en contacto para agendar una consulta sin costo.</p>
          <div className="contact-detail">
            <span className="contact-detail-label">Ubicación</span>
            <span className="contact-detail-val">León, Guanajuato, México</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail-label">Correo</span>
            <span className="contact-detail-val">hola@doubleaplanners.mx</span>
          </div>
          <div className="contact-detail">
            <span className="contact-detail-label">Teléfono</span>
            <span className="contact-detail-val">+52 (477) 000-0000</span>
          </div>
          <div className="contact-social-divider"></div>
          <div className="contact-detail">
            <span className="contact-detail-label">Instagram</span>
            <span className="contact-detail-val">@doubleaplanners</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group">
              <label>Tu Nombre</label>
              <input type="text" placeholder="Ana García" required />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="ana@correo.com" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Tipo de Evento</label>
              <select required>
                <option value="">Selecciona un servicio</option>
                <option value="Boda">Boda</option>
                <option value="Evento Corporativo">Evento Corporativo</option>
                <option value="Quinceañera">Quinceañera</option>
                <option value="Celebración Social">Celebración Social</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label>Fecha del Evento</label>
              <input type="date" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group full">
              <label>Cuéntanos Tu Visión</label>
              <textarea placeholder="Comparte tu sueño..." required></textarea>
            </div>
          </div>
          <button type="submit" className="form-submit">Enviar Consulta</button>
        </form>
      </section>

      <footer className="custom-footer">
        <div className="footer-top">
          <div className="footer-logo"><span>AA</span> Double A Planners</div>
          <p className="footer-copy">© 2026 Double A Planners · León, Guanajuato, México</p>
          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        <div className="tech-stack">
          <span className="tech-label">Hecho con</span>
          <a href="https://antigravity.dev" target="_blank" className="tech-badge">Antigravity</a>
          <span className="tech-sep">·</span>
          <a href="https://github.com" target="_blank" className="tech-badge">GitHub</a>
          <span className="tech-sep">·</span>
          <a href="https://vercel.com" target="_blank" className="tech-badge">Vercel</a>
        </div>
      </footer>
    </>
  )
}
