import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import Footer from "../Components/Footer";


const Home = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const phrases = [
    "Donde la tradición se une con la precisión. Entra en un mundo de estilo.",
    "Cortes modernos con esencia clásica. El arte de lucir bien.",
    "Confianza en cada línea, detalle en cada trazo.",
    "Tu imagen habla por ti. Nosotros la perfeccionamos.",
    "Más que una barbería, una experiencia personalizada.",
  ];
  return (
    <>
      <div
        className="hero-section text-white d-flex align-items-center"
        id="hero"
      >
        <Container>
          <h1 data-aos="fade-up" className="display-3 fw-bold">
            Bienvenido a Lora Barbershop
          </h1>
          <h2 key={currentPhrase} className="lead slide-in-left">
            {phrases[currentPhrase]}
          </h2>
          <Button
            href="/contact"
            variant="warning"
            size="lg"
            className="mt-3 px-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Haz Una Cita Ahora
          </Button>
        </Container>
      </div>

      <section className="py-5 bg-light" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h2 className="fw-bold mb-4">¿Quiénes Somos?</h2>
              <p className="text-muted">
                En <strong>Lora Barbershop</strong>, fusionamos el arte
                tradicional del barbero con las técnicas más modernas para
                ofrecer un estilo que trasciende generaciones.
              </p>
              <p className="text-muted">
                Nuestra barbería no es solo un lugar para un corte de cabello —
                es una experiencia. Desde el primer saludo hasta el último
                detalle con la navaja, nos enfocamos en la excelencia y el
                confort.
              </p>
              <p className="text-muted">
                Cada servicio está diseñado para que salgas sintiéndote seguro,
                renovado y con una imagen impecable. Utilizamos productos de
                primera calidad y técnicas personalizadas para cada cliente.
              </p>
              <p className="fst-italic text-dark mt-4">
                “Aquí no solo cortamos cabello, cultivamos confianza.”
              </p>
            </Col>

            <Col md={6} data-aos="fade-left">
              <img
                src="/aboutImg.jpg"
                className="img-fluid rounded shadow"
                alt="Interior de Lora Barbershop"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 text-center" id="services">
        <Container>
          <h2 className="mb-4" data-aos="fade-up">
            Nuestros Servicios
          </h2>
          <Row>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <h5>Corte Fade</h5>
              <p className="text-muted">
                Especialistas en cortes Fade modernos y definidos. Adaptamos el
                estilo a la forma de tu rostro y personalidad para que salgas
                luciendo impecable y seguro.
              </p>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <h5>Recorte de Barba</h5>
              <p className="text-muted">
                Un buen recorte de barba marca la diferencia. Damos forma,
                definimos líneas y cuidamos cada detalle para realzar tu
                presencia con un look limpio y profesional.
              </p>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="300">
              <h5>Afeitado con Toalla Caliente</h5>
              <p className="text-muted">
                Una experiencia de barbería clásica. Relájate con un afeitado
                tradicional, toallas calientes y técnicas cuidadosas que
                rejuvenecen tu piel y tu estilo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark text-white" id="gallery">
        <Container>
          <h2 className="text-center mb-4" data-aos="fade-up">
            Galería de Estilos
          </h2>
          <Row className="g-3">
            {[1, 2, 3, 4].map((i) => (
              <Col
                xs={6}
                md={3}
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <img
                  src={`/gallery${i}.jpg`}
                  alt={`Estilo ${i}`}
                  className="img-fluid rounded shadow-sm gallery-img"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light" id="testimonials">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <Row className="g-4">
            <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="100">
              <div className="testimonial-card p-4 shadow-sm bg-white rounded text-center h-100">
                <p className="fst-italic">
                  "El mejor corte que he tenido en años. Se nota que dominan su
                  arte."
                </p>
                <h6 className="mt-3 mb-0 fw-bold">Alex R.</h6>
                <small className="text-muted">Cliente frecuente</small>
              </div>
            </Col>
            <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="200">
              <div className="testimonial-card p-4 shadow-sm bg-white rounded text-center h-100">
                <p className="fst-italic">
                  "El ambiente, el estilo y el servicio... todo excelente. 10 de
                  10."
                </p>
                <h6 className="mt-3 mb-0 fw-bold">Marcus D.</h6>
                <small className="text-muted">Empresario</small>
              </div>
            </Col>
            <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="300">
              <div className="testimonial-card p-4 shadow-sm bg-white rounded text-center h-100">
                <p className="fst-italic">
                  "Nunca había salido tan conforme de una barbería.
                  ¡Recomendados 100%!"
                </p>
                <h6 className="mt-3 mb-0 fw-bold">Laura M.</h6>
                <small className="text-muted">Madre y profesional</small>
              </div>
            </Col>
            <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="400">
              <div className="testimonial-card p-4 shadow-sm bg-white rounded text-center h-100">
                <p className="fst-italic">
                  "Atención de primera, cortes precisos y ambiente agradable.
                  ¡Volveré pronto!"
                </p>
                <h6 className="mt-3 mb-0 fw-bold">Carlos B.</h6>
                <small className="text-muted">Cliente nuevo</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="py-5 text-center text-dark"
        style={{ backgroundColor: "#f2f2f2" }}
        id="cta"
      >
        <Container data-aos="fade-up">
          <h2 className="fw-bold">¿Listo para un nuevo corte?</h2>
          <p className="mb-4">
            Agenda tu cita hoy mismo y vive la experiencia premium que solo Lora
            Barbershop puede ofrecer.
          </p>
          <Button href="/contact" variant="dark" size="lg">
            Reservar Ahora
          </Button>
        </Container>
      </section>
      <section className="py-5 bg-white" id="location">
 
          <Footer/>
   
      </section>

    </>
  );
};

export default Home;
