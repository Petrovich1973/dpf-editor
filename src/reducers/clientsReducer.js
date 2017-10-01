export default function reducer(state = {
    clients: [],
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
            return { ...state, fetching: true, fetched: false };
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
        case "FETCH_CLIENT_FULFILLED": {
            state.clients = [];
            return {
                ...state,
                fetching: false,
                fetched: true,
                clients: state.clients.concat(action.payload)
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