import React from 'react';
import { KeyboardBackspace, Event } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Aside = ({src,userName,hideName}) => {
    return(
        <div className="aside">
            <aside>
                <div className="aside-avatar">
                    <img src={src}></img>
                </div>
                <div className="aside-name">
                    <div >
                        <Link to="">{userName}</Link>
                        <div><span>{hideName}</span></div>
                    </div>
                    
                </div>
            </aside>
            <div className="aside__span">
                <span >Following</span>
            </div>
        </div>
    )
}
const Follow = () => {
    return (
        <div className="main">
            <div className="follow">
                <div className="follow-top">
                    <div className="follow__topL">
                        <KeyboardBackspace className="pr-icon"></KeyboardBackspace>
                    </div>
                    <div>
                        <span className="pr-uName">Me</span>
                        <span className="pr-count">@Me12345</span>
                    </div>
                </div>
                <div className='follow-main'>
                    <Link to={""}><span>Followers</span></Link>  
                    <Link to={""}><span>Following</span></Link>  
                </div>
            </div>
            <Aside
            src="../lisa.jpg"
            userName="freeCode"
            hideName="@freeCode" />
        </div>
    );
};

export default Follow;