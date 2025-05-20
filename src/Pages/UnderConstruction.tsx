import { Container, Row, Col } from "react-bootstrap";
import { FaTools } from "react-icons/fa"; 
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const UnderConstruction = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-light py-5 text-center" data-aos="fade-in">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <FaTools size={60} className="mb-3 text-warning" />
            <h2 className="fw-bold">This Page is Under Construction</h2>
            <p className="text-muted">
              We're working hard to bring this section to life. Check back soon for updates!
            </p>
          <a href="https://batistack.com/" target="_blank">Batistack Development</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UnderConstruction;
