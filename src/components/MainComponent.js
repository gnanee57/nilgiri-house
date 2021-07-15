import React, {useEffect, useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Club from "./ClubComponent"
import ClubsList from "./ClubsList";
import Events from "./EventComponent";
import Wall from "./WallComponent";
import { GALLERYCONTENT } from "../shared/galleryContent";
import HouseCouncil from "./HouseCouncil";
import Announcements from "./Announcements";
import Header from "./HeaderComponent";
import FooterPage from "./FooterComponent";
import EventRegistration from "./EventRegistration";


function Main(props) {


    const [galleryContent] = useState(GALLERYCONTENT);


    return (
        <div>
            <Header />
            <Switch>
                <Route
                    path="/home"
                    component={() => (<Home featuredContent={galleryContent.filter(content => content.featured === 1)}/>)} />
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
                    component={() => (<Events />)}
                />
                <Route
                    path="/events/eventRegistration"
                    component={() => (<EventRegistration />)}
                />
                <Route
                    path="/wall"
                    component={() => (

                            <Wall galleryContent={galleryContent}/>
                    )}
                />
                <Route
                    path="/houseCouncil"
                    component={() => (<HouseCouncil/>)}
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
                <Redirect to="/home" />
            </Switch>
            <FooterPage />
        </div>
    );
}

export default Main;