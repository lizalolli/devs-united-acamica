import React, { createContext, useContext, useState, useEffect } from "react";
import { firestore, auth } from "../firebase";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {

  const [tweets, setTweets] = useState([]);

  const [tweetFromApp, setTweetFromApp] = useState({
    tweet: "",
    user: "",
    uid: "",
    mail: "",
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  useEffect(() => {
    //firestore
    const desuscbribir = firestore
      .collection('tweetsColection')
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            user: doc.data().user,
            id: doc.id,
            likes: doc.data().likes,
            email: doc.data().email,
            uid: doc.data().uid,
            likedBy: doc.data().likedBy
          };
        });
        setTweets(tweets);
      });

    return () => desuscbribir();
  }, []);

  const handleChange = (e) => {
    let newTweet = {
      //  ...tweetFromApp,
      //  [e.target.name]: e.target.value
      tweet: e.target.value,
      uid: user.uid,
      email: user.email,
      user: user.displayName,
      likedBy: []
    };
    setTweetFromApp(newTweet);
  };

  //envía el tweet
  const sendTweet = (e) => {
    e.preventDefault();
    firestore.collection("tweetsColection").add(tweetFromApp);
  }

  //borra el tweet
  const deleteTweet = (id) => {
    firestore.doc(`tweetsColection/${id}`)
      .delete()
      .then(() => console.log("borrado exitosamente"))
      .catch(() => console.log("algo salio mal"))
  }

  //da like al tweet
  const likeTweet = (id, likes, uid, likedBy) => {
    let newLikedBy = [...likedBy, uid];
    firestore.doc(`tweetsColection/${id}`).update({ likedBy: newLikedBy });
  }

  //quita el like al tweet
  const dislikeTweet = (id, uid, likedBy) => {
    let newNewLikedBy = likedBy.filter((userUid) => uid !== userUid);
    firestore.doc(`tweetsColection/${id}`).update({ likedBy: newNewLikedBy });
  }

  //mostrar like
  const showLike = (likersList, id, likes) => {
    if (likersList && user) {
      const youLiked = likersList.findIndex((liker) => user.uid === liker);
      //si la persona no le ha dado like
      if (youLiked < 0) {
        return (
          <>
            <span onClick={() => likeTweet(id, likes, user.uid, likersList)} className="likes">
              <img src="./images/likeoff.svg" alt=""/>
              <span>{likersList.length}</span>
            </span>
          </>
        );
      } else {
        //si la persona le dio like
        return (
          <>
            <span onClick={() => dislikeTweet(id, user.uid, likersList)} className="likes">
              <img className="like" src="./images/likeon.svg" alt=""/>
              <span className="likeon">{likersList.length}</span>
            </span>
          </>
        );
      }
    } else {
      return (
        <>
          <span onClick={() => likeTweet(id, likes, user.id, likersList)} className="likes">
            <img className="like" src="./images/likeoff.svg" alt=""/>
            <span>{likes ? likes : 0}</span>
          </span>
        </>
      );
    }
  }

  return (
    <AppContext.Provider
      value={{
        tweets,
        setTweets,
        tweetFromApp,
        setTweetFromApp,
        user,
        setUser,
        handleChange,
        sendTweet,
        deleteTweet,
        likeTweet,
        dislikeTweet,
        showLike
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;