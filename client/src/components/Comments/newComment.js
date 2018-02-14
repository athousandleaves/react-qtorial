import React, { Component } from "react";

export default class NewComment extends Component {
  render() {
    return (
      <div>
        <form action="/tutorials/{{{tutorial._id}}}/comments" method="POST">
          <div class="form-group">
            <input
              type="text"
              placeholder="Type comment here."
              name="comment[text]"
            />
          </div>
          <div>
            <button>
              Submit!
            </button>
          </div>
        </form>
        <a href="">
          Go back
        </a>
      </div>
    );
  }
}
