import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

import Pagination from '../Pagination';
import DetailAccount from '../Detail/DetailAccount';

import './ResultList.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {
            listAccounts: [{
                id: 1,
                number: '000 00000 00 0000 000000', 
                code: '149', 
                productType: '101',
                accountType: '54',
                accountSubType: '2',
                currency: '840',
                dateEnd: '19.03.2021',
                productStatus: 'Активен'
            },{
                id: 2,
                number: '100 23000 34 0000 456000', 
                code: '148', 
                productType: '101',
                accountType: '54',
                accountSubType: '2',
                currency: '810',
                dateEnd: '02.08.2024',
                productStatus: 'Активен'
            },{
                id: 3,
                number: '230 65400 77 8000 123000', 
                code: '149', 
                productType: '103',
                accountType: '55',
                accountSubType: '3',
                currency: '810',
                dateEnd: '02.08.2023',
                productStatus: 'Не активен'
            }],
            config: {
                status: 'list',
                detail: false,
                selected: null
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.toList = this.toList.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchReviews());
    }

    toList() {
        this.setState({
            config: {
                ...this.initialState.config
            }
        });
    }

    isParentHas(el) {
        return el.parents('.bullet').length;

    }

    handleClick(e, m) {
        if(!window.getSelection().toString().length) {
            if( this.isParentHas($(e.target)) ) {
                this.toList();
            } else if(this.state.config.status === 'single') {
                this.setState({
                    config: {
                        ...this.state.config,
                        detail: !this.state.config.detail
                    }
                });
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
        this.setState({
            config: {
                ...this.state.config,
                status: 'single',
                selected: m.id
            }
        });
    }

    updateList() {
        const { listAccounts, config } = this.state;
        const bullet = (
                <div className="bullet">
                    <div className="box">
                        <span className="pointer all">Список счетов</span>
                        <span className="pointer one">Счет</span>
                        { !config.detail ? <i className="angle fa fa-angle-right"/> : <i className="angle fa fa-angle-down"/> }
                    </div>
                </div>
            );
        let list = listAccounts.map((m, i) => {
            return (
                <tbody 
                className={ config.selected ? config.selected === m.id ? config.detail ? 'single detailOpen' : 'single' : 'hideRow' : '' }
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
        return listAccounts.length ? list : null;

    }    

    render() {

        const { status, detail } = this.state.config;

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