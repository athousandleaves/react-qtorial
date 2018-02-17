import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Topics from './components/Topics/Topics';
import Menu from './components/menu';
import ShowTopic from './components/Topics/showTopic';
import ShowTutorial from './components/Tutorials/showTutorial';
import registerServiceWorker from './registerServiceWorker';


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authed: false, loading: true };
  }

  componentDidMount() {
    //determine if token is valid
    localStorage.getItem('login') ?
    this.setState({ loading: false, authed: true }) :
    this.setState({ loading: false })
  }  

  render() {
    if (this.state.loading) return null;
    return (
      <BrowserRouter>
        <div>
          <Menu authed={this.state.authed}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/topics' component={Topics} />
          <Route exact path='/topics/:id' component={ShowTopic} />
          <Route exact path='/tutorials/:id' component={ShowTutorial} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
