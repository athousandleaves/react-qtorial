import React, { Component } from "react";

export default class RecentlyAdded extends Component {
  constructor(props) {
    super(props);
    this.state = { tutorials: null };
  }

  componentDidMount() {
    fetch('http://localhost:8000/tutorials/tutorials')
      .then(res => res.json())
      .then(tutorials => {
        this.setState({ tutorials });
      });
  }
  render() {
    if (!this.state.tutorials) return null;
    return (
      <div className="recentlyAdded">
        <h1>Recently Added</h1>
        <div className="recentTutorials">
        {this.state.tutorials.slice(0, 9).map(tutorial => {
            return (
              <div className="recentItem" key={tutorial._id}>
                <img src={tutorial.thumbnail} alt={tutorial.name} />
                <h2 className="tutorialName">{tutorial.name}</h2>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}