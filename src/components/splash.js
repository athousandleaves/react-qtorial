import React, { Component } from "react";

export default class Splash extends Component {
  render() {
    
    const topicsList = [
      {name: 'MongoDB'},
      {name: 'JavaScript'},
      {name: 'React'},
      {name: 'Redux'}
    ];

    const topics = topicsList.map((topic) =>
      <li>{topic.name}</li>
    );

    return (
      <div className="splash">
        <h1>What would you like to learn?</h1>
        <ul>
          {topics}
        </ul>
      </div>
    )
  }
}