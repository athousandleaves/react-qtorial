import React, { Component } from "react";

export default class ShowTutorial extends Component {
  
  constructor(props) {
    super(props);
    this.state = { tutorial: null }
    console.log(props);
  }

  componentDidMount() {
    fetch(`http://localhost:8000/tutorials/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(tutorial => {
        console.log(tutorial);
        this.setState({ tutorial });
      });
  }

  render() {
    if (!this.state.tutorial) return null;
    return (
      <div className="showTutorial">
        <div className="showTutorialItem">
          <div className="videoContainer">
          <iframe width="1120" height="630" title={this.state.tutorial.name} src={`https://www.youtube.com/embed/${this.state.tutorial.videoID}`} frameBorder="0"></iframe>          
          </div>
          <h2 className="showTutorialName">{this.state.tutorial.name}</h2>
        </div>
        <div className="showTutorialComments">
          <h2 className="commentsHeader">Comments</h2>
        {this.state.tutorial.comments.map(comment => {
          return (
            <div className="showCommentItem">
              <p className="commentAuthor">{comment.author.username}</p>
              <span className="commentText">{comment.text}</span>
              <span className="commentDate">{comment.created}</span>
            </div>
          )
        })}
        </div>
      </div>
    )
  }

}