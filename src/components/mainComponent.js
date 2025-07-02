import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Home from './homeComponent';
import ConjuntosComponent from "./conjuntosComponent";
import CamisetasComponent from "./camisetasComponent";
import PantalonesComponent from "./pantalonesComponent";
import ChompasComponent from "./chompasComponent";
import ZapatosComponent from "./zapatosComponent";
import AccesoriosComponent from "./accesoriosComponent";
import CarritoComponent from "./CarritoComponent";
import Contact from "./contactUsComponent";

import Header from "./headerComponent";
import DetalleComponent from "./detalleComponent";
import Footer from "./footerComponent";

// Para categorías sin servidor
import { CONJUNTOS } from "../shared/conjuntos";
import { CAMISETAS } from "../shared/camisetas";
import { ACCESORIOS } from "../shared/accesorios";
import { CHOMPAS } from "../shared/chompas";
import { ZAPATOS } from "../shared/zapatos";
import { PANTALONES } from "../shared/pantalones";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      selectedclothes: null,
      comments: [],
      loadingComments: false,
      errorComments: null,
      loadingClothes: false,
      errorClothes: null
    };
  }

  componentDidMount() {
    this.setState({ loadingClothes: true });
    axios.get("http://localhost:3001/clothes")
      .then(response => this.setState({ clothes: response.data, loadingClothes: false }))
      .catch(error => this.setState({ errorClothes: error.message, loadingClothes: false }));
  }

  onDishSelect = (clothesID) => {
    this.setState({ selectedclothes: clothesID, loadingComments: true, errorComments: null });

    axios.get(`http://localhost:3001/comments?clothesID=${clothesID}`)
      .then(response => this.setState({ comments: response.data, loadingComments: false }))
      .catch(error => this.setState({ errorComments: error.message, loadingComments: false }));
  };

  render() {
    const selectedClothes = this.state.clothes.find(cl => cl.id === this.state.selectedclothes);

    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />

          <Route
            path="/home"
            element={
              <>
                <Home
                  clothes={this.state.clothes}
                  onClick={this.onDishSelect}
                  loading={this.state.loadingClothes}
                  error={this.state.errorClothes}
                />
                {selectedClothes && (
                  <DetalleComponent
                    c={selectedClothes}
                    comments={this.state.comments}
                    isLoading={this.state.loadingComments}
                    errMess={this.state.errorComments}
                  />
                )}
              </>
            }
          />

          <Route path="/conjuntos" element={<ConjuntosComponent conjuntos={CONJUNTOS} />} />
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
