import React from 'react';
import { connect } from "react-redux";

import { changeField, resetFields } from "../../actions/searchActions";

@connect((store) => {
    return {
        field: store.search.accounts
    };
})

class FormAccounts extends React.Component {
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
        this.props.dispatch(changeField( {accounts: {...this.props.field, [name]: value}} ));
    }

    resetFields() {        
        this.props.dispatch(resetFields( 'accounts' ));
    }

    render() {

        const { 
            tbNumber, 
            balanceAccount, 
            typeDeposit,
            currency,
            osb,
            branch } = this.props.field;

        return (
            <form className="form" onSubmit={this.handleSubmitForm}>
                <div className="fieldBox">
                    <label>Код ТБ</label>
                    <input 
                    type="text" 
                    name="tbNumber" 
                    value={tbNumber} 
                    size={tbNumber.length > 8 ? tbNumber.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Балансовый счет</label>
                    <input 
                    type="text" 
                    name="balanceAccount" 
                    value={balanceAccount} 
                    size={balanceAccount.length > 8 ? balanceAccount.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Вид вклада</label>
                    <input 
                    type="text" 
                    name="typeDeposit" 
                    value={typeDeposit} 
                    size={typeDeposit.length > 8 ? typeDeposit.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Валюта</label>
                    <input 
                    type="text" 
                    name="currency" 
                    value={currency} 
                    size={currency.length > 8 ? currency.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>ОСБ</label>
                    <input 
                    type="text" 
                    name="osb" 
                    value={osb} 
                    size={osb.length > 8 ? osb.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Филиал</label>
                    <input 
                    type="text" 
                    name="branch" 
                    value={branch} 
                    size={branch.length > 8 ? branch.length + 1 : null}
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

FormAccounts.displayName = 'FormAccounts';

export default FormAccounts;