import React, { Component } from "react";
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Container, Badge
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // ← ícono de carrito

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      cartItemCount: 2 // ← puedes cambiar este número para simular cantidad
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
          <Container className="d-flex justify-content-between align-items-center">
            {/* LOGO Y NOMBRE */}
            <div className="d-flex align-items-center">
              <NavbarBrand tag={Link} to="/home" className="d-flex align-items-center">
                <img
                  src="/assets/images/logoY.png"
                  alt="Tienda Yoshii"
                  style={{ width: '40px', marginRight: '10px' }}
                />
                <span className="navbar-text h5 mb-0 text-light">Home</span>
              </NavbarBrand>
            </div>

            {/* BOTÓN TOGGLER */}
            <NavbarToggler onClick={this.toggleNavbar} />

            {/* LINKS */}
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto d-flex align-items-center" navbar>
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

                {/* CARRITO */}
                <NavItem className="nav-link position-relative">
                  <Link to="/carrito" className="text-light">
                    <FaShoppingCart size={20} />
                    <Badge color="danger" pill className="position-absolute top-0 start-100 translate-middle">
                      {this.state.cartItemCount}
                    </Badge>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        {/* ENCABEZADO */}
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