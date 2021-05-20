import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './index.css';
import App from './App';
import Login from './components/login';
import StreamPreview from './components/live/stream-prev';
import Settings from './components/Settings';

import Dashboard from './components/creator/Dashboard/index';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/live/:stream_id" component={StreamPreview}/>
        <Route path="/settings" component={Settings} />

        <Route path="/creator/dashboard" component={Dashboard} />

        <Route path="/channel/:channel_name">
          <div>
            channel
          </div>
        </Route>
        <Route path="/category/:category_name">
          <div>
            category
          </div>
        </Route>


        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

