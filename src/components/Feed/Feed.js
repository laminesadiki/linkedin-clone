import React from 'react';
import "./Feed.css"
import InputOption from '../InputOption/InputOption';
import { Create ,Image , CalendarViewDay, EventNote, Subscriptions } from '@material-ui/icons';

function Feed() {
    return (
        <div className="feed">
            {/* Input Container */}
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form >
                        <input type="text" />
                        <button type="submit">Send</button>
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

            
        </div>
    )
}

export default Feed
