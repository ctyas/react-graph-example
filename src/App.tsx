import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HelloWorld } from "./components/helloWorld";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloWorld />
        </header>
      </div>
    );
  }
}

export default App;
