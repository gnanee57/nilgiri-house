import * as ActionTypes from './ActionTypes';

export const WallContent = (state = { isLoading: true,
    errMess: null,
    wallContent:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WALL_CONTENT:
            return {...state, isLoading: false, errMess: null, wallContent: action.payload};

        case ActionTypes.WALL_CONTENT_LOADING:
            return {...state, isLoading: true, wallContent: []}

        case ActionTypes.WALL_CONTENT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};