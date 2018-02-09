import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: null };
  }

  componentDidMount() {
    fetch('http://localhost:8000/topics')
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
              <div className="topicItem">
                <a href="" className="topicLinkWrap" key={topic.name}>
                  <div className="topicImage">
                      <img src={topic.image} alt={topic.name} />
                  </div>
                  <div className="topicName">
                    <h2>{topic.name}</h2>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
        <a href="/topics" className="topicsButton">View all topics</a>
        <hr />
      </div>
    )
  }
}