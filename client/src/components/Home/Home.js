import React, { Component } from 'react';
import Splash from './splash';
import RecentlyAdded from './recentlyadded';
import ShowTopic from '../Topics/showTopic';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Splash />
        <RecentlyAdded />
        <ShowTopic />
      </div>
    );
  }
}

export default Home;
