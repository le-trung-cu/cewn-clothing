import React from 'react';
import './collection.styles.scss';
import { selectCollection } from '../../redux/selectors/shop.selectors';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

const Collection = ({ match, collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="items">
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);