import React, { Component } from "react";

export default class PostNewTutorial extends Component {
  render() {
    if (!this.props.authed) return null;
    return (
      <div className="postTutorialForm">
        <h1>Post a New Tutorial</h1>
        <div>
          <form>
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
              <label for="sel1">Select topic:</label>
              <select class="form-control" id="sel1" name="topic">
                {/* each topic */}
                <option />
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
