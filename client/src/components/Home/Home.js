import React, { Component } from 'react';
import Splash from './splash';
import RecentlyAdded from './recentlyadded';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Splash />
        <RecentlyAdded />
      </div>
    );
  }
}

export default Home;
