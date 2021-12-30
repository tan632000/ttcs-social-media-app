import React from 'react';
import { ChatBubble, Delete, MoreHoriz, Share, ThumbUp} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Popover from '@material-ui/core/Popover';

const CommentOption = ({text, Icon}) => {
    return (
        <div>
            <Icon />
            <span>{text}</span>
        </div>
    );
};
const HomePost = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
    return (
        <div className="main-form">
            <div className="main__avatar">
                <img src="../lisa.jpg"></img>
            </div>
            <div className="main-content">
                <div className="main-content-userName">
                    <div>
                        <span className="fw-text"><Link to=""> Bill Gates</Link></span>
                        <span>@BillGates</span>
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
                                <span><Delete /></span>
                            </div>
                            {/* <Typography >The content of the Popover.</Typography> */}
                        </Popover>
                    </div>
                </div>
                <div className="main-content-text">
                    <span>We’ll post more updates as we move towards completion. Don’t hesitate to send pull requests 
                        if you’d like to fix something! The source code is in the "beta" folder of our existing website repo. Thank you!
                        
                    </span>
                    <div>
                        <img src="../lisa.jpg"></img>
                        <video src="../CNPMN.mp4" playsInline controls></video>
                    </div>
                    
                </div>
                <div className="main-content-button">
                    <div></div>
                    <div className="main-content__function">
                        <CommentOption Icon={ThumbUp} text="Like" ></CommentOption>
                        <CommentOption Icon={ChatBubble} text="Comment"></CommentOption>
                        <CommentOption Icon={Share} text="Share"></CommentOption>
                    </div>
                </div>
            </div>
                
        </div>
    );
};

export default HomePost;