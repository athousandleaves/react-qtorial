import React, { Component } from "react";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/user/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({ user });
      });
  }


  render() {
    if(!this.state.user) return null;
    return (
      <div className="userProfile">
        <h1>{this.props.username}</h1>
        <h2>Qtorial user since {Date(this.state.user.created)}</h2>
      </div>
    );
  }
}
