import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './views/Login.css';
import './views/Profile.css';
import './views/Tweets.css';
import './views/Home.css';
import './components/HeaderTweets.css';
import './components/HeaderProfile.css';

import Main from './components/Main'
import Home from './views/Home'
 
function App() {
  
    return (
    <div className="App">
      <Main/>
    </div>
  );

}

export default App;
