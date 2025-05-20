import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const handleNavClick = () => {
    setExpanded(false); 
  };

  return (
    <BSNavbar
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      className="custom-navbar shadow-sm"
      sticky="top"
      data-aos="fade-down"
    >
      <Container>
        <BSNavbar.Brand as={NavLink} to="/" className="brand-text">
          <span className="barber-highlight">Lora Barbershop</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link as={NavLink} to="/" end onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" onClick={handleNavClick}>
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
