import React, {Component} from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import SHOP_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({ id, ...itemProps }) => (
                    <CollectionPreview key={id} {...itemProps} />
                ))
            }
            </div>
        );
    }
}

export default ShopPage;