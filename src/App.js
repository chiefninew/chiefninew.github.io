import React, { Component } from 'react';
import Home from './views/Home';
import FaBars from 'react-icons/lib/fa/bars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <div >
            <img src={require("./assets/npclogo.png")} className="logo" />
          </div>
          <div className="navigation">
            <FaBars size={30}/>
          </div>
        </div>
        <Home />
      </div>
    );
  }
}

export default App;
