import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Navbar from "./TopMenu";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Club from "./ClubComponent"
import ClubsList from "./ClubsList";
import EventsCalendar from "./EventCalendarComponent";
import Events from "./EventsComponent";
import Wall from "./WallComponent";
import HouseCouncil from "./HouseCouncil";
import Announcements from "./Announcements";
import GrievanceForm from "./GrievanceForm"
import FooterPage from "./FooterComponent";
import EventRegistration from "./EventRegistration";
import {fetchBirthday, fetchStudentDetails, fetchEvents, fetchWallContent,
    fetchClubs, fetchHouseCouncil, fetchCertificates,
    postEvent, postGrievance } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        birthday: state.birthday,
        studentDetails: state.studentDetails,
        events: state.events,
        wallContent: state.wallContent,
        clubs: state.clubs,
        houseCouncil: state.houseCouncil,
        certificates: state.certificates
    };
};


const mapDispatchToProps = dispatch => ({
    postEvent: (eventName, eventDescription, tag, hostName, hostEmail,
                            anyCoHost, coHostName, coHostEmail, noParticipants, maxParticipants, mode, selectedDate,
                            startTime, endTime, support) =>
        dispatch(postEvent(eventName, eventDescription, tag, hostName, hostEmail,
            anyCoHost, coHostName, coHostEmail, noParticipants, maxParticipants, mode, selectedDate,
            startTime, endTime, support)),

    postGrievance: (studentName, studentId, type, grievance, anyAssistance) =>
        dispatch(postGrievance(studentName, studentId, type, grievance, anyAssistance)),

    fetchBirthday: () => {
        dispatch(fetchBirthday());
    },
    fetchStudentDetails: (studentId) => {
        dispatch(fetchStudentDetails(studentId));
    },
    fetchEvents: () => {
        dispatch(fetchEvents());
    },
    fetchWallContent: () => {
        dispatch(fetchWallContent());
    },
    fetchClubs: () => {
        dispatch(fetchClubs());
    },
    fetchHouseCouncil: () => {
        dispatch(fetchHouseCouncil());
    },
    fetchCertificates: () => {
        dispatch(fetchCertificates());
    }

});


function Main(props) {

    const [studentId, setStudentId] = useState();

    const handleSearch = rollNum => {
        setStudentId(rollNum);
    }

    useEffect(async() => {
        props.fetchStudentDetails(studentId);
    }, [studentId]);


    useEffect(async() => {
        props.fetchBirthday();
    }, []);

    useEffect(async() => {
        props.fetchEvents();
    }, []);

    useEffect(async() => {
        props.fetchWallContent();
    }, []);

    useEffect(async() => {
        props.fetchClubs();
    }, []);

    useEffect(async() => {
        props.fetchHouseCouncil();
    }, []);

    useEffect(async() => {
        props.fetchCertificates();
    }, []);



    return (
        <div>
            <Header />
            <Navbar />
            <Switch>
                <Route
                    path="/home"
                    component={() => (
                        <Home
                            birthday={props.birthday.birthday}
                            birthdayLoading={props.birthday.isLoading}
                            birthdayErrMess={props.birthday.errMess}
                            featuredContent={props.wallContent.wallContent.filter(content => content.featured === "TRUE")}
                            featuredContentLoading={props.wallContent.isLoading}
                            featuredContentErrMess={props.wallContent.errMess}
                            handleSearch = {handleSearch}
                            studentDetails={props.studentDetails.studentDetails}
                            studentDetailsLoading={props.studentDetails.isLoading}
                            studentDetailsErrMess={props.studentDetails.errMess}
                        />
                    )} />
                <Route
                    exact
                    path="/clubs"
                    component={() => (<Club />)}
                />
                <Route
                    exact
                    path="/clubs/clubsList"
                    component={() => (<ClubsList/>)}
                />
                <Route
                    path="/events/eventsCalendar"
                    component={() => (<EventsCalendar />)}
                />
                <Route
                    path="/events"
                    component={() => (<Events
                        events={props.events.events}
                        eventsLoading={props.events.isLoading}
                        eventsErrMess={props.events.errMess}
                    />)}
                />
                <Route
                    path="/events/eventRegistration"
                    component={() => (<EventRegistration
                        postEvent = {props.postEvent}
                    />)}
                />
                <Route
                    path="/wall"
                    component={() => (
                        <Wall
                            wallContent={props.wallContent.wallContent}
                            wallContentLoading={props.wallContent.isLoading}
                            wallContentErrMess={props.wallContent.errMess}
                        />
                    )}
                />
                <Route
                    path="/houseCouncil"
                    component={() => (<HouseCouncil
                        houseCouncil={props.houseCouncil.houseCouncil}
                        houseCouncilLoading={props.houseCouncil.isLoading}
                        houseCouncilErrMess={props.houseCouncil.errMess}
                    />)}
                />
                <Route
                    exact
                    path="/about"
                    component={() => (<About/>)}
                />
                <Route
                    exact
                    path="/announcements"
                    component={() => (<Announcements />)}
                />
                <Route
                    path="/grievance-form"
                    component={() => (<GrievanceForm
                        postGrievance = {props.postGrievance}
                    />)}
                />
                <Redirect to="/home" />
            </Switch>
            <FooterPage />
        </div>
    );
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
);