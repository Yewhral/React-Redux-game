import * as types from './types';


export const initialState = {
    guest: 'reduxValue'
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GUEST:
            return {
                ...state,
                guest: action.guest
            };
        default:
            return state;
    }
};

export default rootReducer