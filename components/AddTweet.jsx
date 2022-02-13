import React from 'react'
import { useAppContext} from "../context/AppContext";
import ProgressBar from 'react-bootstrap/ProgressBar';

const AddTweet = () => {

    const { tweetFromApp, handleChange, sendTweet, textLength} = useAppContext();

    return (
        <div className="send-tweet">
            <form action="">
                <textarea 
                id="tweet-text"
                value={tweetFromApp.tweet} 
                name="tweet" 
                id="" 
                maxLength="200"
                countlimit={200}
                placeholder="What's happening?"
                onChange={handleChange}></textarea>
                <div className="progressbar">
                    <ProgressBar now={textLength} min={0} max={200}/>
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
