import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../styles/Elisaul.css"
function ElisaulProfile() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="barber-profile-page bg-light py-5">
      <Container>

        {/* Perfil */}
        <Row className="align-items-center mb-5">
          <Col md={5} data-aos="fade-right">
            <Image
              src="/barber1.jpg"
              alt="Elisaul Batista"
              roundedCircle
              className="img-fluid shadow-lg profile-photo"
            />
          </Col>
          <Col md={7} data-aos="fade-left">
            <h2 className="fw-bold">Elisaul Batista</h2>
            <p className="text-muted fs-5">
              Fundador de Batistack y barbero apasionado con años de experiencia fusionando técnica clásica con estilo moderno. Elisaul se especializa en cortes precisos, fades definidos y atención personalizada a cada cliente.
            </p>
            <p className="fst-italic text-dark">
              “Cada corte es una obra de arte que habla por ti.”
            </p>
            <a
              href="https://calendly.com/elisaul-batistack/corte-de-pelo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="dark" size="lg" className="mt-3">
                Agendar Cita con Elisaul
              </Button>
            </a>
          </Col>
        </Row>

        {/* Galería */}
        <Row data-aos="fade-up" className="mb-4">
          <Col>
            <h3 className="fw-bold text-center mb-4">Galería de Estilos</h3>
          </Col>
        </Row>
        <Row className="g-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Col md={4} sm={6} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <img
                src={`/carlos-style${i}.jpg`} 
                alt={`Estilo ${i}`}
                className="img-fluid rounded shadow-sm gallery-img"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ElisaulProfile;
