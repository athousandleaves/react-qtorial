import React, { Component } from 'react';

export default class Logout extends Component {

  componentDidMount () {
    localStorage.removeItem('login');
    setTimeout (() => { window.location.pathname = '/' }, 2000);
  }

  render() {
    return(
      <div className="logoutMessage">
        <h2>You are now logged out! Thank you for visiting :)</h2>
      </div>
    )
  }
}