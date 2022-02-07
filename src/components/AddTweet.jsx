import React from 'react'
import {AppContext , useAppContext} from "../context/AppContext";

const AddTweet = () => {

    const { tweetFromApp, handleChange, sendTweet } = useAppContext();

    return (
        <div>
            <form action="">
                <textarea 
                value={tweetFromApp.tweet} 
                name="tweet" 
                id="" 
                cols="30" 
                rows="10" 
                placeholder="escribe aquí tu tweet"
                onChange={handleChange}></textarea>
                <button onClick={sendTweet}>Enviar tweet</button>
            </form>
        </div>
    )
}

export default AddTweet
