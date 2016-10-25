import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import { BrowserRouter, Match, Miss } from 'react-router';

const Root = () => {
  return(
    <BrowserRouter>
     <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/menu" component={Menu} />
     </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
