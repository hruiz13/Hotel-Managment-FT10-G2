import { bookAction, SET_BOOK_DATA, STEP_CHANGE, CATEGORIES_TO_SHOW, FREE_ROOMS_SHOW, SET_CATEGORY, SELECTED_CATEGORY_ROOMS, POST_FORM, BOOKING_FORM} from '../actions/Booking/bookingAction';

const initialState = {
    step: 0,
    booking: {
        guests: 0,
        range: ['', ''],
        nights: 0,
        freeRooms: [],
    },
    category: [],
    categoriesToShow: [],
    roomsAvailable:[],
    form:{},
    bookingCreate:{}
}

export function bookingsReducer (state = initialState, action:bookAction) {
    switch ( action.type ) {
        case STEP_CHANGE:
            return { ...state, step: action.payload };
        case SET_BOOK_DATA:
            const { booking } = action.payload;
            return { ...state, booking };  
        case CATEGORIES_TO_SHOW:
            return{...state, categoriesToShow:action.payload}      
        case FREE_ROOMS_SHOW:
            return{...state, freeRooms:action.payload }
        case SET_CATEGORY:
            return{...state, category: action.payload }  
        case SELECTED_CATEGORY_ROOMS:
            return{...state, roomsAvailable: action.payload}
        case POST_FORM:
            return{...state,form:action.payload} 
        case BOOKING_FORM:
            return{...state,bookingCreate:action.payload} 
        default: return state;
    }
}