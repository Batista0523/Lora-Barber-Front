import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Esmairy.css"

function EsmairyProfile() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); // 3.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="dragon-intro-wrapper">
          <video
            className="dragon-intro-video"
            autoPlay
            muted
            playsInline
            src="/fireDragon.mp4"
          />
        </div>
      )}

      <div className={showIntro ? "main-content-hidden" : ""}>
        <div className="barber-profile-page bg-light py-5">
          <Container>
            {/* Perfil */}
            <Row className="align-items-center mb-5">
              <Col md={5} data-aos="fade-right">
                <Image
                  src="/barber1.jpg"
                  alt="Esmairy Lora"
                  roundedCircle
                  className="img-fluid shadow-lg profile-photo"
                />
              </Col>
              <Col md={7} data-aos="fade-left">
                <h2 className="fw-bold">Esmairy Lora</h2>
                <p className="text-muted fs-5">
                  Esmairy cuenta con décadas de experiencia perfeccionando el arte
                  del corte de cabello. Con manos firmes, una visión creativa y una
                  pasión inigualable por su oficio, transforma cada visita en una
                  experiencia única...
                </p>
                <p className="fst-italic text-dark">
                  “Cada corte es una obra de arte que habla por ti.”
                </p>
                <a
                  href="https://calendly.com/lorazenon/corte-de-pelo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="dark" size="lg" className="mt-3">
                    Agendar Cita con Esmairy
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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Col
                  md={4}
                  sm={6}
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <img
                    src={`/esmairyGal${i}.jpg`}
                    alt={`Estilo ${i}`}
                    className="img-fluid rounded shadow-sm gallery-img"
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default EsmairyProfile;
