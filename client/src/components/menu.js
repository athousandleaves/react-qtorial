import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    if (this.props.authed) {
      return (
        <div className="header">
          <li>Post New Tutorial</li>
          <li>Logged in as {this.props.username}</li>
          <li>Logout</li>
        </div>
      );
    } else {
      // not authenticated
      return (
        <div className="header">
          <a href="/" className="logoLink"><h1 className="logo">Qtorial</h1></a>
          <div className="nav">
            <Link to={`/login`} className="signIn">Sign In</Link>
            <Link to={`/register`} className="register">Register</Link>
          </div>
        </div>
      );
    }
  }
}
