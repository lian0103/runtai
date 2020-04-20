import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './media/css/reset.scss'
import './media/css/global.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                <Route exact path={item.path}>
                  {item.component}
                </Route>
              )
            })}
          </Switch>
        </Router>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

