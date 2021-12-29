import { Search } from '@material-ui/icons';
import React from 'react';
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
                <span >Follow</span>
            </div>
        </div>
    )
}

const AsideBot = () => {
    return(
        <div className="asideBot">
            <span>Trending in VietNam</span>
            <p>Telegram</p>
            <span>521k Tweet</span>
        </div>
    )
}
const RightMain = () => {
    return (
        <div className="right">
            <div className="right-top">
            </div>
            <div className="right__position">
                <div className="right-main">
                    <h2>You might like</h2>
                    <Aside 
                    src="../lisa.jpg"
                    userName="freeCode"
                    hideName="@freeCode"
                    ></Aside>
                    <Aside 
                    src="../lisa.jpg"
                    userName="freeCode"
                    hideName="@freeCode"
                    ></Aside>
                    <Aside 
                    src="../lisa.jpg"
                    userName="freeCode"
                    hideName="@freeCode"
                    ></Aside>
                </div>
                <div className="right-main">
                    <h2>Trends for you</h2>
                    <AsideBot></AsideBot>
                    <AsideBot></AsideBot>
                    <AsideBot></AsideBot>
                    <AsideBot></AsideBot>
                    <AsideBot></AsideBot>
                    
                </div>
            </div>
        </div>
    );
};

export default RightMain;