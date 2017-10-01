import React from 'react';
import { connect } from 'react-redux';

import { updateConfigAccounts } from '../../actions/accountsActions';

import Pagination from '../Pagination';
import DetailAccount from '../Detail/DetailAccount';

@connect((store) => {
    return {
        accounts: store.accounts
    };
})

class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};

        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.toList = this.toList.bind(this);
    }

    toList() {
        let newConfig = {
            status: 'list',
            detail: false,
            selected: null
        }
        this.props.dispatch(updateConfigAccounts(newConfig));
    }

    isParentHas(el) {
        const { accounts } = this.props;
        if(accounts.accounts.length === 1) {
            return false
        }
        return el.parents('.bullet').length;
    }

    handleClick(e, m) {
        if(!window.getSelection().toString().length) {
            if( this.isParentHas($(e.target)) ) {
                this.toList();
            } else if(this.props.accounts.config.status === 'single') {
                let newConfig = {
                    detail: !this.props.accounts.config.detail
                }
                this.props.dispatch(updateConfigAccounts(newConfig));
            }
        }
    }

    handleDoubleClick(e, m) {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {
            document.selection.empty();
        }
        let newConfig = {
            status: 'single',
            selected: m.id
        }
        this.props.dispatch(updateConfigAccounts(newConfig));
    }

    updateList() {
        const { accounts } = this.props;
        const bullet = (
                <div className="bullet">
                    <div className="box">
                        {accounts.accounts.length > 1 ? <span className="pointer all">Список счетов</span> : null}                        
                        <span className="pointer one">Счёт</span>
                        { !accounts.config.detail ? <i className="angle fa fa-angle-right"/> : <i className="angle fa fa-angle-down"/> }
                    </div>
                </div>
            );
        if(!accounts.accounts.length) {
            return null
        }
        let list = accounts.accounts.map((m, i) => {
            return (
                <tbody 
                className={ accounts.config.selected ? 
                    accounts.config.selected === m.id ? 
                    accounts.config.detail ? 
                    'single detailOpen' : 
                    'single' : 
                    'hideRow' : 
                    '' }
                key={i}
                onDoubleClick={ (e) => this.handleDoubleClick(e, m) }
                onClick={ (e) => this.handleClick(e, m) }>
                    <tr>
                        <td>
                            {bullet}
                            <div>{m.number}</div>
                        </td>
                        <td><div>{m.code}</div></td>
                        <td><div>{m.productType}</div></td>
                        <td><div>{m.accountType}</div></td>
                        <td><div>{m.accountSubType}</div></td>
                        <td><div>{m.currency}</div></td>
                        <td><div>{m.dateEnd}</div></td>
                        <td><div>«{m.productStatus}»</div></td>
                    </tr>
                </tbody>
            )
        });
        return list;

    }    

    render() {

        const { status, detail } = this.props.accounts.config;

        return (
            <div className="screen" id="Accounts">
                
                <table className={ status === 'single' ? 'table oneRow' : 'table' }>
                    <caption>
                        <Pagination/>
                        <span className="tableTitle">Список счетов</span>
                    </caption>                    
                    <thead>
                        <tr>
                            <th><div>Номер счета</div></th>
                            <th><div>Код</div></th>
                            <th><div>Вид продукта</div></th>
                            <th><div>Вид вклада</div></th>
                            <th><div>Подвид вклада</div></th>
                            <th><div>Валюта продукта</div></th>
                            <th><div>Дата окончания</div></th>
                            <th><div>Статус продукта</div></th>
                        </tr>
                    </thead>
                    { this.updateList() }
                </table>
                { detail ? <DetailAccount/> : null }

            </div>
        );
    }
}

Accounts.displayName = 'Accounts';

export default Accounts;