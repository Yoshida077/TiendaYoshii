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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      selectedclothes: null,
      comments: [],
      conjuntos: [],
      camisetas: [],
      pantalones: [],
      chompas: [],
      zapatos: [],
      accesorios: [],
      loadingClothes: false,
      loadingConjuntos: false,
      loadingComments: false,
      loadingCamisetas: false,
      loadingPantalones: false,
      loadingChompas: false,
      loadingZapatos: false,
      loadingAccesorios: false,
      errorClothes: null,
      errorConjuntos: null,
      errorComments: null,
      errorCamisetas: null,
      errorPantalones: null,
      errorChompas: null,
      errorZapatos: null,
      errorAccesorios: null,
    };
  }

  componentDidMount() {
    this.setState({
      loadingClothes: true,
      loadingConjuntos: true,
      loadingCamisetas: true,
      loadingPantalones: true,
      loadingChompas: true,
      loadingZapatos: true,
      loadingAccesorios: true,
    });

    axios.get("http://localhost:3001/clothes")
      .then(res => this.setState({ clothes: res.data, loadingClothes: false }))
      .catch(err => this.setState({ errorClothes: err.message, loadingClothes: false }));

    axios.get("http://localhost:3001/conjuntos")
      .then(res => this.setState({ conjuntos: res.data, loadingConjuntos: false }))
      .catch(err => this.setState({ errorConjuntos: err.message, loadingConjuntos: false }));

    axios.get("http://localhost:3001/camisetas")
      .then(res => this.setState({ camisetas: res.data, loadingCamisetas: false }))
      .catch(err => this.setState({ errorCamisetas: err.message, loadingCamisetas: false }));

    axios.get("http://localhost:3001/pantalones")
      .then(res => this.setState({ pantalones: res.data, loadingPantalones: false }))
      .catch(err => this.setState({ errorPantalones: err.message, loadingPantalones: false }));

    axios.get("http://localhost:3001/chompas")
      .then(res => this.setState({ chompas: res.data, loadingChompas: false }))
      .catch(err => this.setState({ errorChompas: err.message, loadingChompas: false }));

    axios.get("http://localhost:3001/zapatos")
      .then(res => this.setState({ zapatos: res.data, loadingZapatos: false }))
      .catch(err => this.setState({ errorZapatos: err.message, loadingZapatos: false }));

    axios.get("http://localhost:3001/accesorios")
      .then(res => this.setState({ accesorios: res.data, loadingAccesorios: false }))
      .catch(err => this.setState({ errorAccesorios: err.message, loadingAccesorios: false }));
  }

  onDishSelect = (clothesID) => {
    this.setState({ selectedclothes: clothesID, loadingComments: true, errorComments: null });

    axios.get(`http://localhost:3001/comments?clothesID=${clothesID}`)
      .then(res => this.setState({ comments: res.data, loadingComments: false }))
      .catch(err => this.setState({ errorComments: err.message, loadingComments: false }));
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

          <Route
            path="/conjuntos"
            element={
              this.state.loadingConjuntos ? (
                <p className="text-center my-5">Cargando conjuntos...</p>
              ) : this.state.errorConjuntos ? (
                <p className="text-danger text-center my-5">{this.state.errorConjuntos}</p>
              ) : (
                <ConjuntosComponent conjuntos={this.state.conjuntos} />
              )
            }
          />

          <Route
            path="/camisetas"
            element={
              this.state.loadingCamisetas ? (
                <p className="text-center my-5">Cargando camisetas...</p>
              ) : this.state.errorCamisetas ? (
                <p className="text-danger text-center my-5">{this.state.errorCamisetas}</p>
              ) : (
                <CamisetasComponent camisetas={this.state.camisetas} />
              )
            }
          />

          <Route
            path="/pantalones"
            element={
              this.state.loadingPantalones ? (
                <p className="text-center my-5">Cargando pantalones...</p>
              ) : this.state.errorPantalones ? (
                <p className="text-danger text-center my-5">{this.state.errorPantalones}</p>
              ) : (
                <PantalonesComponent pantalones={this.state.pantalones} />
              )
            }
          />

          <Route
            path="/chompas"
            element={
              this.state.loadingChompas ? (
                <p className="text-center my-5">Cargando chompas...</p>
              ) : this.state.errorChompas ? (
                <p className="text-danger text-center my-5">{this.state.errorChompas}</p>
              ) : (
                <ChompasComponent chompas={this.state.chompas} />
              )
            }
          />

          <Route
            path="/zapatos"
            element={
              this.state.loadingZapatos ? (
                <p className="text-center my-5">Cargando zapatos...</p>
              ) : this.state.errorZapatos ? (
                <p className="text-danger text-center my-5">{this.state.errorZapatos}</p>
              ) : (
                <ZapatosComponent zapatos={this.state.zapatos} />
              )
            }
          />

          <Route
            path="/accesorios"
            element={
              this.state.loadingAccesorios ? (
                <p className="text-center my-5">Cargando accesorios...</p>
              ) : this.state.errorAccesorios ? (
                <p className="text-danger text-center my-5">{this.state.errorAccesorios}</p>
              ) : (
                <AccesoriosComponent accesorios={this.state.accesorios} />
              )
            }
          />

          <Route path="/carrito" element={<CarritoComponent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;
