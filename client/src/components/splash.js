import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: null };
  }

  componentDidMount() {
    fetch('http://localhost:8000/tutorials/topics')
      .then(res => res.json())
      .then(topics => {
        this.setState({ topics });
      });
  }

  render() {
    if (!this.state.topics) return null;
    return (
      <div className="splash">
        <h1 className="intro">What would you like to learn?</h1>
        <div className="topics">
          {this.state.topics.slice(0, 6).map(topic => {
            return (
              <div className="topicItem" key={topic.name}>
                <div className="topicImage">
                  <a href=""><img src={topic.image} alt={topic.name} /></a>
                </div>
                <div className="topicName">
                  <h2>{topic.name}</h2>
                </div>
              </div>
            )
          })}
        </div>
        <a href="" className="topicsButton">View all topics</a>
        <hr />
      </div>
    )
  }
}