import React, { Component } from "react";

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
         <button className="sign-in">Sign In</button>
         <button className="register">Register</button>
       </div>
      );
    }
  }
}
