import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

import ListClients from './ListClients';

import './ResultList.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

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
                <ListClients/>
            </div>
        );
    }
}

ResultList.displayName = 'ResultList';

export default ResultList;