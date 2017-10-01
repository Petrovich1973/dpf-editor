import React from 'react';
import { connect } from 'react-redux';

import Pagination from '../Pagination';

@connect((store) => {
    return {
        clients: store.clients
    };
})

class ListClients extends React.Component {

    updateList() {
        const { clients } = this.props;
        const bullet = (
                <div className="bullet">
                    <div className="box">
                        {clients.clients.length > 1 ? <span className="pointer all">Список клиентов</span> : null}                        
                        <span className="pointer one">Клиент</span>
                        { !clients.config.detail ? <i className="angle fa fa-angle-right"/> : <i className="angle fa fa-angle-down"/> }
                    </div>
                </div>
            );
        if(!clients.clients.length) {
            return null
        }
        let list = clients.clients.map((m, i) => {
            return (
                <tbody 
                className={ clients.config.selected ? 
                    clients.config.selected === m.id ? 
                    clients.config.detail ? 
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
        return list;

    }

	render() {

        const { status, detail } = this.props.clients.config;

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

ListClients.displayName = 'ListClients';

export default ListClients;