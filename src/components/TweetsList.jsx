import React from 'react'
import {AppContext , useAppContext} from "../context/AppContext";

const TweetsList = () => {

    const { tweets, deleteTweet, showLike } = useAppContext();

    return (
        <div>
            {tweets.map((tweet) => {
                return(
                    <div key={tweet.id}>
                        <h3>{tweet.tweet}
                        <span onClick={() => deleteTweet(tweet.id)} className="delete"><img src="./images/delete.svg" alt=""/></span>
                        </h3>
                        <p className="tweet-autor">por: {tweet.user}</p>
                        <p className="tweet-autor">{tweet.email}</p>
                        {showLike(tweet.likedBy, tweet.id, tweet.likes)}
                    </div>
                )
            })}
        </div>
    )
}

export default TweetsList
