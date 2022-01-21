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
            uid:doc.data().uid,
            likedBy: doc.data().likedBy
          };
        });
      setTweets(tweets);  
      });

      auth.onAuthStateChanged((user) => {
        setUser(user);
        //console.log(user);
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
      user:user.displayName,
      likedBy: []
      };
      setTweetFromApp(newTweet);
    };

    //envía el tweet
    const sendTweet = (e) => {
      e.preventDefault();
      /*let enviarTweet = firestore.collection("tweetsColection").add(tweetFromApp);
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
      })*/
      firestore.collection("tweetsColection").add(tweetFromApp);
    }

    //borra el tweet
    const deleteTweet = (id) => {
      firestore.doc(`tweetsColection/${id}`)
     .delete()
     .then(()=> console.log("borrado exitosamente"))
     .catch (()=> console.log("algo salio mal"))
    }

    //da like al tweet
    const likeTweet = (id, likes, uid, likedBy) => {  
      /*if (!likes) likes= 0;
      firestore.doc(`tweetsColection/${id}`).update({likes: likes+1});*/
      let newLikedBy = [...likedBy, uid];
      firestore.doc(`tweetsColection/${id}`).update({likedBy: newLikedBy});
    }

    //quita el like al tweet
    const dislikeTweet = (id, uid, likedBy) => {
      let newNewLikedBy = likedBy.filter((userUid) => uid !== userUid);
      firestore.doc(`tweetsColection/${id}`).update({ likedBy: newNewLikedBy });
    }

    //mostrar like
    const showLike = (likersList, id, likes) => {
      if (likersList && user){
        const youLiked = likersList.findIndex((liker) => user.uid === liker);
        //si la persona no le ha dado like
        if (youLiked < 0){
          return (
            <>
            <span onClick={() => likeTweet(id, likes, user.uid, likersList)} className="likes">
              <span>like</span>
              <span>{likersList.length}</span>
            </span>
            </>
          );
        } else {
        //si la persona le dio like
          return (
            <>
              <span onClick={() => dislikeTweet(id, user.uid, likersList)} className="likes">
                <span>dislike</span>
                <span>{likersList.length}</span>
              </span>
            </>
          );
        }
      } else {
        return(
          <>
            <span onClick={() => likeTweet(id, likes, user.id, likersList)} className="likes">
              <span>  <strong>not loged</strong></span>
              <span>{likes ? likes : 0}</span>
            </span>
          </>
        );
      }
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
            {/*<span className="likes" onClick={ () => likeTweet(tweet.id, tweet.likes)}>likes</span>*/}
            {/*<span>{tweet.likes ? tweet.likes : 0}</span>*/}
            {showLike(tweet.likedBy, tweet.id, tweet.likes)}
          </div>
        )
      })}
    </div>
  );
}

export default App;
