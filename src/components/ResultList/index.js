import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

import Clients from './Clients';
import Accounts from './Accounts';

import './ResultList.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})
//window.getSelection().toString().length ? 'yes' : 'not' //window.getSelection().empty()
class ResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    componentWillMount() {
        this.props.dispatch(fetchReviews());
    }

    render() {

        const { reviews } = this.props;

        return (
            <div className="screen" id="ResultList">
                <Clients/>
                <Accounts/>
            </div>
        );
    }
}

ResultList.displayName = 'ResultList';

export default ResultList;