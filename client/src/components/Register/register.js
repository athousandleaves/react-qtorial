import React, { Component } from 'react';

export default class Register extends Component {
  render () {
    return (
      <div className="registerContainer">
        <h1>Register</h1>
        <form action="/register" method="POST">
        <div class="form-group">
            <input className="form-control" type="text" name="username" placeholder="Username" />
        </div>
        <div class="form-group">
            <input className="form-control" type="password" name="password" placeholder="Password" />
        </div>
        <div class="form-group">
            <button className="registerUserButton">Submit</button>
        </div>
        </form>
      </div>
    )
  }
}