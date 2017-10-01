const initialState = {    
    items: [{
            id: 1,
            alias: 'cards',
            name: 'Карты'
        },{
            id: 2,
            alias: 'register',
            name: 'Регистр'
        },{
            id: 3,
            alias: 'gjs',
            name: 'Документ ГЖС'
        },{
            id: 4,
            alias: 'heir',
            name: 'Наследник'
        },{
            id: 5,
            alias: 'financialOperations',
            name: 'Финансовые операции'
        },{
            id: 6,
            alias: 'historyBS',
            name: 'История БС'
        },{
            id: 7,
            alias: 'services',
            name: 'Плановые сервисы'
        },{
            id: 8,
            alias: 'scripts',
            name: 'Бизнес сценарии'
    }], 
    current: 'cards'
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case "UPDATE_CURRENT_PRODUCT_NAVIGATION": {
            return {
                ...state,
                current: action.payload
            };
        }
    }

    return state;
}