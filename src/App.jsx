import {useEffect , useState, useRef, fragment} from 'react';
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Index from './views/Index'
import {firestore , storage , auth , loginConGoogle , logout} from './firebase';
import React from "react";

function App() {

  const [tweets,setTweets] = useState ([
  ]);
 
  const [tweetFromApp, setTweetFromApp] = useState ({
    tweet:"",
    user:"",
    uid: "",
    mail:"",
  });

  const [user , setUser] = useState(null);
  
    useEffect(() => {
      //firestore
      const desuscbribir = firestore
      .collection('tweetsColection')
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            user: doc.data().user,
            id:doc.id,
            likes:doc.data().likes,
            email: doc.data().email,
            uid:doc.data().uid
          };
        });
      setTweets(tweets);  
      });
      auth.onAuthStateChanged((user) => {
        setUser(user);
        console.log(user);
      });
      return () => desuscbribir();
     },[]);

    const handleChange = (e) => {
      let newTweet ={
      //  ...tweetFromApp,
      //  [e.target.name]: e.target.value
      tweet: e.target.value,
      uid: user.uid,
      email: user.email,
      user:user.displayName
      };
      setTweetFromApp(newTweet);
    };

    //envía el tweet
    const sendTweet = (e) => {
      e.preventDefault();
      let enviarTweet = firestore.collection("tweetsColection").add(tweetFromApp);
      let solicitarDocumento = enviarTweet.then((docRef) => {
        return docRef.get(); //devuelve una promesa
      });
      solicitarDocumento.then((doc) => {
        let newTweet = {
          tweet: doc.data().tweet,
          user: doc.data().user,
          id:doc.id
        }
        setTweets([newTweet,...tweets])
      })
    }

    //borra el tweet
    const deleteTweet = (id) => {
      firestore.doc(`tweetsColection/${id}`)
     .delete()
     .then(()=> console.log("borrado exitosamente"))
     .catch (()=> console.log("algo salio mal"))
    }

    //da like al tweet
    const likeTweet = (id, likes) => {  
      if (!likes) likes= 0;
      firestore.doc(`tweetsColection/${id}`).update({likes: likes+1});
    }

    return (
    <div className="App">
      <h1>Dev United</h1>
      {user ? (
        <>
          <div className="user-profile">
            <img className="user-profile-pic" src={user.photoURL} alt=""/>
            <p>¡Hola {user.displayName}!</p>
          </div>
          </>  
      ) : (
        <>
        </>
      )}
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

      {tweets.map((tweet) => {
        return(
          <div key={tweet.id}>
            <h3>{tweet.tweet}
            <span onClick={() => deleteTweet(tweet.id)} className="delete">X</span>
            </h3>
            <p className="tweet-autor">por: {tweet.user}</p>
            <p className="tweet-autor">{tweet.email}</p>
            <span className="likes" onClick={ () => likeTweet(tweet.id, tweet.likes)}>likes</span>
            <span>{tweet.likes ? tweet.likes : 0}</span>
          </div>
        )
      })}
    </div>
  );
}

export default App;
