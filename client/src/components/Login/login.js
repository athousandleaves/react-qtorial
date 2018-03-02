import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: ''
      },
      password: {
        value: ''
      },
      success: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_NODE_SERVER}/login`, 
    { method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username.value,
        password: this.state.password.value
      })
    })
    .then(response =>  {
      if (!response.ok) { window.location.pathname = '/404' }
      return response.json()
    })
    .then(json => {
      localStorage.setItem('login', 
        JSON.stringify({ username: json.username, token: json.token, id: json.id }));
        window.location.pathname = '/'
    })
  }

  handleUserChange = (e) => {
    this.setState({ username: { value: e.target.value } })
  }

  handlePassChange = (e) => {
    this.setState({ password: { value: e.target.value } })
  }

  render() {
    return(
      <div className="registerContainer">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input className="form-control" onChange={this.handleUserChange} value={this.state.username.value} type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-group">
            <input className="form-control" onChange={this.handlePassChange} value={this.state.password.value} type="password" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
            <button className="loginUserButton">Sign In</button>
        </div>
        </form>
      </div>
    )
  }
}