import React , { useState }from 'react'
import {AppContext , useAppContext} from "../context/AppContext";

const AddTweet = () => {

    const { tweetFromApp, handleChange, sendTweet } = useAppContext();

    const [progress, setProgress] = useState(0);

    return (
        <div className="send-tweet">
            <form action="">
                <textarea 
                value={tweetFromApp.tweet} 
                name="tweet" 
                id="" 
                maxLength="200"
                placeholder="What's happening?"
                onChange={handleChange}></textarea>
                <div className="progressbar">
                    <span>progressbar</span>
                    <div className="characters-used">
                        <p className="izq">cantidad de letras usadas</p> 
                        <p className="der">200 max.</p>
                    </div>
                </div>
                <button className="post" onClick={sendTweet}>POST</button>
            </form>
        </div>
    )
}

export default AddTweet
