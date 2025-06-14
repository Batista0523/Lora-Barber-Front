

import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
           <a
              href="https://www.google.com/maps/search/?api=1&query=814+Hewitt+Place,+Bronx,+NY+10455"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fs-5 d-inline-block mb-2 text-primary"
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              814 Hewitt Place, Bronx, NY 10455
            </a>

        <div className="footer-social mb-3">
          <a
            href="https://www.instagram.com/lora_barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

        <p className="footer-copy mb-0">
          © {new Date().getFullYear()} Lora Barbershop. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
