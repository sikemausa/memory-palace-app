import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Menu from './components/Menu';
import { BrowserRouter, Match } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import initialState from './initialState';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);

const Root = () => {
  return(
    <Provider store={ store }>
      <BrowserRouter>
       <div>
          <Match exactly pattern="/" component={App} />
          <Match exactly pattern="/menu" component={Menu} />
       </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
