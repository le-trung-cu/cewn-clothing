import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl }) => {
    return (
        <div style={{backgroundImage: `url(${imageUrl})`}} 
         className="menu-item">
            <div className="content">
                <h1 className="title">hats</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    );
};

export default MenuItem;