import * as types from './types';


export const initialState = {
    guest: 'reduxValue',
    strong: 0,
    sweet: 0,
    crazy: 0,
    fancy: 0,
    photo: null
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GUEST:
            return {
                ...state,
                guest: action.guest
            };
        case types.STRONG:
            return {
                ...state,
                strong: action.strong
            };
        case types.SWEET:
            return {
                ...state,
                sweet: action.sweet
            };
        case types.CRAZY:
            return {
                ...state,
                crazy: action.crazy
            };
        case types.FANCY:
            return {
                ...state,
                fancy: action.fancy
            };
        case types.PHOTO:
            return {
                ...state,
                photo: action.photo
            };
        default:
            return state;
    }
};

export default rootReducer