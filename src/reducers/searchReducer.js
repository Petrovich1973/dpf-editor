const initialState = {    
    clients: {
        surname: '',
        name: '',
        patronymic: '',
        dul: '',
        docNamber: '',
        docSerial: '',
        dateOfBirth: ''
    },
    accounts: {
        tbNumber: '', 
        balanceAccount: '', 
        typeDeposit: '',
        currency: '',
        osb: '',
        branch: ''
    },
    card: {
        cardNumber: ''
    },
    account: {
        accountNumber: ''
    },
    current: 'accounts'
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "UPDATE_CURRENT_SEARCH": {
            return {
                ...state,
                current: action.payload
            };
        }
        case "CHANGE_FIELD_SEARCH": {
            return {
                ...state, 
                ...action.payload
            };
        }
        case "RESET_FIELDS_SEARCH": {
            return {
                ...state,
                [action.setName]: initialState[action.setName]
            };
        }
    }

    return state;
}