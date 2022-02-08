import React from 'react'
import {AppContext , useAppContext} from "../context/AppContext";

const TweetsList = () => {

    const { tweets, deleteTweet, showLike, user } = useAppContext();

    return (
        <div>
            {tweets.map((tweet) => {
                return(
                    <div className="tweet-list-item" key={tweet.id}>
                        <div className="username">
                            <h4 className="tweet-autor">{tweet.user}</h4>
                            <span onClick={() => deleteTweet(tweet.id)} className="delete">{user.uid === tweet.uid && (<img src="./images/delete.svg" alt=""/> )}</span>
                        </div>
                        <p>{tweet.tweet}
                        </p>
                        {/*<p className="tweet-autor">{tweet.email}</p>*/}
                        {showLike(tweet.likedBy, tweet.id, tweet.likes)}
                    </div>
                )
            })}
        </div>
    )
}

export default TweetsList
