import React, { Component } from "react";

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
      <div className="showTutorialItem">
        <iframe src={`https://www.youtube.com/embed/${this.state.tutorial.videoID}`} frameBorder="0"></iframe>
        <h1>{this.state.tutorial.name}</h1>
      </div>
    )
  }

}