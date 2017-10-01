import React from 'react';
import { connect } from 'react-redux';

import Clients from './Clients';
import Accounts from './Accounts';
import ProductNavigation from './ProductNavigation';

import './ResultList.less';
import '../Detail/Detail.less';

class ResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    render() {

        const { reviews } = this.props;

        return (
            <div className="screen" id="ResultList">
                <Clients/>
                <Accounts/>
                <ProductNavigation />
            </div>
        );
    }
}

ResultList.displayName = 'ResultList';

export default ResultList;