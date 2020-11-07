import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LiveTvIcon from '@material-ui/icons/LiveTv';



function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                {/* all header icons here */}
                <div className="header__icon header__icon--active">
                <HomeIcon/>
                <p> Home </p>
                </div>
                <div className="header__icon">
                <FlashOnIcon />
                <p> Trending </p>

                </div>
                <div className="header__icon">
                <LiveTvIcon />
                <p> Verified </p>

                </div>
                <div className="header__icon">
                <VideoLibraryIcon />
                <p> Collections </p>

                </div>
                <div className="header__icon">
                <SearchIcon />
                <p> Search </p>

                </div>
                <div className="header__icon">
                <PermIdentityIcon /> 
                <p> Account </p>

                </div>
            </div>   
                {/* Hulu Logo */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png" alt=""></img>
                
        </div>
    )
}

export default Header
