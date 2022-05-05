import React, {useEffect, useLayoutEffect, useState} from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';
import {useDispatch, useSelector} from "react-redux";
import Header from "./pages/HeaderComponent";
import Navbar from "./pages/TopMenu";
import Home from "./pages/HomeComponent";
import About from "./pages/AboutComponent";
import Club from "./pages/ClubComponent"
import ClubsList from "./pages/ClubsList";
import EventsCalendar from "./pages/EventCalendarComponent";
import Events from "./pages/EventsComponent";
import Wall from "./pages/WallComponent";
import HouseCouncil from "./pages/HouseCouncil";
import Announcements from "./pages/Announcements";
import GrievanceForm from "./pages/GrievanceForm"
import FooterPage from "./pages/FooterComponent";
import EventRegistration from "./pages/EventRegistration";
import FetchCertificate from "./pages/FetchCertificate";
import VerifyCertificates from './pages/VerifyCertificate';
import {fetchWallContent, fetchCertificates, fetchEvents} from "./redux/ActionCreators";
import EventDetail from "./pages/EventDetail";


function Main() {

    const wallContent=  useSelector(state => state.wallContent);
    const certificates=  useSelector(state => state.certificates);
    const events=  useSelector(state => state.events);

    const dispatch = useDispatch();

    const [certId, setCertId] = useState();

    const handleCertSearch = certId => {
        setCertId(certId);
    }

    const history = createBrowserHistory();

    history.listen(_ => {
        window.scrollTo(0, 0)
    })



    useEffect(async() => {
        dispatch(fetchWallContent());
    }, []);

    useEffect(async() => {
        dispatch(fetchCertificates(certId));
    }, [certId]);

    useEffect(async() => {
        document.title = 'Nilgiri Events';
        dispatch(fetchEvents());
    }, []);


    const EventWithId = ({ match }) => {
        return (
            <EventDetail
                event={
                    events.events.filter(
                        event => event.eventId === match.params.eventId
                    )[0]
                }
                isLoading={events.isLoading}
                errMess={events.errMess}
            />
        );
    };


    return (
        <div>
            <Header />
            <Navbar />
                <Switch>
                    <Route
                        path="/home"
                        component={() => (
                            <Home
                                featuredContent={wallContent.wallContent.filter(content => content.featured === "TRUE")}
                                featuredContentLoading={wallContent.isLoading}
                                featuredContentErrMess={wallContent.errMess}
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
                        component={() => (<ClubsList />)}
                    />
                    <Route
                        path="/events/eventsCalendar"
                        component={() => (<EventsCalendar />)}
                    />
                    <Route
                        path="/events/eventRegistration"
                        component={() => (<EventRegistration />)}
                    />

                    <Route
                        path="/events/certificates"
                        component={() => (<FetchCertificate />)}
                    />

                    <Route
                        exact
                        path="/events"
                        component={() => (
                                <Events
                                    events={events.events}
                                    eventsLoading={events.isLoading}
                                    eventsErrMess={events.errMess}/>
                        )}
                    />
                    <Route
                        path="/events/:eventId"
                        component={EventWithId}
                    />
                    <Route
                        path={"/certificates/search"}
                        component={() => (<VerifyCertificates
                            handleCertSearch = {handleCertSearch}
                            certificates={certificates.certificates}
                            certificatesLoading={certificates.isLoading}
                            certificatesErrMess={certificates.errMess}
                        />)}
                    />

                    <Route
                        path="/wall"
                        component={() => (
                            <Wall
                                wallContent={wallContent.wallContent}
                                wallContentLoading={wallContent.isLoading}
                                wallContentErrMess={wallContent.errMess}
                            />
                        )}
                    />
                    <Route
                        path="/houseCouncil"
                        component={() => (<HouseCouncil />)}
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
                        component={() => (<GrievanceForm />)}
                    />
                    <Redirect to="/home" />
                </Switch>
            <FooterPage />
        </div>
    );
}

export default withRouter(Main);