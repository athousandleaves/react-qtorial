import React, { Component } from 'react';
// import './App.css';
import Menu from './components/menu';
import Splash from './components/splash';
import RecentlyAdded from './components/recentlyadded';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Splash />
        <RecentlyAdded />
      </div>
    );
  }
}

export default App;
