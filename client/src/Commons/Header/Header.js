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
import Popover from '@material-ui/core/Popover';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {user, actionUser} = useUser();
    const navigate = useNavigate();
    // 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    //   
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    useEffect(() => {
        actionUser.getUsers();
        console.log('user',user)
    },[])
    // 
    const handleLogout = () => {
        localStorage.removeItem('user');
        try {
            navigate("/login");
            window.location.reload()
        } catch (error) {
            
        }
    }
    return (
        <header>
            
            <div className="header">
                <section>
                    <TwitterIcon className="header__twitterIcon" />

                    <Link to="/"><HeaderOption active Icon={HomeIcon} text="Home" /></Link>
                    <Link to=""><HeaderOption Icon={SearchIcon} text="Explore" /></Link>
                    <HeaderOption Icon={NotificationsNoneIcon} text="Notifications" />
                    <HeaderOption Icon={MailOutlineIcon} text="Messages" />
                    <HeaderOption Icon={BookmarkBorderIcon} text="Bookmarks" />
                    <HeaderOption Icon={ListAltIcon} text="Lists" />
                    <Link to="/profile"><HeaderOption Icon={PermIdentityIcon} text="Profile" /></Link>
                    <HeaderOption Icon={MoreHorizIcon} text="More" />
                    <div  className="header--iconScreen"><HeaderOption Icon={AcUnit} text="" /></div>
                    <Button variant="outlined" className="header-button">
                        <Link to="">Tweet</Link>
                    </Button>
                </section>
                
            </div>
            <div className="headerUser">
                <div className="headerUser__aside">
                    <aside onClick={handleClick}>
                        <div className="aside-avatar">
                            <img src="../lisa.jpg"></img>
                        </div>
                        <div className="aside-name" >
                            <b>Me</b>
                            <div><span>#me</span></div>
                        </div>
                        
                    </aside>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <div className='icon__logout' onClick={handleLogout}>
                            <strong>Log out</strong>
                        </div>
                        
                    </Popover>
                </div>
            </div>
        </header>
      
    );
};

export default Header;