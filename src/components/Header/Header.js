import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from '../HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image0.flaticon.com/icons/svg/174/174857.svg" alt="likedin image" />
                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/> 
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFXFQiZiLk7CA/profile-displayphoto-shrink_400_400/0/1592704404040?e=1632960000&v=beta&t=G3LA5D85_AvWfQKV-d-w1SJ2x4yj2lhwm6iSg4T4BoQ" title="me" />

            </div>

        </div>
    )
}

export default Header
