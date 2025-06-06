import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Barbers.css";

function Barbers() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="barbers-page bg-light py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          Nuestro Equipo de Barberos
        </h2>
        <Row className="g-4">
          <Col md={4} data-aos="fade-up">
            <Card className="h-100 shadow border-0">
              <video className="card-video" autoPlay loop muted playsInline>
                <source src="/esmairy.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>

              <Card.Body className="text-center">
                <Card.Title>Esmairy Lora"</Card.Title>
                <Card.Text className="text-muted">
                  Especialista en fades y cortes modernos. Detallista y
                  apasionado por la perfección.
                </Card.Text>
                <Link to="/barbers/esmairy">
                  <Button variant="dark" className="px-4">
                    Ver Perfil
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="h-100 shadow border-0">
              <Card.Img variant="top" src="/barber2.jpg" alt="Barbero 2" />
              <Card.Body className="text-center">
                <Card.Title>Elisaul Batista</Card.Title>
                <Card.Text className="text-muted">
                  Maestro del estilo tradicional. Si buscas elegancia y
                  precisión, Carlos es tu barbero.
                </Card.Text>
                <Link to="/barbers/elisaul">
                  <Button variant="dark" className="px-4">
                    Ver Perfil
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="h-100 shadow border-0">
              <Card.Img variant="top" src="/barber3.jpg" alt="Barbero 3" />
              <Card.Body className="text-center">
                <Card.Title>Leo "Precision"</Card.Title>
                <Card.Text className="text-muted">
                  Conocido por sus líneas impecables y estilo moderno. Un
                  artista del detalle.
                </Card.Text>
                <Link to="/barbers/leo">
                  <Button variant="dark" className="px-4">
                    Ver Perfil
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Barbers;
