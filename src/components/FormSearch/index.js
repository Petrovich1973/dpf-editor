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

class FormSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {
            date: {
                value: '',
                mask: "a9.b9.9999",
                format: {
                  '9': '[0-9]',
                  'a': '[0-3]',
                  'b': '[0-1]',
                  'c': '[0-2]'
                },
                error: false
            }

        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchReviews());
    }

    handleChangeDate(e) {
        var value = e.target.value;
        var newState = {
            mask: 'a9.b9.9999',
            value: value,
            error: false
        }
        if (/^3/.test(value)) {
            newState.mask = 'ab.b9.9999';
        }
        if (/\d\d\.{1}/.test(value)) {
            newState.mask = 'a9.bc.9999';
        }
        let numberOnly = value.replace(/_*\.*/g, '');
        if (numberOnly.length < 8 && numberOnly.length) {
            newState.error = true
        } else {
            newState.error = false
        }
        this.setState({
            date: {
                ...this.state.date, 
                mask: newState.mask,
                value: newState.value,
                error: newState.error
            }
        });
    }

    render() {

        const { reviews } = this.props;

        return (
            <div className="screen" id="FormSearch">

                <div className="form-switch">
                    <h3>Поиск по</h3>
                    <select className="select">
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
                        <label>Серия</label>
                        <InputMask {...this.props} type="text" mask="9999" maskChar=" " style={{width: '60px'}} />
                    </div>

                    <div className="fieldBox">
                        <label>Номер</label>
                        <InputMask {...this.props} type="text" mask="999999" maskChar=" " style={{width: '76px'}} />
                    </div>

                    <div className="fieldBox">
                        <label>Дата рождения</label>
                        <InputMask {...this.props}
                        type="text"
                        value={this.state.date.value}
                        onChange={this.handleChangeDate}
                        mask={this.state.date.mask}
                        formatChars={this.state.date.format}
                        maskChar="_" 
                        className={this.state.date.error ? 'errorInput' : ''}
                        style={{width: '100px'}} />
                    </div>

                    <div className="fieldBox btnSend">
                        <button className="colorPrimary">Найти</button>
                    </div>

                    <div className="fieldBox btnReset">
                        <button className="colorSecondary">Очистить</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

FormSearch.displayName = 'FormSearch';

export default FormSearch;