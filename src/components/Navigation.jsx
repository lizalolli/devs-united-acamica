import React from 'react'
import { Link } from "react-router-dom";
import { firestore, storage, auth, loginConGoogle, logout } from '../firebase';
import { useAppContext } from "../context/AppContext";
import Logout from './Logout';

const Navigation = () => {

  return (
    <div className="app-nav">
      <nav>
        <ul>
          <li>
            <Link to="/Profile">Perfil</Link>
          </li>
          <li>
            <Link to="/Tweets">Home</Link>
          </li>
          <li>
            <Logout/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation
