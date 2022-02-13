import React from 'react'
import {AppContext , useAppContext} from "../context/AppContext";
import TweetsList from './TweetsList'

const MyTweets = () => {

    const { tweets, user, deleteTweet, showLike} = useAppContext();
 
    return (
        <div className="container-tweets">
            {tweets.map((tweet) => {
                if (tweet.email === user.email){
                    return(
                        <div className="tweet-list-item tweets-list-img-content" key={tweet.id}>
                            <div className="img-tweet-comment">
                                <img className="user-profile-pic-comment" src={tweet.img} alt=""/>
                            </div>
                            <div className="info-user-container">
                                <div className="username">
                                    <h4 className="tweet-autor">{tweet.user}</h4>
                                    <span onClick={() => deleteTweet(tweet.id)} className="delete">{user.uid === tweet.uid && (<img src="./images/delete.svg" alt=""/> )}</span>
                                </div>
                                <p>{tweet.tweet}</p>
                                {showLike(tweet.likedBy, tweet.id, tweet.likes)}
                            </div>
                        </div>
                    );
                }
            })}
            
        </div>
);
};

export default MyTweets