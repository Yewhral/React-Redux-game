import * as types from './types';


export const initialState = {
    guest: 'reduxValue',
    strong: 0,
    sweet: 0,
    crazy: 0,
    fancy: 0,
    photo: null,
    guest_step: 0,
    created_drink: {},
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GUEST:
            return {
                ...state,
                guest: action.guest
            };
        case types.GUEST_STEP:
            return {
                ...state,
                guest_step: action.guest_step
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
        case types.CREATED_DRINK:
            return {
                ...state,
                created_drink: action.created_drink
            };
        default:
            return state;
    }
};

export default rootReducer