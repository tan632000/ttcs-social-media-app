import React from 'react';
import { ChatBubble, Delete, MoreHoriz, Share, ThumbUp} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";

const CommentOption = ({text, Icon}) => {
    return (
        <div>
            <Icon />
            <span>{text}</span>
        </div>
    );
};
const HomePost = ({post}) => {

    console.log('post', post)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    //   
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`);
        setUser(res.data);
        console.log(res);
    };
    fetchUser();
    }, [post.userId]);
    // 
    const likeHandler = () => {
    try {
        axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    };
    // 

    const handleDelete = async() => {
        console.log("absolue",post);
        try{
            await axios.delete(`/posts/${post._id}`, post)
        } catch(err){
            console.log(err)
        }
    }
    // console.log(currentUser);
    return (
        <div className="main-form">
            <div className="main__avatar">
                <Link to={`/profile/${user.username}`} >
                    <img src={currentUser.profilePicture ? PF + currentUser.profilePicture : "../lisa.jpg"} 
                    />
                </Link>
            </div>
            <div className="main-content">
                <div className="main-content-userName">
                    <div>
                        <span className="fw-text"><Link to={`/profile/${currentUser.username}`}> {currentUser.username}</Link></span>
                        <span>@{currentUser.username}</span>
                        <span className="fw-date">{format(post.createdAt)}</span>
                    </div>
                    <div className='icon-morePost'>
                        <MoreHoriz onClick={handleClick} />
                        
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
                            <div className='icon__deletePost'>
                                <span>Delete</span>
                                <span onClick={handleDelete}><Delete /></span>
                            </div>
                            {/* <Typography >The content of the Popover.</Typography> */}
                        </Popover>
                    </div>
                </div>
                <div className="main-content-text">
                    <span>{post?.desc}</span>
                    {post.img ? 
                        <div>
                            <img src={PF + post.img} alt=""></img>
                            {/* <video src="../CNPMN.mp4" playsInline controls></video> */}
                        </div>
                        : (<></>)
                    }
                    
                </div>
                <div className="main-content-button">
                    <div>
                        <span>{like}</span>
                    </div>
                    <div className="main-content__function">
                        <CommentOption Icon={ThumbUp} text="Like" onClick={likeHandler} ></CommentOption>
                        <CommentOption Icon={ChatBubble} text="Comment"></CommentOption>
                        <CommentOption Icon={Share} text="Share"></CommentOption>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default HomePost;