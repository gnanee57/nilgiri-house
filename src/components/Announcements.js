import React from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron} from "reactstrap";
import announcement from "../announce.jpg";

function Announcements() {
    const size = useWindowSize();

    return (
        <div>
            <Jumbotron>
                <img src={announcement} width={size.width - 17} height="440" />
            </Jumbotron>
        </div>
    );
}

export default Announcements;