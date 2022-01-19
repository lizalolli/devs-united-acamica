import React from 'react'
import { Link } from "react-router-dom";
import {firestore , storage , auth , loginConGoogle , logout} from '../firebase';

const Navigation = () => {
    return (
        <div className="app-nav">
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/App">Tweets</Link>
            </li>
            <li>
              <button onClick={logout}>Log out</button>
            </li>
          </ul>
        </nav>
      </div>
      );     
}

export default Navigation
