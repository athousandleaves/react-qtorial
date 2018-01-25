import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import Splash from './components/splash';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Splash />
      </div>
    );
  }
}

export default App;
