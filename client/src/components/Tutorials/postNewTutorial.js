import React, { Component } from "react";

export default class PostNewTutorial extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      topics: null,
      videoID: {
        value: ''
      },
      selectedTopic: {
        value: 'Node.js'
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoIDChange = this.handleVideoIDChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_NODE_SERVER}/topics`)
      .then(res => res.json())
      .then(topics => {
        this.setState({ topics });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_NODE_SERVER}/tutorials`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoID: this.state.videoID.value,
          topic: this.state.selectedTopic.value,
          username: this.props.username,
          id: this.props.id
        })
      })
      .then(response =>  {
        if (!response.ok) { window.location.pathname = '/404' }
        return response.json()
      })
      .then(json => {
        window.location.pathname = '/'
      })
  }

  handleVideoIDChange = (e) => {
    this.setState({ videoID: { value: e.target.value } })
  }

  handleTopicChange = (e) => {
    this.setState({ selectedTopic: {value: e.target.value } })
  }

  render() {
    if (!this.state.topics) return null;
    return (
      <div className="postTutorialForm">
        <h1>Post a New Tutorial</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>
              <label>YouTube ID:</label>
            </h2>
            <div className="input-group">
              <span className="input-group-addon">
                <strong>https://www.youtube.com/watch?v=</strong>
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="paste YouTube ID here"
                name="videoID"
                onChange={this.handleVideoIDChange}
              />
            </div>

            <div className="form-group">
              <label>Select topic:</label>
              <select className="form-control" name="topic" value={this.state.selectedTopic.value} onChange={this.handleTopicChange}>
              <option disabled>Select a topic</option>
                {this.state.topics.map(topic => {
                  return (
                    <option key={topic.name}>
                      {topic.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <button>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
