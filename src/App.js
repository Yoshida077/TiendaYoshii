import React, { Component } from "react";
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/menuComponent';
import Main from './components/mainComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
