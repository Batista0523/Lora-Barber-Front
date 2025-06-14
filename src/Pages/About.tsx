import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page bg-light py-5">
      <Container>
      
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          Sobre Nosotros
        </h2>

    
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <img
              src="/frontBarber.jpg"
              className="img-fluid rounded shadow custom-img-height"
              alt="Interior de Lora Barbershop"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p className="text-muted fs-5">
              En <strong>Lora Barbershop</strong>, combinamos la elegancia de la
              barbería clásica con técnicas de vanguardia. Aquí no solo vienes
              por un corte, vienes por una experiencia.
            </p>
            <p className="text-muted fs-5">
              Nuestro equipo está formado por profesionales apasionados por su
              arte. Desde un corte fade hasta un afeitado tradicional, cada
              detalle importa. La experiencia, el estilo y la atención
              personalizada son nuestra firma.
            </p>
            <p className="fst-italic text-dark mt-4">
              “Donde cada corte cuenta una historia.”
            </p>
          </Col>
        </Row>


        <Row className="bg-white shadow rounded p-4 mb-5" data-aos="zoom-in">
          <Col md={6} className="mb-4 mb-md-0">
            <h4 className="fw-bold mb-3">📍 Ubicación</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=814+Hewitt+Place,+Bronx,+NY+10455"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fs-5 d-inline-block mb-2 text-primary"
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              814 Hewitt Place, Bronx, NY 10455
            </a>
            <p className="text-muted">
              Te esperamos en el corazón del Bronx, en un ambiente moderno,
              acogedor y lleno de buena vibra.
            </p>
          </Col>
          <Col md={6}>
            <h4 className="fw-bold mb-3">📧 Contáctanos</h4>
            <a
              href="mailto:Lorazenon@gmail.com"
              className="d-inline-flex align-items-center text-decoration-none text-dark fs-5"
            >
              <i className="bi bi-envelope-fill me-2 fs-4 text-primary"></i>
              Email Us
            </a>
            <p className="mt-2 text-muted">
              ¿Tienes preguntas? Escríbenos con gusto.
            </p>
          </Col>
        </Row>

     
        <Row data-aos="fade-up" className="mb-5">
          <Col>
            <h4 className="text-center fw-bold mb-3">Nuestra Historia</h4>
            <p className="text-center text-muted px-md-5 fs-6">
              Iniciamos con una silla, unas tijeras y un sueño: ofrecer cortes
              con carácter, ambiente familiar y atención inigualable. Con los
              años, Lora Barbershop se ha convertido en un punto de referencia
              para quienes buscan estilo y confianza en cada visita.
            </p>
          </Col>
        </Row>

        <Row className="text-center py-5" data-aos="fade-up">
          <Col md={3}>
            <i className="bi bi-scissors fs-1 text-dark mb-2"></i>
            <h5 className="fw-bold">Calidad</h5>
            <p className="text-muted">
              Técnicas de precisión en cada servicio.
            </p>
          </Col>
          <Col md={3}>
            <i className="bi bi-stars fs-1 text-dark mb-2"></i>
            <h5 className="fw-bold">Estilo</h5>
            <p className="text-muted">Nos adaptamos a tu identidad única.</p>
          </Col>
          <Col md={3}>
            <i className="bi bi-person-check fs-1 text-dark mb-2"></i>
            <h5 className="fw-bold">Confianza</h5>
            <p className="text-muted">Clientes felices, cortes memorables.</p>
          </Col>
          <Col md={3}>
            <i className="bi bi-gem fs-1 text-dark mb-2"></i>
            <h5 className="fw-bold">Excelencia</h5>
            <p className="text-muted">
              Cuidamos cada detalle como si fuera el primero.
            </p>
          </Col>
        </Row>

     
        <Row className="bg-white shadow rounded p-4 my-5" data-aos="fade-right">
          <Col>
            <h4 className="fw-bold mb-3 text-center">
              ¿Qué nos hace diferentes?
            </h4>
            <ul className="fs-5 text-muted list-unstyled">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Atención personalizada desde el primer momento.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Ambiente acogedor y profesional.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Tecnología moderna y técnicas clásicas.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Relación calidad-precio inigualable.
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center mt-5" data-aos="fade-up">
          <Col>
            <h4 className="fw-bold mb-3">Conoce a Nuestro Equipo</h4>
            <p className="text-muted mb-4">
              Barberos con talento, carisma y pasión por el detalle. Cada uno
              tiene una historia y un estilo que contar.
            </p>
            <Link to="/barbers">
              <Button variant="dark" size="lg" className="px-4">
                Ver Barberos
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
