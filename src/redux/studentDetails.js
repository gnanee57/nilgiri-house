import * as ActionTypes from './ActionTypes';

export const StudentDetails = (state  = { isLoading: true,
    errMess: null,
    studentDetails:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STUDENT_DETAILS:
            return {...state, isLoading: false, errMess: null, studentDetails: action.payload};

        case ActionTypes.STUDENT_DETAILS_LOADING:
            return {...state, isLoading: true, errMess: null, studentDetails: []}

        case ActionTypes.STUDENT_DETAILS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
        return state;
    }
};