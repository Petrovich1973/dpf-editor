import React from 'react';
import { connect } from 'react-redux';

import { updateProductNavigation } from '../../actions/productNavigationActions';

@connect((store) => {
    return {
        productNavigation: store.productNavigation
    };
})

class ProductNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        this.props.dispatch(updateProductNavigation(item));
    }

    updateList() {
        const { items, current } = this.props.productNavigation;

        let list = items.map((m, i) => {
            return (
                <li 
                key={i} 
                className={m.alias === current ? 'active' : ''}
                onClick={() => this.handleClick(m.alias)}>
                    <span>{m.name}</span>
                </li>
            )
        })
        return list;

    }

    render() {

        return (
            <div className="screen" id="ProductNavigation">
                
                <ul className="list">
                    { this.updateList() }
                </ul>
                
            </div>
        );
    }
}

ProductNavigation.displayName = 'ProductNavigation';

export default ProductNavigation;