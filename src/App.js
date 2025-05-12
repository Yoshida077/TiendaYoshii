import React, { Component } from "react";
import './App.css';
import Main from './components/mainComponent';
import Header from './components/headerComponent';
import Footer from "./components/footerComponent";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Tienda Yoshii</h1>
        <Main />
        <Footer />
      </div>
        
    );
  }
}

export default App;
