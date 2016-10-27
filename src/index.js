import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Navigation from './components/Navigation';
import Menu from './components/Menu';
import { BrowserRouter, Match, Miss } from 'react-router';
import { createStore } from 'redux';
import reducers from './reducers/reducers.js';
import { Provider } from 'react-redux';


const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => {
  return(
    <Provider store={ store }>
      <BrowserRouter>
       <div>
          <Match exactly pattern="/" component={App} />
          <Match exactly pattern="/menu" component={Menu} />
          {/* <Match exactly pattern="/create-palace" component={CreatePalace} /> */}
          {/* <Match exactly pattern="/palace/:id" component={Palace} /> */}
       </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
