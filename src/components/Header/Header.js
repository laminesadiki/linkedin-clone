import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HeaderOption from '../HeaderOption/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/counter/userSlice';
import { auth } from '../../configurations/firebase';

function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image0.flaticon.com/icons/svg/174/174857.svg" alt="likedin image" />
                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/> 
                <HeaderOption avatar={true} title="me"
                onClick={logoutOfApp}
                />

            </div>

        </div>
    )
}

export default Header
