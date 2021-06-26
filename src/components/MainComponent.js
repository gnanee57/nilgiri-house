import React, {useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Club from "./ClubComponent"
import ClubsList from "./ClubsList";
import Events from "./EventComponent";
import PastEvents from "./PastEvents";
import Wall from "./WallComponent";
import { GALLERYCONTENT } from "../shared/galleryContent";
import HouseCouncil from "./HouseCouncil";
import Announcements from "./Announcements";
import Header from "./HeaderComponent";

function Main() {

    const [galleryContent] = useState(GALLERYCONTENT);

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={() => (<Home />)} />
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
                    path="/events"
                    component={() => (<Events />)}
                />
                <Route
                    path="/events/pastEvents"
                    component={() => (<PastEvents />)}
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
            <Footer />
        </div>
    );
}

export default Main;