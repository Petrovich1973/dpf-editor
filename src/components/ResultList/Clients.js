import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

import Pagination from '../Pagination';
import DetailClient from '../Detail/DetailClient';

import './ResultList.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class Clients extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {
            listClients: [{
                id: 1,
                surname: 'Староборецкий',
                name: 'Виктор',
                patronymic: 'Петрович',
                dul: 'Паспорт',
                docNamber: '1234',
                docSerial: '123456',
                dateOfBirth: '19.03.1974'
            },{
                id: 2,
                surname: 'Староборецкий',
                name: 'Виктор',
                patronymic: 'Владимирович',
                dul: 'Паспорт',
                docNamber: '2341',
                docSerial: '654567',
                dateOfBirth: '23.01.1977'
            },{
                id: 3,
                surname: 'Староборецкий',
                name: 'Виктор',
                patronymic: 'Михайлович',
                dul: 'Паспорт',
                docNamber: '5654',
                docSerial: '876543',
                dateOfBirth: '29.11.1986'
            },{
                id: 4,
                surname: 'Староборецкий',
                name: 'Виктор',
                patronymic: 'Семенович',
                dul: 'Паспорт',
                docNamber: '9876',
                docSerial: '670211',
                dateOfBirth: '31.10.1993'
            },{
                id: 5,
                surname: 'Староборецкий',
                name: 'Виктор',
                patronymic: 'Андреевич',
                dul: 'Паспорт',
                docNamber: '551209',
                docSerial: '671190',
                dateOfBirth: '03.03.1980'
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
        const { listClients, config } = this.state;
        const bullet = (
                <div className="bullet">
                    <div className="box">
                        <span className="pointer all">Список клиентов</span>
                        <span className="pointer one">Клиент</span>
                        { !config.detail ? <i className="angle fa fa-angle-right"/> : <i className="angle fa fa-angle-down"/> }
                    </div>
                </div>
            );
        let list = listClients.map((m, i) => {
            return (
                <tbody 
                className={ config.selected ? config.selected === m.id ? config.detail ? 'single detailOpen' : 'single' : 'hideRow' : '' }
                key={i}
                onDoubleClick={ (e) => this.handleDoubleClick(e, m) }
                onClick={ (e) => this.handleClick(e, m) }>
                    <tr>
                        <td>
                            {bullet}
                            <div>{m.surname}</div>
                        </td>
                        <td><div>{m.name}</div></td>
                        <td><div>{m.patronymic}</div></td>
                        <td><div>{m.dul}</div></td>
                        <td><div>{m.docNamber}</div></td>
                        <td><div>{m.docSerial}</div></td>
                        <td><div>{m.dateOfBirth}</div></td>
                    </tr>
                </tbody>
            )
        });
        return listClients.length ? list : null;

    }  

    render() {

        const { status, detail } = this.state.config;

        return (
            <div className="screen" id="Clients">
                
                <table className={ status === 'single' ? 'table oneRow' : 'table' }>
                    <caption>
                        <Pagination/>
                        <span className="tableTitle">Список клиентов</span>
                    </caption>                    
                    <thead>
                        <tr>
                            <th><div>Фамилия</div></th>
                            <th><div>Имя</div></th>
                            <th><div>Отчество</div></th>
                            <th><div>ДУЛ</div></th>
                            <th><div>Номер</div></th>
                            <th><div>Серия</div></th>
                            <th><div>Дата рождения</div></th>
                        </tr>
                    </thead>
                    { this.updateList() }
                </table>
                { detail ? <DetailClient/> : null }

            </div>
        );
    }
}

Clients.displayName = 'Clients';

export default Clients;