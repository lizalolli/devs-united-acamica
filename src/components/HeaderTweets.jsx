import React from 'react'
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const HeaderTweets = () => {

  const { user, tweet } = useAppContext();

  return (
    <div className="app-nav">
        <div className="container-tweets-nav">
          <nav className="main-nav" > 
            <ul>
              <li>
                <Link to="/Profile"><img className="user-img" src={user.photoURL}/></Link>
              </li>
              <li>
                <Link to="/Tweets"><img src="./images/logosmall.svg" alt=""/></Link>
              </li>
              <li>
                <img src="./images/titlesmall.svg" alt=""/>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );
}

export default HeaderTweets
