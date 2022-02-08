import React from 'react'
import HeaderProfile from '../components/HeaderProfile'
import MyTweets from '../components/MyTweets'
import Favorites from '../components/Favorites'

const Profile = () => {
    return (
        <div className="container-tweets">
            <HeaderProfile/>
            <h1>Este es tu perfil</h1>
            <div>
                <MyTweets/> 
                <Favorites/>
            </div>
        </div>
    )
}

export default Profile
