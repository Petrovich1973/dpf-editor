import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

import Pagination from '../Pagination';

import './ResultList.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class ListClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {};
    }

    componentWillMount() {
        this.props.dispatch(fetchReviews());
    }

    componentDidMount() {

        $('#ListClients tbody div').not('.bullet').not('.box').dblclick( e => {
            e.preventDefault();
            let _self = $(e.target).parents('tbody');
            
            if (!_self.hasClass('single')) {
                _self.siblings('tbody').find('div').slideUp(300, e => {
                    _self.addClass('single').css({
                        background: 'transparent'
                    });
                });
                _self.parents('.table').addClass('oneRow');
                _self.parents('#ListClients').find('.pagination').slideUp(300);
            }
        });

        $('#ListClients tbody div').not('.bullet').not('.box').click( e => {
            e.preventDefault();
            let _self = $(e.target).parents('tbody');

            if (_self.hasClass('single')) {
                _self.find('.angle').toggleClass('fa-angle-down', 'fa-angle-right');
                _self.parents('#ListClients').find('.detailInfo').stop(true).animate({
                    height: 'toggle'
                }, 100);
                _self.toggleClass('detailOpen');
            }
        });

        $('#ListClients tbody div.bullet').click( e => {
            e.preventDefault();
            let _self = $(e.target).parents('tbody');

            _self.removeClass('single');
            _self.removeAttr('style');
            _self.siblings('tbody').find('div').not('.box').slideDown(300);
            _self.parent('.table').removeClass('oneRow');
            _self.find('.angle').removeClass('fa-angle-down').addClass('fa-angle-right');
            _self.parents('#ListClients').find('.detailInfo').slideUp(100);
            _self.parents('#ListClients').find('.pagination').slideDown(300);
        });

    }

    render() {
        return (
            <div className="screen" id="ListClients">
                <Pagination/>
                <table className="table">
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
                    <tbody>
                        <tr>
                            <td>
                                <div className="bullet">
                                    <div className="box">
                                        <span className="pointer all">Клиенты</span>
                                        <span className="pointer one">Клиент</span>
                                        <i className="angle fa fa-angle-right"/>
                                    </div>
                                </div>
                                <div>Староборецкий</div>
                            </td>
                            <td><div>Виктор</div></td>
                            <td><div>Петрович</div></td>
                            <td><div>Паспорт</div></td>
                            <td><div>1234</div></td>
                            <td><div>123456</div></td>
                            <td><div>19.03.1974</div></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="bullet">
                                    <div className="box">
                                        <span className="pointer all">Клиенты</span>
                                        <span className="pointer one">Клиент</span>
                                        <i className="angle fa fa-angle-right"/>
                                    </div>
                                </div>
                                <div>Староборецкий</div>
                            </td>
                            <td><div>Виктор</div></td>
                            <td><div>Сергеевич</div></td>
                            <td><div>Паспорт</div></td>
                            <td><div>3456</div></td>
                            <td><div>267898</div></td>
                            <td><div>06.12.1979</div></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="bullet">
                                    <div className="box">
                                        <span className="pointer all">Клиенты</span>
                                        <span className="pointer one">Клиент</span>
                                        <i className="angle fa fa-angle-right"/>
                                    </div>
                                </div>
                                <div>Староборецкий</div>
                            </td>
                            <td><div>Виктор</div></td>
                            <td><div>Михайлович</div></td>
                            <td><div>Паспорт</div></td>
                            <td><div>6543</div></td>
                            <td><div>876898</div></td>
                            <td><div>21.09.1983</div></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="bullet">
                                    <div className="box">
                                        <span className="pointer all">Клиенты</span>
                                        <span className="pointer one">Клиент</span>
                                        <i className="angle fa fa-angle-right"/>
                                    </div>
                                </div>
                                <div>Староборецкий</div>
                            </td>
                            <td><div>Виктор</div></td>
                            <td><div>Дмитриевич</div></td>
                            <td><div>Паспорт</div></td>
                            <td><div>9875</div></td>
                            <td><div>946127</div></td>
                            <td><div>31.01.1988</div></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="bullet">
                                    <div className="box">
                                        <span className="pointer all">Клиенты</span>
                                        <span className="pointer one">Клиент</span>
                                        <i className="angle fa fa-angle-right"/>
                                    </div>
                                </div>
                                <div>Староборецкий</div>
                            </td>
                            <td><div>Виктор</div></td>
                            <td><div>Олегович</div></td>
                            <td><div>Паспорт</div></td>
                            <td><div>1145</div></td>
                            <td><div>822454</div></td>
                            <td><div>13.10.1977</div></td>
                        </tr>
                    </tbody>
                </table>

                <div className="detailInfo">
                    Детальная инфоормация о выбранном клиенте<br/>
                    Детальная инфоормация о выбранном клиенте<br/>
                    Детальная инфоормация о выбранном клиенте<br/>
                    Детальная инфоормация о выбранном клиенте<br/>
                    Детальная инфоормация о выбранном клиенте<br/>
                    Детальная инфоормация о выбранном клиенте<br/>
                    Детальная инфоормация о выбранном клиенте<br/>
                </div>
            </div>
        );
    }
}

ListClients.displayName = 'ListClients';

export default ListClients;