import React , { useState }from 'react'
import {AppContext , useAppContext} from "../context/AppContext";

const AddTweet = () => {

    const { tweetFromApp, handleChange, sendTweet, tweet, setTextLength, textLength} = useAppContext();

    const [progress, setProgress] = useState(0);

    //const [textLength, setTextLength] = useState("0");

    //setTextLength = () => {

    //}

    return (
        <div className="send-tweet">
            <form action="">
                <textarea 
                id="tweet-text"
                value={tweetFromApp.tweet} 
                name="tweet" 
                id="" 
                maxLength="200"
                placeholder="What's happening?"
                onChange={handleChange}></textarea>
                <div className="progressbar">
                    <span>progressbar</span>
                    <div className="characters-used">
                        <p className="izq">{textLength}</p> 
                        <p className="der">200</p>
                    </div>
                </div>
                <button className="post" onClick={sendTweet}>POST</button>
            </form>
        </div>
    )
}

export default AddTweet
