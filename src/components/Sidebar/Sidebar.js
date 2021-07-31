import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser);
    
    
    const recentItem = (topics) => (
        topics.map(topic => (
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>{topic}</p>
            </div>
        ))
    )
    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQG-gAsbAhiYNw/profile-displaybackgroundimage-shrink_200_800/0/1578276416698?e=1632960000&v=beta&t=sGQFFyD-84PaC6p3QQuULLwQ4Jih9sCShAlSXIFnAhY" alt="backgroud image" />
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                {/* <h4>Open Minded Software Engineer</h4> */}
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <div className="sidebar__statNumber">185</div>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <div className="sidebar__statNumber">3,240</div>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem(["programming","developer","javascript","design"])}  
            </div> 
        </div>
    )
}
export default Sidebar;
