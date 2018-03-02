import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: null };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_NODE_SERVER}/topics`)
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
                <Link to={`/topics/${topic._id}`} className="topicLinkWrap">
                  <div className="topicImage">
                      <img src={topic.image} alt={topic.name} />
                  </div>
                  <div className="topicName">
                    <h2>{topic.name}</h2>
                  </div>
                </Link>
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