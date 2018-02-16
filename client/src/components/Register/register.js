import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
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
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/users', 
    { method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username.value,
        password: this.state.password.value
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({success: true})
      {window.location.pathname = '/'}
    })
  }

  handleUserChange = (e) => {
    this.setState({ username: { value: e.target.value } })
  }

  handlePassChange = (e) => {
    this.setState({ password: {value: e.target.value } })
  }

  render () {
    return (
      <div className="registerContainer">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input className="form-control" onChange={this.handleUserChange} value={this.state.username.value} type="text" name="username" placeholder="Username" />
        </div>
        <div className="form-group">
            <input className="form-control" onChange={this.handlePassChange} type="password" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
            <button className="registerUserButton">Submit</button>
        </div>
        </form>
      </div>
    )
  }
}