import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return(
      <div className="registerContainer">
        <h1>Sign In</h1>
        <form action="/login" method="POST">
        <div class="form-group">
            <input className="form-control" type="text" name="username" placeholder="Username" />
        </div>
        <div class="form-group">
            <input className="form-control" type="password" name="password" placeholder="Password" />
        </div>
        <div class="form-group">
            <button className="loginUserButton">Sign In</button>
        </div>
        </form>
      </div>
    )
  }
}