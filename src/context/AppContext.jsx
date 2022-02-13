import React, { createContext, useContext, useState, useEffect, fragment } from "react";
import { firestore, auth} from "../firebase";
import MyTweets from '../components/MyTweets'
import Favorites from '../components/Favorites'

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {

  const [Active, setActive] = useState("false");

  const [textLength, setTextLength] = useState("0");

  //para los colores hacer un estado q cuando sea true cambie el color según el que se escogió (switch case) cambiando la clase
  //hay que crear un componente casi igual al login
  //const [color, setColor] = useState(false)


  const handleToggle = () => {
    setActive(!Active);
  };

  const [tweets, setTweets] = useState([]);

  const [tweetFromApp, setTweetFromApp] = useState({
    tweet: "",
    user: "",
    uid: "",
    mail: "",
    img:""
  });

  const [user, setUser] = useState(null);

  const [img, setImg] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((img) => {
      setImg(img);
    });
  }, []);

  //Date to timestamp
  

  useEffect(() => {
    //firestore
    const desuscbribir = firestore
      .collection('tweetsColection').orderBy("dateCreation","desc")
      .onSnapshot((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            tweet: doc.data().tweet,
            user: doc.data().user,
            id: doc.id,
            likes: doc.data().likes,
            email: doc.data().email,
            uid: doc.data().uid,
            likedBy: doc.data().likedBy,
            img: doc.data().img,
            dateCreation: doc.data().dateCreation,
          };
          
        });
        setTweets(tweets);
      });

    return () => desuscbribir();
  }, []);

  const handleChange = (e) => {
    let newTweet = {
      dateCreation: new Date(),//user.gettTimestamp().toDate().toString(),
      tweet: e.target.value,
      uid: user.uid,
      email: user.email,
      user: user.displayName,
      likedBy: [],
      img:user.photoURL
    };
    setTweetFromApp(newTweet);
    setTextLength(e.target.value.length);
  };

  //envía el tweet
  const sendTweet = (e) => {
    e.preventDefault();
    firestore.collection("tweetsColection").add(tweetFromApp);
    setTweetFromApp({ ...tweetFromApp, tweet: "" });
  }

  //borra el tweet
  const deleteTweet = (id) => {
    var answer = window.confirm("Estás a punto de eliminar este tweet, ¿deseas continuar?");
    if (answer) {
    firestore.doc(`tweetsColection/${id}`)
      .delete()
      .then(() => console.log("borrado exitosamente"))
      .catch(() => console.log("algo salio mal"))
    }
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
        showLike,
        Active,
        setActive,
        handleToggle,
        img,
        setImg,
        textLength,
        setTextLength
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;