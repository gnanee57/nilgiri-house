import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect, withRouter, Link} from "react-router-dom";
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
import {fetchWallContent, fetchCertificates, fetchEvents, fetchCourses, fetchReviews} from "../redux/ActionCreators";
import EventDetail from "./events/EventDetailPage";
import ScrollToTop from "../components/ScrollToTop";
import CourseMenu from "./courses/CourseMenuComponent";
import CourseDetail from "./courses/CourseDetailComponent";
import WhatsAppGroups from "./WhatsAppGroups";


function Main() {

    const wallContent=  useSelector(state => state.wallContent);
    const certificates=  useSelector(state => state.certificates);
    const events=  useSelector(state => state.events);
    const courses = useSelector(state => state.courses);
    const reviews = useSelector(state => state.reviews);

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
        dispatch(fetchEvents());
    }, []);

    useEffect(async () => {
        dispatch(fetchCourses());
    }, []);

    useEffect(async() => {
        dispatch(fetchReviews());
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

    const CourseWithId = ({ match }) => {
        return (
            <CourseDetail
                course={
                    courses.courses.filter(
                        course => course.id === match.params.courseId
                    )[0]
                }
                isLoading={courses.isLoading}
                errMess={courses.errMess}
                reviews={reviews.reviews.filter(
                    review => review.courseId === match.params.courseId
                )}
                reviewsErrMess={reviews.errMess}
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
                            featuredContentErrMess={wallContent.errMess} />
                        )}
                    />
                    <Route
                        exact
                        path="/courses"
                        component={() => (
                            <CourseMenu
                                courses={courses.courses}
                                isLoading={courses.isLoading}
                                errMess={courses.errMess}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/courses/:courseId"
                        component={CourseWithId}
                    />
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
                        exact
                        path="/clubs/academia/membership"
                        component={() => {
                                window.location.replace("https://forms.gle/41PHdBDwrFpd6zZ98");
                                return null;
                            }
                        }
                    />
                    <Route
                        exact
                        path="/clubs/academia/groups"
                        component={() => (<WhatsAppGroups />)}
                    />
                    <Route
                        exact
                        path="/clubs/quiz/membership"
                        component={() => {
                                window.location.replace("https://forms.gle/pbRjwuc1gaQN3fSy5");
                                return null;
                            }
                        }
                    />
                    <Route
                        exact
                        path="/clubs/sports/membership"
                        component={() => {
                                window.location.replace("https://forms.gle/Nt5iwQ3rYSWJw7qW9");
                                return null;
                            }
                        }
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