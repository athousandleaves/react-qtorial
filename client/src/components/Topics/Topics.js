import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Topics extends Component {
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
      <div>
        <h1 className="intro">Topics</h1>
        <div className="allTopics">
          {this.state.topics.map(topic => {
            return (
              <div className="alltopicsItem" key={topic.name}>
                <Link to={`/topics/${topic._id}`} className="topicLinkWrap" key={topic.name}>
                  <div className="alltopicsName">
                    <h2>{topic.name}</h2>
                  </div>
                  <div className="alltopicsImage">
                    <img src={topic.image} alt={topic.name} />
                  </div>
                  <div className="topicDescription">
                    <p>{topic.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
