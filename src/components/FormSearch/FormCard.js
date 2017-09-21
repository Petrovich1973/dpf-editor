import React from 'react';
import { connect } from "react-redux";

import InputMask from 'react-input-mask';

import { fetchReviews } from "../../actions/reviewsActions";

import './FormSearch.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class FormCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    componentWillMount() {
        this.props.dispatch(fetchReviews());
    }

    handleSubmitForm(e) {
        e.preventDefault();
        return false;
    }

    render() {

        const { reviews } = this.props;

        return (
            <form className="form" onSubmit={this.handleSubmitForm}>
                <div className="fieldBox">
                    <label>Номер карты</label>
                    <input type="text" autoComplete="off"/>
                </div>

                <div className="fieldBox btnSend">
                    <button type="submit" className="colorPrimary">Найти</button>
                </div>

                <div className="fieldBox btnReset">
                    <button type="reset" className="colorSecondary">Очистить</button>
                </div>
            </form>
        );
    }
}

FormCard.displayName = 'FormCard';

export default FormCard;