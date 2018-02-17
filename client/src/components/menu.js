import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    if (this.props.authed) {
      return (
        <div className="header">
        <a href="/" className="logoLink"><h1 className="logo">Qtorial</h1></a>          
        <div className="authNav">
            <Link to={`/user/`} className="signIn">Logged in as {this.props.username}</Link>
            <Link to={`/postnewtutorial`} className="postNewTutorial">Post New Tutorial</Link>
            <Link to={`/logout`} className="logout">Log Out</Link>
          </div>
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
