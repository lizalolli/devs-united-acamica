import React from 'react';
import { createContext, useContext } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ProtectedContext from './components/context/Protected';
import {BrowserRouter} from "react-router-dom";
import Home from './views/Home';
import HeaderTweets from './components/HeaderTweets';
import Login from './views/Login';
import Main from './components/Main'
import {AppContext} from "./context/AppContext";
import AppProvider from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
