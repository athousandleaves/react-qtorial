import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class showTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: null }
    console.log(props);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_NODE_SERVER}/topics/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(topics => {
        console.log(topics);
        this.setState({ topics: topics.topic, tutorials: topics.tutorials });
      });
  }

  render() {
    if (!this.state.topics) return null;
    return (
      <div className="showTopic">
        <div className="showTopicIntro">
          <img className="showTopicImage" src={this.state.topics.image} alt="" />
          <h1 className="showTopicName">
            {this.state.topics.name}
          </h1>
          <p className="showTopicDescription">
            {this.state.topics.description}
          </p>
        </div>
        <hr />
        <h2 className="showTopicVideosHeader">Tutorial Videos</h2>
        <div className="showTopicTutorials">
          {this.state.tutorials.map(tutorial => {
            return (
              <div className="showTopicItem" key={tutorial._id}>
                <Link to={`/tutorials/${tutorial._id}`} className="showTopicLink">
                  <img src={tutorial.thumbnail} alt={tutorial.name} />
                  <h2 className="tutorialName">{tutorial.name}</h2>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}