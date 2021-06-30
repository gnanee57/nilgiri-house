import React from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron} from "reactstrap";
import pastEventBanner from "../nilgiri_past.jpg";

function PastEvents() {
    const size = useWindowSize();

    return (
        <div>
            <Jumbotron>
                <img src={pastEventBanner} width={size.width - 17} height="440" />
            </Jumbotron>
        </div>
    );
}

export default PastEvents;