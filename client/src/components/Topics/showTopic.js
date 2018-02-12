import React, { Component } from "react";

export default class showTopic extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: null }
    console.log(props);
  }

  componentDidMount() {
    fetch(`http://localhost:8000/topics/${this.props.match.params.id}`)
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
        <div className="showTopicTutorials">
          {this.state.tutorials.map(tutorial => {
            return (
              <div className="showTopicItem" key={tutorial._id}>
                <a href="" className="showTopicLink">
                  <img src={tutorial.thumbnail} alt={tutorial.name} />
                  <h2 className="tutorialName">{tutorial.name}</h2>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}