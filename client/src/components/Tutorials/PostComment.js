import React, { Component } from "react";

export default class PostComment extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      comment: {
        value: ''
      },
      username: {
        value: this.props.username
      },
      userID: {
        value: this.props.userID
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_NODE_SERVER}/tutorials/${this.props.videoID}/comments/`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: this.state.comment.value,
          username: this.state.username.value,
          id: this.state.userID.value
        })
      })
      .then(response =>  {
        if (!response.ok) { window.location.pathname = '/404' }
        return response.json()
      })
      .then(json => {
        window.location.pathname = `/tutorials/${this.props.videoID}/`
      })
  }

  handleCommentChange = (e) => {
    this.setState({ comment: {value: e.target.value } })
  }

  render() {
    return (
      <div className="postCommentContainer">
        <div>
          <form className="submitCommentForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Type comment here..."
              name="comment[text]"
              onChange={this.handleCommentChange}
            />
            <button type="submit">Save comment</button>
          </form>
        </div>
      </div>
    );
  }
}
