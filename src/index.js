import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ProtectedContext from './components/context/Protected';
import {BrowserRouter} from "react-router-dom";
import Home from './views/Home';
import Index from "./views/Index"
import Navigation from './components/Navigation';
import Login from './components/Login';
import Main from './components/Main'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        {/*<Navigation />
        <Main />
      <Navigation />*/}
      <Main/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
