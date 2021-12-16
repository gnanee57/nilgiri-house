import * as ActionTypes from './ActionTypes';

export const Certificates = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CERTIFICATES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.CERTIFICATES_LOADING:
            return {...state, isLoading: true, dishes: []}

        case ActionTypes.CERTIFICATES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};