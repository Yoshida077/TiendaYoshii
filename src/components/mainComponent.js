import React, { Component } from "react";
import {Navbar, NavbarBrand } from 'reactstrap'
import Menu from './menuComponent';
import { CLOTHES } from '../shared/clothes';
import DetalleComponent from "./detalleComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: CLOTHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar color="dark" expand="md">
                    <div className="container">
                        <NavbarBrand >Tienda Yoshii</NavbarBrand>
                    </div>
                </Navbar>
                <div className="container">
                    <Menu dishes={this.state.dishes}
                        onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DetalleComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
            </div>
        );
    }
}

export default Main;