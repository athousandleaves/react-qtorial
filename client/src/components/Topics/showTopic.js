import React, { Component } from "react";

export default class showTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {topics: null}
  }

  componentDidMount() {
    fetch('http://localhost:8000/topics/:id')
      .then(res => res.json())
      .then(topics => {
        console.log(topics);
        this.setState({ topics });
      });
  }
  
  render() {
    if (!this.state.topics) return null;
    return (
      <div>
        <h3>
        {this.state.topics}
        </h3>
      </div>
    )
  }
}