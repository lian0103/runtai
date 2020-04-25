import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './media/css/reset.scss'
import './media/css/global.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import {MainContent , withRouterConfig } from './config/router';

const App = (props) => {
  console.log(props.data);

  return (
    <>
      <div className="App" >
          <Header />

          <MainContent />

          <Footer/>

      </div >
    </>
  )
}

const WrappedApp = withRouterConfig(App)

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

