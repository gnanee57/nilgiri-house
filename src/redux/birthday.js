import * as ActionTypes from './ActionTypes';

export const Birthday = (state = { isLoading: true,
    errMess: null,
    birthday:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BIRTHDAY:
            return {...state, isLoading: false, errMess: null, birthday: action.payload};

        case ActionTypes.BIRTHDAY_LOADING:
            return {...state, isLoading: true, birthday: []}

        case ActionTypes.BIRTHDAY_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};