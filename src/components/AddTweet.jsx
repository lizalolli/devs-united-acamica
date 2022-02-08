import React from 'react'
import {AppContext , useAppContext} from "../context/AppContext";

const AddTweet = () => {

    const { tweetFromApp, handleChange, sendTweet } = useAppContext();

    return (
        <div className="send-tweet">
            <form action="">
                <textarea 
                value={tweetFromApp.tweet} 
                name="tweet" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="What's happening?"
                onChange={handleChange}></textarea>
                <button onClick={sendTweet}>POST</button>
            </form>
            <div className="progressbar">ola</div>
        </div>
    )
}

export default AddTweet
