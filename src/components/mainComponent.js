import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './homeComponent';
import { CLOTHES } from '../shared/clothes';
import { CONJUNTOS } from "../shared/conjuntos";
import { CAMISETAS } from "../shared/camisetas";
import { ACCESORIOS } from "../shared/accesorios";
import { CHOMPAS } from "../shared/chompas";
import { ZAPATOS } from "../shared/zapatos";
import { PANTALONES } from "../shared/pantalones";
import Header from "./headerComponent";
import DetalleComponent from "./detalleComponent";
import Footer from "./footerComponent";
import ConjuntosComponent from "./conjuntosComponent";
import CamisetasComponent from "./camisetasComponent";
import PantalonesComponent from "./pantalonesComponent";
import ChompasComponent from "./chompasComponent";
import ZapatosComponent from "./zapatosComponent";
import AccesoriosComponent from "./accesoriosComponent";
import CarritoComponent from "./CarritoComponent";
import Contact from "./contactUsComponent";
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
          {/* Redirige la raíz a /home */}
          <Route path="/" element={<Navigate replace to="/home" />} />

          {/* Página principal: Home */}
          <Route
            path="/home"
            element={
              <>
                <Home
                  clothes={this.state.clothes}
                  onClick={this.onDishSelect}
                />
                {this.state.selectedclothes !== null && (
                  <DetalleComponent
                    c={this.state.clothes.find(cl => cl.id === this.state.selectedclothes)}
                  />
                )}
              </>
            }
          />

          {/* Rutas de categorías */}
          <Route path="/conjuntos"element={<ConjuntosComponent conjuntos={CONJUNTOS} />}/>
          <Route path="/camisetas" element={<CamisetasComponent camisetas={CAMISETAS} />} />
          <Route path="/pantalones" element={<PantalonesComponent pantalones={PANTALONES} />} />
          <Route path="/chompas" element={<ChompasComponent chompas={CHOMPAS} />} />
          <Route path="/zapatos" element={<ZapatosComponent zapatos={ZAPATOS} />} />
          <Route path="/accesorios" element={<AccesoriosComponent accesorios={ACCESORIOS} />} />
          <Route path="/carrito" element={<CarritoComponent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;
