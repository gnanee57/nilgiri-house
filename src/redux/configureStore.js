import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Birthday } from './birthday';
import { StudentDetails } from './studentDetails';
import { Events } from './events';
import { WallContent } from './wallContent';
import { Clubs } from './clubs';
import { HouseCouncil } from './houseCouncil';
import { Certificates } from './certificates';


export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            birthday: Birthday,
            studentDetails: StudentDetails,
            events: Events,
            wallContent: WallContent,
            clubs: Clubs,
            houseCouncil: HouseCouncil,
            certificates: Certificates,

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}