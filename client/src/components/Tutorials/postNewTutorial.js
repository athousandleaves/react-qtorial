import React, { Component } from "react";

export default class PostNewTutorial extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      topics: null,
      ID: {
        value: ''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/topics")
      .then(res => res.json())
      .then(topics => {
        this.setState({ topics });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/tutorials",
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ID: this.state.ID.value
        })
      })
      .then
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
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon3">
                <strong>https://www.youtube.com/watch?v=</strong>
              </span>
              <input
                class="form-control"
                type="text"
                placeholder="paste YouTube ID here"
                name="videoID"
              />
            </div>

            <div class="form-group">
              <label>Select topic:</label>
              <select class="form-control" name="topic">
                {this.state.topics.map(topic => {
                  return (
                    <option>
                      {topic.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="form-group">
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
