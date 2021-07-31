import React , { useEffect, useState } from 'react';
import "./Feed.css"
import InputOption from '../InputOption/InputOption';
import { Create ,Image , CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from '../Post/Post';
import { db } from '../../configurations/firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input , setInput] = useState("");
    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts")
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    },[]);

    const sendPost = event => {
        event.preventDefault(); // To prevent refreshing when clicking on send button

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    }

    
    return (
        <div className="feed">
            {/* Input Container */}
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form >
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                    <div className="feed__inputOptions">
                       <InputOption Icon={Image} title="Photo" color="#70b5f9"/> 
                       <InputOption Icon={Subscriptions} title="Video" color="#7fc15e"/> 
                       <InputOption Icon={EventNote} title="Event" color="#e7a33e"/> 
                       <InputOption Icon={CalendarViewDay} title="Write article" color="#fc9295"/> 
                    </div>
                </div>
            </div>
            {/* Posts */}
            <FlipMove>
                {posts.map(({id, data: { name, description, message, photoUrl }}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
            {/* <Post name="Ayoub Lamine Sadiki" description="Software Engineer" message="hello World" photoUrl="" /> */}

            
        </div>
    )
}

export default Feed
