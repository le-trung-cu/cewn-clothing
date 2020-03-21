import React from 'react';
import {connect} from 'react-redux';
import { selectCollectionsForPrivew } from '../../redux/selectors/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    collections: selectCollectionsForPrivew(state)
});

export default connect(mapStateToProps)(CollectionOverview);