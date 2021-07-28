import React , { useEffect, useState } from 'react';
import "./Feed.css"
import InputOption from '../InputOption/InputOption';
import { Create ,Image , CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';
import Post from '../Post/Post';
import { db } from '../../configurations/firebase';

function Feed() {
    const [input , setIput] = useState("");
    const [posts,setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
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
            name : "Ayoub Lamine Sadiki",
            description : "Open Minded Software Enginner",
            message :""
        })
    }

    
    return (
        <div className="feed">
            {/* Input Container */}
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form >
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
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
            {posts.map((post) => (
                <Post />
            ))}
            <Post name="Ayoub Lamine Sadiki" description="Software Engineer" message="hello World" photoUrl="" />

            
        </div>
    )
}

export default Feed
