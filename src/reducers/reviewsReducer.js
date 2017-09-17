export default function reducer(state = {
    reviews: [/*{
    	id: 1, 
    	isActive: true, 
    	image: null, 
    	name: 'Иван Иванович', 
    	message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
    },{
    	id: 2, 
    	isActive: false, 
    	image: null, 
    	name: 'Аленушка', 
    	message: 'Жили-были старик да старуха, у них была дочка Алёнушка да сынок Иванушка. Старик со старухой умерли. Остались Аленушка да Иванушка одни-одинешеньки. Пошла Аленушка на работу и братца с собой взяла. Идут они по дальнему пути, по широкому полю, и захотелось Иванушке пить.'
    },{
    	id: 3, 
    	isActive: false, 
    	image: '/assets/images/ScreenReviews/01.jpg', 
    	name: null, 
    	message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },{
    	id: 4, 
    	isActive: false, 
    	image: '/assets/images/ScreenReviews/04.jpg', 
    	name: 'Елена Дмитриевна', 
    	message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    },{
    	id: 5, 
    	isActive: false, 
    	image: '/assets/images/ScreenReviews/01.jpg', 
    	name: 'Константин Константинович', 
    	message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }*/],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_REVIEWS": {
            return { ...state, fetching: true };
        }
        case "FETCH_REVIEWS_REJECTED": {
            return { ...state, fetching: false, error: action.payload };
        }
        case "FETCH_REVIEWS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                reviews: action.payload
            };
        }
        case "SET_CURRENT_REVIEW": {
            return {
                ...state,
                reviews: action.payload
            };
        }
    }

    return state;
}