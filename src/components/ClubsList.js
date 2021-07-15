import React from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron} from "reactstrap";
import clubList from "../images/listClubs.png";

function ClubsList() {
    const size = useWindowSize();

    return (
        <>
            <Jumbotron>
                <img src={clubList} width={size.width - 17} height="500" />
            </Jumbotron>
            <div className="container-fluid">
                <div className="row m-4">
                    <div className="col-12 col-md-6">
                        <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                            Updated Soon...
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClubsList;