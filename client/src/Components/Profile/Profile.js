import { KeyboardBackspace, Event } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import HomePost from '../Main/HomePost'

const Profile = () => {
    
    return (
        <div className="main">
            <div className="profile">
                <div className="profile-top">
                    <div className="profile__topL">
                        <KeyboardBackspace className="pr-icon"></KeyboardBackspace>
                    </div>
                    <div>
                        <span className="pr-uName">Me</span>
                        <span className="pr-count">1 Tweet</span>
                    </div>
                </div>
                <div className="profile-main">
                    <div className="profile-mainTop">
                        <div className="profile-mainTop__div"></div>
                        <div className="profile-mainTop__img"></div>
                    </div>
                    <div className="profile-mainBot">
                        <div className="profile-mainBot__avatar">
                            <img src="../lisa.jpg"></img>
                            <div>
                                <Link to="">
                                    <span>Edit profile</span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <span className="pr-uName">Me</span>
                        </div>
                        <div>
                            <span className="pr-count">@Me12345</span>
                        </div>
                        <div className='profile-mainBot__event'>
                            <Event></Event>
                            <span>Joined June 2021</span>
                        </div>
                        <div className='profile-mainBot__follow' >
                            <span><Link to={""}>{2} <b>Following</b></Link></span>
                            <span><Link to={""}>{0} <b>Followers</b></Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <HomePost></HomePost>
        </div>
    );
};

export default Profile;