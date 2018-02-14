import React, { Component } from "react";

export default class NewComment extends Component {
  render() {
    return (
      <div>
        <form>
          <div >
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
