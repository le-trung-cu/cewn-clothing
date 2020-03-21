import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';

import './directory.styles.scss';

const Directiry = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />))}
    </div>
)

const mapStateToProps = state => ({
    sections: state.directory.sections
})

export default connect(mapStateToProps)(Directiry);