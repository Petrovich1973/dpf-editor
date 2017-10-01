import React from 'react';
import { connect } from 'react-redux';

import { updateCurrent } from '../../actions/searchActions';

import FormClients from './FormClients';
import FormAccounts from './FormAccounts';
import FormCard from './FormCard';
import FormAccount from './FormAccount';

import './FormSearch.less';

@connect((store) => {
    return {
        current: store.search.current
    };
})

class FormSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
        this.handleChangeSelectFormSearch = this.handleChangeSelectFormSearch.bind(this);
    }

    handleChangeSelectFormSearch(e) {     
        let value = e.target.value;
        this.props.dispatch(updateCurrent(value));
    }

    formFields() {
        switch(this.props.current) {
            case 'clients':
                return <FormClients />
            case 'accounts':
                return <FormAccounts />
            case 'card':
                return <FormCard />
            case 'account':
                return <FormAccount />
            default:
                return <FormClients />
        }
    }

    render() {

        const { current } = this.props;

        return (
            <div id="FormSearch">

                <div className="form-switch">
                    <h3>Поиск</h3>
                    <select 
                    className="select"
                    name="switch"
                    value={current}
                    onChange={this.handleChangeSelectFormSearch}>
                        <option value="clients">клиентов</option>
                        <option value="accounts">счетов</option>
                        <option value="card">по карте</option>
                        <option value="account">по счёту</option>
                    </select>
                </div>

                { this.formFields() }
                
            </div>
        );
    }
}

FormSearch.displayName = 'FormSearch';

export default FormSearch;