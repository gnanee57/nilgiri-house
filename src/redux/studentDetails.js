import * as ActionTypes from './ActionTypes';

export const HouseCouncil = (state  = { isLoading: true,
    errMess: null,
    promotions:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOUSE_COUNCIL:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.HOUSE_COUNCIL_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}
        case ActionTypes.HOUSE_COUNCIL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
        return state;
    }
};