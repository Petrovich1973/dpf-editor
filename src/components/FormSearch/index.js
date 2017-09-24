import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchReviews } from '../../actions/reviewsActions';

import './FormSearch.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class FormSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {
            valueFormSearch: '/clients'
        };
        this.handleChangeSelectFormSearch = this.handleChangeSelectFormSearch.bind(this);
    }

    componentWillMount() {
        this.handleTest();
        this.props.dispatch(fetchReviews());
    }

    handleChangeSelectFormSearch(e) {     
        let value = e.target.value;
        browserHistory.push(value);
    }

    handleTest() {
        browserHistory.listen(location => {
            this.setState({
                valueFormSearch: location.pathname
            });
        });
    }

    render() {

        const { reviews, formComponent } = this.props;
        const { valueFormSearch } = this.state;

        return (
            <div className="screen" id="FormSearch">

                <div className="form-switch">
                    <h3>Поиск</h3>
                    <select 
                    className="select"
                    name="switch"
                    value={valueFormSearch}
                    onChange={this.handleChangeSelectFormSearch}>
                        <option value="/clients">клиентов</option>
                        <option value="/accounts">счетов</option>
                        <option value="/card">карты</option>
                        <option value="/account">счёта</option>
                    </select>
                </div>

                {formComponent}
                
            </div>
        );
    }
}

FormSearch.displayName = 'FormSearch';

export default FormSearch;