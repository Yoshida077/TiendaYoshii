import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row justify-content-center">    
          <div className="col-4 offset-1 col-sm-2">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Inicio</a></li>
              <li><a href="#" className="text-light">Contacto</a></li>
              <li><a href="#" className="text-light">Sobre nosotros</a></li>
            </ul>
          </div>

          <div className="col-7 col-sm-5">
            <h5>Contacto</h5>
            <address>
              <strong>Tienda Yoshii</strong><br />
              Av. 6 De Agosto<br />
              Quito, Pichincha 173736<br />
              <i className="fa fa-phone fa-lg"></i>: +34 123 456 789<br />
              <i className="fa fa-fax fa-lg"></i>: +34 123 456 789<br />
              <i className="fa fa-envelope fa-lg"></i>: <a className="text-light" href="mailto:palandeta@utn.edu.ec">jaguallisacal@utn.edu.ec</a>
            </address>
          </div>

          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <p>© 2024 Tienda Yoshii</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;