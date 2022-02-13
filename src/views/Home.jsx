import React from 'react'
import Login from "./Login";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const Home = () => {

    const { user } = useAppContext();

    return (
        <div>
            {user?.displayName ? <Navigate to="/Tweets" /> : <Login />}
        </div>
    )
}

export default Home
