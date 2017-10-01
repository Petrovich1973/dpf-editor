import React from 'react';
import { connect } from 'react-redux';

class AccountClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {
            checkbox: {
                n1: true,
                n2: false,
                n3: true,
                n4: false
            }
        };
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    }

    handleChangeCheckbox(e) {
        let name = e.target.name,
            value = e.target.checked;
        this.setState({
            checkbox: {
                ...this.state.checkbox,
                [name]: value
            }
        })
    }

    render() {

        const { checkbox } = this.state

        return (
            <div className="detailInfo">

                <div className="detailBlock">
                    <div className="detailList">
                        <div className="item">
                            <label></label>
                            <div className="detailBlockName">Документ, удостоверяющий личность</div>
                        </div>
                        <div className="item">
                            <label>Вид документа</label>
                            <div className="value">Паспорт</div>
                        </div>
                        <div className="item">
                            <label>Номер документа</label>
                            <div className="value">2333</div>
                        </div>
                        <div className="item">
                            <label>Серия документа</label>
                            <div className="value">678904</div>
                        </div>
                        <div className="item">
                            <label>Дата выдачи документа</label>
                            <div className="value">12.11.2003</div>
                        </div>
                        <div className="item">
                            <label>Кем выдан документ</label>
                            <div className="value">УВД г.Подольск, Московской области, отдел милиции №1</div>
                        </div>
                    </div>
                </div>

                <div className="detailBlock">
                    <div className="detailList">
                        <div className="item">
                            <label>Место рождения</label>
                            <div className="value">Россия, Московская область, г.Подольск</div>
                        </div>
                        <div className="item">
                            <label>Адрес регистрации</label>
                            <div className="value">Россия, Московская область, г.Подольск, ул.Подольских курсантов, д.23, кв.123</div>
                        </div>
                        <div className="item">
                            <label>Адрес фактический</label>
                            <div className="value">Россия, Московская область, г.Подольск, ул.Подольских курсантов, д.23, кв.123</div>
                        </div>
                        <div className="item">
                            <label>Тарифный план</label>
                            <div className="value">«Прометей»</div>
                        </div>
                        <div className="item">
                            <label>Контактные данные</label>
                            <div className="value">+7 999 999 99 99</div>
                        </div>
                        <div className="item">
                            <label>Свидетельство о смерти</label>
                            <div className="value">—</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

AccountClient.displayName = 'AccountClient';

export default AccountClient;