import React, { Component } from "react";
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <>
        {/* NAVBAR */}
        <Navbar color="dark" dark expand="md">
          <Container>
            <NavbarToggler onClick={this.toggleNavbar} />
            <NavbarBrand tag={Link} to="/">
              <img
                src="/assets/images/logoY.png"
                alt="Tienda Yoshii"
                style={{ width: '40px' }}
              />
            </NavbarBrand>

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/conjuntos" className="nav-link">Conjuntos</Link>
                </NavItem>
                <NavItem>
                  <Link to="/camisetas" className="nav-link">Camisetas</Link>
                </NavItem>
                <NavItem>
                  <Link to="/pantalones" className="nav-link">Pantalones</Link>
                </NavItem>
                <NavItem>
                  <Link to="/chompas" className="nav-link">Chompas</Link>
                </NavItem>
                <NavItem>
                  <Link to="/zapatos" className="nav-link">Zapatos</Link>
                </NavItem>
                <NavItem>
                  <Link to="/accesorios" className="nav-link">Accesorios</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        {/* ENCABEZADO CON NOMBRE DE LA TIENDA */}
        <div className="jumbotron text-center">
          <div className="container">
            <h1>Tienda Yoshii</h1>
            <p className="lead">¡Moda con estilo y actitud!</p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;