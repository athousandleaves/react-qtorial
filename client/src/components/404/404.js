import React, { Component } from 'react';

export default class Error extends Component {

  render() {
    return(
      <div className="logoutMessage">
        <h1>404 :(</h1>
        <h2>Sorry dude, something happened. Maybe don't do the thing you just did?</h2>
      </div>
    )
  }
}