import React from 'react';
import { connect } from 'react-redux';

import { fetchReviews } from '../../actions/reviewsActions';

import './Detail.less';

@connect((store) => {
    return {
        reviews: store.reviews.reviews
    };
})

class DetailClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState = {
            checkbox: {
                n1: true,
                n2: false,
                n3: true,
                n4: false
            },
            inputs: {
                dul: 'Паспорт',
                docNamber: '0000',
                docSerial: '000000'
            },
            config: {
                edit: false
            }
        };
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleDoubleClickValue = this.handleDoubleClickValue.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchReviews());
    }

    handleChangeCheckbox(e) {
        let name = e.target.name,
            value = e.target.checked;
        this.setState({
            checkbox: {
                ...this.state.checkbox,
                [name]: value
            },
            config: {
                ...this.state.config,
                edit: true
            }
        });
    }

    handleChangeInput(e) {
        let name = e.target.name,
            value = e.target.value;
        this.setState({
            inputs: {
                ...this.state.inputs,
                [name]: value
            }
        });
    }

    handleDoubleClickValue(e) {
        this.setState({
            config: {
                ...this.state.config,
                edit: true
            }
        });
        let el = e.target;
        setTimeout(function(){
            let input = el.querySelector('input');
            if(input != null) {
                input.focus();
                let length = input.value.length;  
                input.setSelectionRange(length, length);
            }
        }, 100);
    }

    handleSave() {
        this.setState({
            config: {
                ...this.state.config,
                edit: false
            }
        });
    }

    handleCancel() {
        this.setState({
            config: {
                ...this.state.config,
                edit: false
            }
        });
    }

    render() {

        const { checkbox, inputs, config } = this.state;

        return (
            <div className="detailInfo">

                <div className={ config.edit ? 'detailControl show' : 'detailControl hide' }>
                    <button 
                    className="btnReset"
                    title="Отменить изменения"
                    onClick={this.handleCancel}><i className="fa fa-close fa-2x"/></button>
                    <button 
                    className="setAction"
                    title="Сохранить изменения"
                    onClick={this.handleSave}>Сохранить</button>
                </div>

                <div className="detailMainLine">
                    <div className="item">
                        <label>Уникальный номер клиента</label>
                        <div className="value">0000000000000</div>
                    </div>
                    <div className="item">
                        <label>ИНН</label>
                        <div className="value">00000000000000000000</div>
                    </div>
                </div>

                <div className="detailBlock">
                    <div className="detailList">
                        <div className="item">
                            <label></label>
                            <div className="detailBlockName">Документ, удостоверяющий личность</div>
                        </div>
                        <div className="item">
                            <label>Вид документа</label>
                            <div 
                            className="value"
                            onDoubleClick={this.handleDoubleClickValue}>
                                {inputs.dul}{config.edit ? <input name="dul" type="type" value={inputs.dul} onChange={this.handleChangeInput}/> : null}
                            </div>
                        </div>
                        <div className="item">
                            <label>Номер документа</label>
                            <div 
                            className="value"
                            onDoubleClick={this.handleDoubleClickValue}>                            
                                {inputs.docNamber}{config.edit ? <input name="docNamber" type="type" value={inputs.docNamber} onChange={this.handleChangeInput}/> : null}
                            </div>
                        </div>
                        <div className="item">
                            <label>Серия документа</label>
                            <div 
                            className="value"
                            onDoubleClick={this.handleDoubleClickValue}>
                                {inputs.docSerial}{config.edit ? <input name="docSerial" type="type" value={inputs.docSerial} onChange={this.handleChangeInput}/> : null}
                            </div>
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
                            <label></label>
                            <div className="detailBlockName">Особенности</div>
                        </div>
                        <div className="item">
                            <div className="checkbox">
                                <input 
                                type="checkbox" 
                                name="n1"
                                id="n1"
                                checked={checkbox.n1}
                                onChange={this.handleChangeCheckbox}/>
                            </div>
                            <label htmlFor="n1">ВИП клиент</label>
                        </div>
                        <div className="item">
                            <div className="checkbox">
                                <input 
                                type="checkbox" 
                                name="n2"
                                id="n2"
                                checked={checkbox.n2}
                                onChange={this.handleChangeCheckbox}/>
                            </div>
                            <label htmlFor="n2">Клиент пенсионер</label>
                        </div>
                        <div className="item">
                            <div className="checkbox">
                                <input 
                                type="checkbox" 
                                name="n3"
                                id="n3"
                                checked={checkbox.n3}
                                onChange={this.handleChangeCheckbox}/>
                            </div>
                            <label htmlFor="n3">Признак недееспособности</label>
                        </div>
                        <div className="item">
                            <div className="checkbox">
                                <input 
                                type="checkbox" 
                                name="n4"
                                id="n4"
                                checked={checkbox.n4}
                                onChange={this.handleChangeCheckbox}/>
                            </div>
                            <label htmlFor="n4">Клиент умер</label>
                        </div>
                    </div>
                </div>

                <br/>

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

DetailClient.displayName = 'DetailClient';

export default DetailClient;