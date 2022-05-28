import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {data} from './util/data'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './util/bootstrap.css';
import './index.css';
import rootReducer from './reducers/index';
// function logger(obj, next, action)
// const logger = function({dispatch, getState}){
//   // this obj will contain two properties one is dispatch property and the other is getState() property
//   return function(next){
//     return function(action){
//       // midleware code
//       console.log("ACTION_TYPE : ",action.type);
//       next(action);
//     }
//   }
// }
const logger = ({dispatch, getState}) => (next) => (action) =>{
  if(typeof action!=='function')console.log("ACTION_TYPE : ",action.type);
  next(action);
}
// const thunk = ({dispatch, getState}) => (next) => (action) =>{
//   if(typeof action==='function'){
//     action(dispatch)
//     return ;
//   }
//   next(action);
// }
const store=createStore(rootReducer, applyMiddleware(logger, thunk));
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
