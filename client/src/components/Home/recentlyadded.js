import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class RecentlyAdded extends Component {
  constructor(props) {
    super(props);
    this.state = { tutorials: null };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_NODE_SERVER}/tutorials`)
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
                <Link to={`/tutorials/${tutorial._id}`} className="recentItemLink">
                  <img src={tutorial.thumbnail} alt={tutorial.name} />
                  <h2 className="tutorialName">{tutorial.name}</h2>
                </Link> 
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}