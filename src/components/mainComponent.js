    import React, { Component } from "react";
    import Menu from './menuComponent';
    import { CLOTHES } from '../shared/clothes';
    import DetalleComponent from "./detalleComponent";

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
                        <Menu clothes={this.state.clothes}
                            onClick={(clothesID) => this.onDishSelect(clothesID)} />
                        <DetalleComponent c={this.state.clothes.filter((estilo) => estilo.id === this.state.selectedclothes)[0]} />
                    </div>
                </div>
            );
        }
    }

    export default Main;