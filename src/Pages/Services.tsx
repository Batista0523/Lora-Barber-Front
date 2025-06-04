import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/Services.css';

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-page bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5 display-4" data-aos="fade-down">
          Nuestros Servicios
        </h2>

        {/* Secciones Destacadas */}
        <Row className="mb-5">
          <Col md={6} data-aos="fade-right">
            <Card className="service-highlight h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold fs-3">✂️ Corte & Estilo</Card.Title>
                <Card.Text className="text-muted">
                  Estilo moderno con esencia clásica. Desde cortes Fade hasta Shape-Up, cada detalle cuenta.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} data-aos="fade-left">
            <Card className="service-highlight h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-bold fs-3">🧔 Cuidado de Barba</Card.Title>
                <Card.Text className="text-muted">
                  Recortes personalizados, toallas calientes y aceites esenciales para una experiencia única.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Servicios Detallados */}
        <section className="mb-5">
          <h3 className="fw-bold text-center mb-4" data-aos="fade-up">💈 Servicios Especializados</h3>
          <Row className="gy-4">
            {[
              { title: 'Fade / Taper', text: 'Transiciones limpias adaptadas a tu rostro.', icon: 'bi-scissors' },
              { title: 'Shape-Up', text: 'Líneas precisas para un look fresco y definido.', icon: 'bi-vector-pen' },
              { title: 'Toalla Caliente', text: 'Relajación total con aromas esenciales.', icon: 'bi-emoji-smile' },
              { title: 'Coloración', text: 'Refresca tu imagen con tonos modernos.', icon: 'bi-palette' },
              { title: 'Tratamientos Capilares', text: 'Revitaliza y fortalece tu cabello.', icon: 'bi-droplet-half' },
              { title: 'Diseño de Cejas', text: 'Cejas limpias, masculinas y proporcionadas.', icon: 'bi-eyeglasses' },
            ].map((item, i) => (
              <Col md={4} data-aos="zoom-in" data-aos-delay={i * 100} key={i}>
                <Card className="text-center h-100 shadow service-card">
                  <Card.Body>
                    <i className={`bi ${item.icon} fs-1 text-dark mb-3`}></i>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Diferenciales */}
        <Row className="bg-white rounded shadow p-4 my-5" data-aos="fade-up">
          <Col md={6}>
            <h4 className="fw-bold mb-3">🚀 ¿Por Qué Elegirnos?</h4>
            <ul className="fs-5 text-muted">
              <li>✔️ Atención personalizada</li>
              <li>✔️ Técnicas tradicionales + innovación</li>
              <li>✔️ Ambiente relajado y moderno</li>
              <li>✔️ Pasión por cada detalle</li>
            </ul>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img
              src="/gallery2.jpg"
              alt="Interior de la barbería"
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxWidth: '400px' }}
            />
          </Col>
        </Row>

        {/* CTA Final */}
        <section className="text-center mt-5" data-aos="zoom-in">
          <h4 className="fw-bold mb-3 display-6">¿Listo para Transformar tu Estilo?</h4>
          <p className="text-muted mb-4">
            Agenda tu cita hoy y vive la experiencia Lora Barbershop.
          </p>
          <Link to="/contact">
            <Button variant="dark" size="lg" className="px-4 py-2">
              Reservar Cita
            </Button>
          </Link>
        </section>
      </Container>
    </div>
  );
}

export default Services;