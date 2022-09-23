import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Provider store={myStore}>
      <App />
    </Provider>
  </Router>
);
