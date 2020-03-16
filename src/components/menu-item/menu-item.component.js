import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, linkUrl, history, match }) => {
    return (
        <div style={{backgroundImage: `url(${imageUrl})`}} 
         className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
                <h1 className="title">hats</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);