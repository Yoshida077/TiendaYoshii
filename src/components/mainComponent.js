import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from './menuComponent';
import { CLOTHES } from '../shared/clothes';
import Header from "./headerComponent";
import DetalleComponent from "./detalleComponent";
import Footer from "./footerComponent";
import ConjuntosComponent from "./conjuntosComponent";
import CamisetasComponent from "./camisetasComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: CLOTHES,
      selectedclothes: null
    };
  }

  onDishSelect = (clothesID) => {
    this.setState({ selectedclothes: clothesID });
  };

  render() {
    return (
      <div>
        <Header />

        <Routes>
          {/* Home: Menu como página principal */}
          <Route path="/" element={
            <>
              <Menu
                clothes={this.state.clothes}
                onClick={this.onDishSelect}
              />
              {this.state.selectedclothes !== null &&
                <DetalleComponent
                  c={this.state.clothes.find(cl => cl.id === this.state.selectedclothes)}
                />
              }
            </>
          } />

          {/* Página de conjuntos */}
          <Route path="/conjuntos" element={<ConjuntosComponent />} />

          {/* Otras rutas podrían ir aquí */}
          <Route path="/camisetas" element={<CamisetasComponent />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;