import * as types from './types';

export const setGuest = (_guest) => ({
    type: types.GUEST,
    guest: _guest
});