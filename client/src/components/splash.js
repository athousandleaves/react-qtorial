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
        <h1>What would you like to learn?</h1>
        <ul>
          {this.state.topics.map(topic => {
            return <li>{topic.name}</li>
          })}
        </ul>
      </div>
    )
  }
}