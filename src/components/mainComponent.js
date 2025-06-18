import React, { Component } from "react";
import Menu from './menuComponent';
import { CLOTHES } from '../shared/clothes';
import Header from "./headerComponent";
import DetalleComponent from "./detalleComponent";
import Footer from "./footerComponent";
import ConjuntosComponent from "./conjuntosComponent";
    
    class Main extends Component {
        constructor(props) {
            super(props);
            this.state = {
                clothes: CLOTHES,
                selectedclothes: null
            };
        }

        onDishSelect(clothesID) {
            this.setState({ selectedclothes: clothesID });
        }

        render() {
            return (
                <div>
                    <div className="container">
                        <Header></Header>
                        <Menu clothes={this.state.clothes}
                            onClick={(clothesID) => this.onDishSelect(clothesID)} />
                        <DetalleComponent c={this.state.clothes.filter((estilo) => estilo.id === this.state.selectedclothes)[0]} />
                        <Footer></Footer>    
                    </div>
                </div>
            );
        }
    }

    export default Main;