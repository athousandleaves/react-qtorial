import React, { Component } from "react";

export default class PostComment extends Component {
  render() {
    if (!this.props.authed) return null;
    return (
      <div className="postCommentContainer">
        <div>
          <form className="submitCommentForm">
            <input
              type="text"
              placeholder="Type comment here..."
              name="comment[text]"
            />
            <button type="submit">Save comment</button>
          </form>
        </div>
      </div>
    );
  }
}
