import React from 'react';

const HeaderOption = ({active, text, Icon}) => {
    return (
        <div className="headerOption ">
            <Icon />
            <span>{text}</span>
        </div>
    );
};

export default HeaderOption;
