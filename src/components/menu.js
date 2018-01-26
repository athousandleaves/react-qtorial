import React, { Component } from "react";

export default class Header extends Component {
  render() {
    if (this.props.authed === true) {
      return (
      <div className="header">

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
