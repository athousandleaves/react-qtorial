import React, { Component } from "react";

export default class PostNewTutorial extends Component {

  render() {
    if (!this.props.authed) return null;
      return (
        <div className="postTutorialForm">
          <h1>Post a New Tutorial</h1>
        </div>
      );
    
  }
}
