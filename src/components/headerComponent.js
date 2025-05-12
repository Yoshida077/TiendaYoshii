import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Container } from 'reactstrap';
import { BrowserRouter, Link } from 'react-router-dom';

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
      <BrowserRouter>
        <Navbar color="dark" dark expand="md">
          <Container>

            <NavbarToggler onClick={this.toggleNavbar} />
            
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavbarBrand tag={Link} to="/">
              <img src="/assets/images/logoY.png" alt="Tienda Yoshii" style={{ width: '40px' }} />
            </NavbarBrand>
                </NavItem>
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
      </BrowserRouter>
    );
  }
}

export default Header;
