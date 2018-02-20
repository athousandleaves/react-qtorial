import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    if (this.props.authed) {
      return (
        <div className="header">
        <a href="/" className="logoLink"><h1 className="logo">Qtorial</h1></a>          
        <div className="authNav">
            <Link to={`/user/${this.props.id}`} className="signIn">Logged in as <strong>{this.props.username}</strong></Link>
            <Link to={`/tutorials/post`} className="postNewTutorial">Post New Tutorial</Link>
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
