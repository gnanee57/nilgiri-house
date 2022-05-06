import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "./HeaderComponent";
import Navbar from "./TopMenu";
import Home from "./homePage/HomePage";
import About from "./AboutPage";
import Club from "./clubs/ClubsRulesPage"
import ClubsList from "./clubs/ClubsListPage";
import EventsCalendar from "./events/EventCalendarPage";
import Events from "./events/EventsListPage";
import Wall from "./WallPage";
import HouseCouncil from "./HouseCouncilPage";
import Announcements from "./AnnouncementPage";
import GrievanceForm from "./GrievanceForm"
import FooterPage from "./FooterComponent";
import EventRegistration from "./events/EventRegistration";
import FetchCertificate from "./FetchCertificate";
import VerifyCertificates from './VerifyCertificate';
import {fetchWallContent, fetchCertificates, fetchEvents} from "../redux/ActionCreators";
import EventDetail from "./events/EventDetailPage";
import ScrollToTop from "../components/ScrollToTop";


function Main() {

    const wallContent=  useSelector(state => state.wallContent);
    const certificates=  useSelector(state => state.certificates);
    const events=  useSelector(state => state.events);

    const dispatch = useDispatch();

    const [certId, setCertId] = useState();

    const handleCertSearch = certId => {
        setCertId(certId);
    }

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
            <ScrollToTop>
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
            </ScrollToTop>
            <FooterPage />
        </div>
    );
}

export default withRouter(Main);