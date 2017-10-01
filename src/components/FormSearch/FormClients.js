import React from 'react';
import { connect } from "react-redux";

import InputMask from 'react-input-mask';

import { changeField, resetFields } from "../../actions/searchActions";
import { fetchClients } from "../../actions/clientsActions";

@connect((store) => {
    return {
        field: store.search.clients
    };
})

class FormClients extends React.Component {
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
            },
            inputs: {}
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }

    handleChangeDate(e) {
        var value = e.target.value;
        var newState = {
            mask: this.state.date.mask,
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
            newState.error = true;
        } else {
            newState.error = false;
        }
        this.setState({
            date: {
                ...this.state.date, 
                mask: newState.mask,
                error: newState.error
            }
        });
        this.props.dispatch(changeField( {clients: {...this.props.field, dateOfBirth: value}} ));
    }

    handleSubmitForm(e) {
        e.preventDefault();
        this.props.dispatch(fetchClients());
        return false;
    }

    handleChangeInput(e) {
        let name = e.target.name,
            value = e.target.value;
        this.props.dispatch(changeField( {clients: {...this.props.field, [name]: value}} ));
    }

    resetFields() {        
        this.props.dispatch(resetFields( 'clients' ));
    }

    render() {

        const {         
            surname,
            name,
            patronymic,
            docNamber,
            docSerial,
            dateOfBirth } = this.props.field;

        return (
            <form className="form" onSubmit={this.handleSubmitForm}>
                <div className="fieldBox">
                    <label>Фамилия</label>
                    <input 
                    type="text" 
                    name="surname" 
                    value={surname} 
                    size={surname.length > 8 ? surname.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Имя</label>
                    <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    size={name.length > 8 ? name.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Отчество</label>
                    <input 
                    type="text" 
                    name="patronymic" 
                    value={patronymic} 
                    size={patronymic.length > 8 ? patronymic.length + 1 : null}
                    onChange={this.handleChangeInput} 
                    autoComplete="off"/>
                </div>

                <div className="fieldBox">
                    <label>Серия</label>
                    <InputMask 
                    type="text"
                    name="docNamber"
                    value={docNamber}
                    onChange={this.handleChangeInput} 
                    mask="9999" 
                    maskChar="_" 
                    style={{width: '60px'}} />
                </div>

                <div className="fieldBox">
                    <label>Номер</label>
                    <InputMask  
                    type="text"
                    name="docSerial" 
                    value={docSerial} 
                    onChange={this.handleChangeInput} 
                    mask="999999" 
                    maskChar="_" 
                    style={{width: '76px'}} />
                </div>

                <div className="fieldBox">
                    <label>Дата рождения</label>
                    <InputMask
                    type="text"
                    value={dateOfBirth}
                    onChange={this.handleChangeDate}
                    mask={this.state.date.mask}
                    formatChars={this.state.date.format}
                    maskChar="_" 
                    className={this.state.date.error ? 'errorInput' : ''}
                    style={{width: '100px'}} />
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

FormClients.displayName = 'FormClients';

export default FormClients;