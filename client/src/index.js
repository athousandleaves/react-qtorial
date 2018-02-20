import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Logout from './components/Logout/logout';
import Topics from './components/Topics/Topics';
import Menu from './components/menu';
import ShowTopic from './components/Topics/showTopic';
import ShowTutorial from './components/Tutorials/showTutorial';
import PostNewTutorial from './components/Tutorials/postNewTutorial';
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
    this.setState({ loading: false, authed: true, username: JSON.parse(localStorage.getItem('login')).username }) :
    this.setState({ loading: false })
  }  

  render() {
    if (this.state.loading) return null;
    return (
      <BrowserRouter>
        <div>
          <Menu authed={this.state.authed} username={this.state.username} />
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/topics' component={Topics} />
          <Route exact path='/topics/:id' component={ShowTopic} />
          <Route exact path='/tutorials/:id' component={ShowTutorial} />
          <Route path='/tutorials/post' render={(props) => (<PostNewTutorial {...props} authed={this.state.authed} />)}  />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/404' component={Error} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
