import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';

import {data} from './util/data'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './util/bootstrap.css';
import './index.css';
import movies from './reducers/index';
import {addMovies} from './actions';

const store=createStore(movies);
// store.dispatch(addMovies(data));
// console.log(store.getState());
// console.log(store.getState())
// console.log(store)
// store.dispatch({
//   type:"ADD_MOVIES",
//   movies
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
