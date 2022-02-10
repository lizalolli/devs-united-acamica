import React from 'react'
import { firestore, storage, auth, loginConGoogle, logout } from '../firebase';
import { useAppContext } from "../context/AppContext";
import { useNavigate } from 'react-router-dom';


const HeaderProfile = () => {

    const { user, setUser } = useAppContext();

        let navigate = useNavigate();
        function handleClick() {
          navigate('/Tweets');
        };

    return (
        <div className="app-nav">
            <div className="container-tweets-nav">
                <nav className="nav-profile">
                    <ul>
                        <li>
                            <button className="username-back" onClick={handleClick}><img src="./images/back.svg"/>{user.displayName}</button>
                        </li>
                        <li>
                            {/*<button className="logout" onClick={logout}>Logout<img src="./images/logout.svg"/></button>*/}
                            <button className="logout" onClick={logout}>Logout<img src="./images/logout.svg"/></button>
                            <p id="demo"></p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderProfile




