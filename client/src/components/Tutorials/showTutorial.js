import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
          <iframe width="1220" height="730" title={this.state.tutorial.name} src={`https://www.youtube.com/embed/${this.state.tutorial.videoID}`} frameBorder="0"></iframe>          
          </div>
          <hr/>
          <h2 className="showTutorialName">{this.state.tutorial.name}</h2>
          <p className="showTutorialDescription">{this.state.tutorial.description}</p>
        </div>
        <hr/>
        <div className="showTutorialComments">
          <h2 className="commentsHeader">Comments</h2>
          <span><Link to={`/tutorials/${this.state.tutorial._id}/comments/new`}>Post a comment</Link></span>
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