import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-prevew.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {this.state.collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}/>
                ))}
            </div>
        );
    }
}


export default ShopPage;