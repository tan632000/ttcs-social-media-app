import { BubbleChart } from '@material-ui/icons';
import React from 'react';

const Notification = () => {
    return (
        <div className='main'>
            <div className='note-top'>
                <div>
                    <span>Notifications</span>
                </div>
            </div>
            <div className='note-main'>
                <div className='note-mainL'>
                    <span><BubbleChart /></span>
                </div>
                <div className='note-mainR'>
                    <div className='note-mainR-top'>
                        <img  src='../lisa.jpg'></img>
                        <span>icon</span>
                    </div>
                    <div className='note-mainR-main'>
                        <span>{"Ai đó"}{"làm gì đó"}{"ở đâu đó"}</span>
                    </div>
                </div>
            </div>
            <div className='note-main'>
                <div className='note-mainL'>
                    <span><BubbleChart /></span>
                </div>
                <div className='note-mainR'>
                    <div className='note-mainR-top'>
                        <img  src='../lisa.jpg'></img>
                        <span>icon</span>
                    </div>
                    <div className='note-mainR-main'>
                        <span>{"Ai đó"}{"làm gì đó"}{"ở đâu đó"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;