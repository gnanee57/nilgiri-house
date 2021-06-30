import React from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron} from "reactstrap";
import aboutBanner from "../nilgiri_about.jpg";

function About() {
    const size = useWindowSize();

    return (
        <div>
            <Jumbotron>
                <img src={aboutBanner} width={size.width - 17} height="440" />
            </Jumbotron>
        </div>
    );
}

export default About;