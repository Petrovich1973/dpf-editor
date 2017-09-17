import React from 'react';
import { connect } from "react-redux";

import { fetchReviews } from "../../actions/reviewsActions";

import './FormSearch.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class FormSearch extends React.Component {
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
            <div className="screen" id="FormSearch">

                <div className="form-switch">
                    <h3>Поиск по</h3>
                    <select>
                        <option>клиенту</option>
                        <option>счету</option>
                        <option>карте</option>
                    </select>
                </div>

                <form className="form">
                    <div className="fieldBox">
                        <label>Фамилия</label>
                        <input type="text" autoComplete="off"/>
                    </div>

                    <div className="fieldBox">
                        <label>Имя</label>
                        <input type="text" autoComplete="off"/>
                    </div>

                    <div className="fieldBox">
                        <label>Отчество</label>
                        <input type="text" autoComplete="off"/>
                    </div>

                    <div className="fieldBox">
                        <label>Дата рождения</label>
                        <input type="text" autoComplete="off"/>
                    </div>

                    <div className="fieldBox">
                        <button className="colorPrimary">Найти</button>
                    </div>

                    <div className="fieldBox">
                        <button className="colorSecondary">Очистить</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

FormSearch.displayName = 'FormSearch';

export default FormSearch;