import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="custom-footer bg-dark text-light py-3">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Tienda Yoshii. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;