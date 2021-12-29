import React, { useEffect } from 'react';
import { Link} from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HeaderOption from './HeaderOption';
import { Button } from "@material-ui/core";
import { AccountCircle, AcUnit} from '@material-ui/icons';
import { useUser } from '../../redux/hooks/User';

const Header = () => {
    const {user, actionUser} = useUser();

    useEffect(() => {
        actionUser.getUsers();
        console.log('user',user)
    },[])
    return (
        <header>
            
            <div className="header">
                <section>
                    <TwitterIcon className="header__twitterIcon" />

                    <div className="header--home"><HeaderOption active Icon={HomeIcon} text="Home" /></div>
                    <HeaderOption Icon={SearchIcon} text="Explore" />
                    <HeaderOption Icon={NotificationsNoneIcon} text="Notifications" />
                    <HeaderOption Icon={MailOutlineIcon} text="Messages" />
                    <HeaderOption Icon={BookmarkBorderIcon} text="Bookmarks" />
                    <HeaderOption Icon={ListAltIcon} text="Lists" />
                    <HeaderOption Icon={PermIdentityIcon} text="Profile" />
                    <HeaderOption Icon={MoreHorizIcon} text="More" />
                    <div  className="header--iconScreen"><HeaderOption Icon={AcUnit} text="" /></div>
                    <Button variant="outlined" className="header-button">
                        <Link to="">Tweet</Link>
                    </Button>
                </section>
                
            </div>
            <div className="headerUser">
                <div className="headerUser__aside">
                    <aside>
                        <div className="aside-avatar">
                            <img src="../lisa.jpg"></img>
                        </div>
                        <div className="aside-name">
                            <div >
                                <b>Me</b>
                                <div><span>#me</span></div>
                            </div>
                            
                        </div>
                    </aside>
                    
                </div>
            </div>
        </header>
      
    );
};

export default Header;