import React, { Component } from "react";

export default class Header extends Component {
  render() {
    if (this.props.authed === true) {
      return (
      <div></div>
      );
    } else {
      // not authenticated
      return (
       <div></div>
      );
    }
  }
}
