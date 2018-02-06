import React, { Component } from 'react';
import Menu from './components/menu';
import Splash from './components/Home/splash';
import RecentlyAdded from './components/Home/recentlyadded';

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
