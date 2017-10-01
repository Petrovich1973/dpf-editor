export default function reducer(state = {
    accounts: [{
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
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_ACCOUNTS": {
            return { ...state, fetching: true };
        }
        case "FETCH_ACCOUNTS_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_ACCOUNTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                accounts: action.payload
            };
        }
        case "UPDATE_CONFIG_ACCOUNTS": {
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