import * as ActionTypes from './ActionTypes';

export const Clubs = (state = { isLoading: true,
    errMess: null,
    clubs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CLUBS:
            return {...state, isLoading: false, errMess: null, clubs: action.payload};

        case ActionTypes.CLUBS_LOADING:
            return {...state, isLoading: true, clubs: []}

        case ActionTypes.CLUBS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};