import React, {useEffect, useState} from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron, Media} from "reactstrap";
import clubList from "../assests/jumbotron/listClubs.png";
import {Loading} from "./LoadingComponent";

function ClubsList(props) {

    React.useEffect(() => {
        document.title = 'Nilgiri Clubs & Societies';
    }, []);

    const size = useWindowSize();

    /*const [wallContent, setWallContent] = useState([]);

    useEffect(() => {
        setWallContent(props.wallContent);
    }, []);*/


    /*if (props.isLoading/!* || props.wallContent === []*!/) {
        return (
            <Loading />
        );
    } else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        );
    } else {*/
        return (
            <div>
                <Jumbotron className={'col-md-12 d-none d-sm-block'}>
                    <img src={clubList} width={size.width - 17} height="500"/>
                </Jumbotron>
                <div className="container-fluid">
                    <div className="row m-4">
                        <div className="col-12 col-md-6">
                            <h4 style={{
                                justifyContent: 'center', fontFamily: 'Trebuchet MS', fontStyle: 'normal',
                                textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'
                            }}>
                                Updated Soon...
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
   /* }*/
}

export default ClubsList;