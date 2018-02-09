import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Menu from './components/menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <div>
    <Menu />
    <Route exact path='/' component={Home} />
    <Route exact path ='/topics' component={Topics} />
  </div>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
