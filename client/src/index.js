import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Topics from './components/Topics/Topics';
import UserMenu from './components/UserMenu';
import GuestMenu from './components/GuestMenu';
import ShowTopic from './components/Topics/ShowTopic';
import ShowTutorial from './components/Tutorials/ShowTutorial';
import EditTutorial from './components/Tutorials/EditTutorial';
import PostNewTutorial from './components/Tutorials/PostNewTutorial';
import UserProfile from './components/User/UserProfile';
import Error from './components/404/404.js';
import registerServiceWorker from './registerServiceWorker';


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authed: false, loading: true };
  }

  componentDidMount() {
    //determine if token is valid
    localStorage.getItem('login') ?
    this.setState({ loading: false, authed: true, username: JSON.parse(localStorage.getItem('login')).username, id: JSON.parse(localStorage.getItem('login')).id }) :
    this.setState({ loading: false })
  }  

  render() {
    if (this.state.loading) return null;
    return (
      <BrowserRouter>
        <div>
          {this.state.authed ? <UserMenu username={this.state.username} id={this.state.id} /> : <GuestMenu />}
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/topics' component={Topics} />
          <Route path='/topics/:id' component={ShowTopic} />
          <Route exact path='/tutorials/:id' render={(props) => (<ShowTutorial {...props} authed={this.state.authed} username={this.state.username} id={this.state.id} />)} />
          <Route exact path='/tutorials/:id/edit' render={(props) => (<EditTutorial {...props} authed={this.state.authed} username={this.state.username} id={this.state.id} />)} />
          <Route path='/tutorials/post' render={(props) => (<PostNewTutorial {...props} authed={this.state.authed} username={this.state.username} id={this.state.id} />)}  />
          <Route path='/user/:id' render={(props) => (<UserProfile {...props} username={this.state.username} />)} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/404' component={Error} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
