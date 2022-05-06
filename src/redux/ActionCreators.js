import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../baseurl';

export const fetchBirthday = () => (dispatch) => {

    dispatch(birthdayLoading(true));
    return fetch(baseUrl + 'birthday')
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(birthday =>  dispatch(addBirthday(birthday)))
        .catch(error =>  dispatch(birthdayFailed(error.message)));
}

export const birthdayLoading = () => ({
    type: ActionTypes.BIRTHDAY_LOADING
});

export const birthdayFailed = (errmess) => ({
    type: ActionTypes.BIRTHDAY_FAILED,
    payload: errmess
});

export const addBirthday = (birthday) => ({
    type: ActionTypes.ADD_BIRTHDAY,
    payload: birthday
});

export const fetchStudentDetails = (studentId) => (dispatch) => {

    dispatch(studentDetailsLoading(true));
    return fetch(baseUrl + 'studentDetails/' + studentId)
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(studentDetails =>  dispatch(addStudentDetails(studentDetails)))
        .catch(error =>  dispatch(studentDetailsFailed(error.message)));
}

export const studentDetailsLoading = () => ({
    type: ActionTypes.STUDENT_DETAILS_LOADING
});

export const studentDetailsFailed = (errmess) => ({
    type: ActionTypes.STUDENT_DETAILS_FAILED,
    payload: errmess
});

export const addStudentDetails = (studentDetails) => ({
    type: ActionTypes.ADD_STUDENT_DETAILS,
    payload: studentDetails
});

export const fetchEvents = () => (dispatch) => {

    dispatch(eventsLoading(true));
    return fetch(baseUrl + 'events')
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(events =>  dispatch(addEvents(events)))
        .catch(error =>  dispatch(eventsFailed(error.message)));
}

export const eventsLoading = () => ({
    type: ActionTypes.EVENTS_LOADING
});

export const eventsFailed = (errmess) => ({
    type: ActionTypes.EVENTS_FAILED,
    payload: errmess
});

export const addEvents = (events) => ({
    type: ActionTypes.ADD_EVENTS,
    payload: events
});

export const fetchWallContent = () => (dispatch) => {

    dispatch(wallContentLoading(true));
    return fetch(baseUrl + 'wallContent')
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(wallContent =>  dispatch(addWallContent(wallContent)))
        .catch(error =>  dispatch(wallContentFailed(error.message)));
}

export const wallContentLoading = () => ({
    type: ActionTypes.WALL_CONTENT_LOADING
});

export const wallContentFailed = (errmess) => ({
    type: ActionTypes.WALL_CONTENT_FAILED,
    payload: errmess
});

export const addWallContent = (wallContent) => ({
    type: ActionTypes.ADD_WALL_CONTENT,
    payload: wallContent
});

export const fetchClubs = () => (dispatch) => {

    dispatch(clubsLoading(true));
    return fetch(baseUrl + 'clubs')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(clubs =>  dispatch(addClubs(clubs)))
        .catch(error => dispatch(clubsFailed(error.message)));
}

export const clubsLoading = () => ({
    type: ActionTypes.CLUBS_LOADING
});

export const clubsFailed = (errmess) => ({
    type: ActionTypes.CLUBS_FAILED,
    payload: errmess
});

export const addClubs = (clubs) => ({
    type: ActionTypes.ADD_CLUBS,
    payload: clubs
});

export const fetchHouseCouncil = () => (dispatch) => {
    
    dispatch(houseCouncilLoading(true));

    return fetch(baseUrl + 'houseCouncil')
    .then(response => {
        if(response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(houseCouncil => dispatch(addHouseCouncil(houseCouncil)))
    .catch(error => dispatch(houseCouncilFailed(error.message)));

}

export const houseCouncilLoading = () => ({
    type: ActionTypes.HOUSE_COUNCIL_LOADING
});

export const houseCouncilFailed = (errmess) => ({
    type: ActionTypes.HOUSE_COUNCIL_FAILED,
    payload: errmess
});

export const addHouseCouncil = (houseCouncil) => ({
    type: ActionTypes.ADD_HOUSE_COUNCIL,
    payload: houseCouncil
});

export const fetchCertificates = (certId) => (dispatch) => {

    dispatch(certificatesLoading(true));
    return fetch(baseUrl + 'certificate/' + certId)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(certificates =>  dispatch(addCertificates(certificates)))
        .catch(error =>  dispatch(certificatesFailed(error.message)));
}

export const certificatesLoading = () => ({
    type: ActionTypes.CERTIFICATES_LOADING
});

export const certificatesFailed = (errmess) => ({
    type: ActionTypes.CERTIFICATES_FAILED,
    payload: errmess
});

export const addCertificates = (certificates) => ({
    type: ActionTypes.ADD_CERTIFICATES,
    payload: certificates
});

export const postEvent = (eventName, eventDescription, tag, hostName, hostEmail,
                          anyCoHost, coHostName, coHostEmail, noParticipants, maxParticipants, mode, selectedDate,
                          startTime, endTime, support) => (dispatch) => {

    const newEvent = {
        eventName: eventName,
        eventDescription: eventDescription,
        tag: tag,
        hostName: hostName,
        hostEmail: hostEmail,
        anyCoHost: anyCoHost,
        coHostName: coHostName,
        coHostEmail: coHostEmail,
        noParticipants: noParticipants,
        maxParticipants: maxParticipants,
        mode: mode,
        selectedDate: selectedDate,
        startTime: startTime,
        endTime: endTime,
        support: support
    };

    newEvent.date = new Date().toISOString();

    return fetch(baseUrl + 'registerEvent', {
        method: 'POST',
        body: JSON.stringify(newEvent),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin"
    })
        .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response =>  alert(JSON.stringify(response)))
        .catch(error =>  { console.log('post event', error.message);
            alert('Your event could not be registered\nError: '+error.message);
        });
};


export const postGrievance = (studentName, studentId, type, grievance, anyAssistance) => (dispatch) => {

    const newGrievance = {
        studentName: studentName,
        studentId: studentId,
        type: type,
        grievance: grievance,
        anyAssistance: anyAssistance,
    };
    newGrievance.date = new Date().toISOString();
    
    return fetch(baseUrl + 'grievance', {
        method: 'POST',
        body: JSON.stringify(newGrievance),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            let error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(response =>  alert(JSON.stringify(response)))
    .catch(error =>  { console.log('post grievance', error.message);
        alert('Your grievance could not be posted\nError: '+error.message);
    });
};