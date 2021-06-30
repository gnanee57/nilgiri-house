import React from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron} from "reactstrap";
import houseCouncil from "../nilgiri_council.jpg";

function HouseCouncil() {
    const size = useWindowSize();

    return (
        <div>
            <Jumbotron>
                <img src={houseCouncil} width={size.width - 17} height="440" />
            </Jumbotron>
        </div>
    );
}

export default HouseCouncil;