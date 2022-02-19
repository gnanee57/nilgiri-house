import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
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
import FetchCertificate from "./FetchCertificate";
import VerifyCertificates from './VerifyCertificate';
import {fetchWallContent, fetchCertificates} from "../redux/ActionCreators";


function Main() {

    const wallContent=  useSelector(state => state.wallContent);
    const certificates=  useSelector(state => state.certificates);

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
                    path="/events"
                    component={() => (<Events />)}
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