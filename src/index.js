import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './media/css/reset.scss'
import './media/css/global.scss';
import Header from './components/Header';
import {MainContent , withRouterConfig } from './config/router';

const App = (props) => {
  console.log(props.data);

  return (
    <>
      <div className="App" >
          <Header />

          <MainContent />

      </div >
    </>
  )
}

const WrappedApp = withRouterConfig(App)

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

