import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './media/css/reset.scss'
import './media/css/global.scss';
import Header from './components/Header';
import CarouselBlock from './components/CarouselBlock';
import InfoBlock from './components/InfoBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CarouselBlock />
        <InfoBlock />
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

