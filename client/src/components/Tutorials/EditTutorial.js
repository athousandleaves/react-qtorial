import React, { Component } from 'react';

export default class EditTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = { tutorial: null };
  }

  componentDidMount() {
  fetch(`http://localhost:8000/tutorials/${this.props.match.params.id}/edit`)
    .then(res => res.json())
    .then(tutorial => {
      console.log(tutorial);
      this.setState({ tutorial });
    });
  }
  
  render() {
    if (!this.state.tutorial) return null;
    return(
      <div>
        <h3>Edit {this.state.tutorial.name}}</h3>
        <div>
            <form>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="name" name="tutorial[name]" value={this.state.tutorial.name} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="YouTube ID" name="tutorial[videoID]" value={this.state.tutorial.videoID} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="image url" name="tutorial[thumbnail]" value={this.state.tutorial.thumbnail} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="description" name="tutorial[description]" value={this.state.tutorial.description} />
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-default btn-block btn-primary">Submit!</button>
                </div>
            </form>
            <a href="/tutorials/all" className="pull-right">Go back</a>

        </div>

      </div>
    )
  }
}