import React, { Component } from 'react';
import Splash from './Splash';
import RecentlyAdded from './RecentlyAdded';

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
