import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Menu from './components/menu';
import ShowTopic from './components/Topics/showTopic';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <div>
    <Menu />
    <Route exact path='/' component={Home} />
    <Route exact path ='/topics' component={Topics} />
    <Route path='/topics/:id' component={ShowTopic} />
  </div>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
