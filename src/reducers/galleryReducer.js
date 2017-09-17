export default function reducer(state = {
    gallery: [/*{
        id: 1,
        type: 'Сауна',
        name: 'Престиж',
        photo: '/assets/images/OurRealizedProjects/01.jpg',
        params: {
            height: [1.9, 2.5],
            area: [2, 16],
            period: [7, 20],
            price: [50]
        }
    },{
        id: 2,
        type: 'Сауна',
        name: 'Пират',
        photo: '/assets/images/OurRealizedProjects/02.jpg',
        params: {
            height: [1.7, 2.8],
            area: [5, 10],
            period: [17, 30],
            price: [150]
        }
    },{
        id: 3,
        type: 'Сауна',
        name: 'Гурия',
        photo: '/assets/images/OurRealizedProjects/03.jpg',
        params: {
            height: [2.4, 3],
            area: [8, 16],
            period: [27, 41],
            price: [200]
        }
    },{
        id: 4,
        type: 'Сауна',
        name: 'Комфорт',
        photo: '/assets/images/OurRealizedProjects/04.jpg',
        params: {
            height: [1.5, 3.5],
            area: [20, 26],
            period: [35, 50],
            price: [450]
        }
    },{
        id: 5,
        type: 'Баня',
        name: 'Бревно',
        photo: '/assets/images/OurRealizedProjects/05.jpg',
        params: {
            height: [1.2, 2.7],
            area: [2, 10],
            period: [8, 14],
            price: [80]
        }
    }*/],
    galleryView: 0,
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_GALLERY": {
            return { ...state, fetching: true };
        }
        case "FETCH_GALLERY_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_GALLERY_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                gallery: action.payload
            };
        }
        case "SET_CURRENT_VIEW": {
            return {
                ...state,
                galleryView: action.payload
            };
        }
    }

    return state;
}