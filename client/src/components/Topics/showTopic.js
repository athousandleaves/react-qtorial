import React, { Component } from "react";

export default class showTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {topics: null}
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
      <div>
        <h1>
        {this.state.topics.name}
        </h1>
      </div>
    )
  }
}