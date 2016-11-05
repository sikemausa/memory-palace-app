import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import { BrowserRouter, Match } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/reducers.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import * as actions from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const Root = () => {
  return(
    <Provider store={ store }>
      <BrowserRouter>
       <div>
          <Match exactly pattern="/" component={App} />
       </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

store.dispatch(actions.startListeningToAuth());
