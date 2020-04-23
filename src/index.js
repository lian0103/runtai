import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './media/css/reset.scss'
import './media/css/global.scss';
import Header from './components/Header';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link ,useLocation } from "react-router-dom";
import routesConfig from './config/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            {routesConfig.map(item => {
              return (
                <Route key={item.path} exact path={item.path}>
                  {item.component}
                </Route>
              )
            })}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <App />
  , document.getElementById('root')
);

