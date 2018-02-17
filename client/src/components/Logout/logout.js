import React, { Component } from 'react';

export default class Logout extends Component {

  componentWillMount () {
    localStorage.removeItem('login');
    window.location.pathname = '/';
  }

  render() {
    return(
      <div className="logoutMessage">
        <h2>You are now logged out! Thank you for visiting :)</h2>
      </div>
    )
  }
}