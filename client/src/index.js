import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Register from './components/Register/register';
import Topics from './components/Topics/Topics';
import Menu from './components/menu';
import ShowTopic from './components/Topics/showTopic';
import ShowTutorial from './components/Tutorials/showTutorial';
import NewComment from './components/Comments/newComment';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <div>
    <Menu />
    <Route exact path='/' component={Home} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/topics' component={Topics} />
    <Route exact path='/topics/:id' component={ShowTopic} />
    <Route exact path='/tutorials/:id' component={ShowTutorial} />
    <Route exact path='/tutorials/:id/comments/new' component={NewComment} />
  </div>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
