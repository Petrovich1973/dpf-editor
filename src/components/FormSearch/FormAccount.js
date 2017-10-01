import React from 'react';
import { connect } from "react-redux";

import { changeField, resetFields } from "../../actions/searchActions";

@connect((store) => {
    return {
        field: store.search.account
    };
})

class FormAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};       
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }

    handleSubmitForm(e) {
        e.preventDefault();
        return false;
    }

    handleChangeInput(e) {
        let name = e.target.name,
            value = e.target.value;
        this.props.dispatch(changeField( {account: {...this.props.field, [name]: value}} ));
    }

    resetFields() {        
        this.props.dispatch(resetFields( 'account' ));
    }

    render() {

        const { accountNumber } = this.props.field;

        return (
            <form className="form" onSubmit={this.handleSubmitForm}>
                <div className="fieldBox">
                    <label>Номер счета</label>
                    <input 
                    type="text" 
                    name="accountNumber" 
                    value={accountNumber} 
                    size={20}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox btnSend">
                    <button type="submit" className="setAction">Найти</button>
                </div>

                <div className="fieldBox btnReset">
                    <button type="button" title="Очистить поиск" onClick={this.resetFields}><i className="fa fa-close fa-2x"/></button>
                </div>
            </form>
        );
    }
}

FormAccount.displayName = 'FormAccount';

export default FormAccount;