export default function reducer(state = {
    clients: [{
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
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_CLIENTS": {
            return { ...state, fetching: true };
        }
        case "FETCH_CLIENTS_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_CLIENTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                clients: action.payload
            };
        }
        case "UPDATE_CONFIG_CLIENTS": {
            return {
                ...state,
                config: {
                    ...state.config,
                    ...action.payload
                }
            };
        }
    }

    return state;
}