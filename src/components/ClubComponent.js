import React from "react";
import useWindowSize from "./useWindowSize";
import {Card, CardBody, CardHeader, CardText, CardTitle, Jumbotron} from "reactstrap";
import club from "../images/clubs.jpg";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Club() {
    const classes = useStyles();
    const size = useWindowSize();

    return (
        <>
            <Jumbotron className={'col-md-12 d-none d-sm-block'}>
                <img src={club} width={size.width  - 17} height="500" />
            </Jumbotron>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Student Clubs and Organizations</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText style={{fontFamily : 'Trebuchet MS', fontSize: 'large'}}>
                                    <p>Student Clubs operate internally and provide an opportunity to socialize and
                                        learn new leadership skills with peers and advisors. Student Clubs and Organizations
                                        are an important part of Nilgiri House Council (NHC). The NHC permits and provides
                                        for the recognition and chartering of Student Clubs and Organizations to promote
                                        the development of the social, intellectual, recreational, and professional
                                        interests of students. These Student Clubs and Organizations are subject to the
                                        policies and regulations of the IITM Online Degree Code of Conduct. Membership in
                                        all Student Clubs and Organizations is open to all the members of NHC.  </p>
                                    <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold', color: '#000'}}>
                                        Club Registrations:
                                    </h4>
                                    <h6 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'large', fontWeight: 'bold'}}>
                                        I. Intra House Clubs</h6>
                                    <div style={{marginLeft: '20px'}}>
                                        <p>a. Any member of Nilgiri House who wants to start a club within the house has to
                                            fill EOI (Expression of Interest) describing Name of the club, Goals of the club,
                                            Action plans for each term in a Year, Number of students supporting the club,
                                            proposed student executive body structure of the club and role and responsibilities
                                            of each executive body member, frequency of meeting of executive body as well as
                                            general body, quorum needed for both executive body meetings and general body.</p>
                                        <p>b. The EOI (Expression of Interest) form would be available on House Website.</p>
                                        <p>c. The Proposal is sent to the NHC, where EW accepts/rejects the Club to be formed.</p>
                                        <p>d. As these clubs are to be maintained virtually. Some of the sample clubs which can
                                            be maintained virtually are listed here (Members of the house can come with their own ideas) – </p>
                                        <ul style={{marginLeft: '30px'}}>
                                            <li>Art Club</li>
                                            <li>Academic Club</li>
                                            <li>Podcast Club</li>
                                            <li>Creative Computing (Coding Club)</li>
                                            <li>Creative Writing, Poetry, & Photography</li>
                                            <li>Music Production Club</li>
                                            <li>Photography Club</li>
                                            <li>TED-Ed Speech Club</li>
                                            <li>Music Appreciation Club</li>
                                            <li>Current Events Club</li>
                                            <li>Gaming Club</li>
                                            <li>Quiz club</li>
                                            <li>Speak out Club</li>
                                        </ul>
                                        <p>e. These clubs which registered at intra house level has to adhere to the NHC Honor code.</p>
                                        <p>f. Clubs get full support from the NHC in conducting Events or Advise
                                            regarding club Activities.</p>
                                    </div>
                                    <h6 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'large', fontWeight: 'bold'}}>
                                        II. Inter House Clubs</h6>
                                    <div style={{marginLeft: '20px'}}>
                                        <p>a. Any Member of Nilgiri House who wants to start a club within the students of IITM
                                            Online Degree Program can consult the House Secretary/ Deputy Secretary with
                                            their Expression of Interest (EOI), where Secretary can take the proposal to
                                            Upper House Council.</p>
                                        <p>b. The acceptance of the proposal is in the hand of Upper House Council (UHC).</p>
                                        <p>c. The Clubs can then be registered and further proceed based on the instructions of UHC.</p>
                                    </div>
                                </CardText>
                                <CardText style={{fontFamily : 'Trebuchet MS', fontSize: 'large'}}>
                                    <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold', color: '#000'}}>
                                        Membership Requirements:
                                    </h4>
                                    <h6 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'large', fontWeight: 'bold'}}>
                                        I. Intra House Clubs</h6>
                                    <div style={{marginLeft: '20px'}}>
                                        <p>a. All students in the House can become members of the clubs within the house and
                                            have to apply to be a part of it.</p>
                                        <p>b. Every student has to apply for a club membership to be part of the club.</p>
                                        <p>c. This club membership form will be available at Club’s website.</p>
                                        <p>d. Term of membership will be one year, after which renewal has to be done. </p>
                                        <p>e. Before taking the club membership, the house members are requested to visit the
                                            Nilgiri House Official Website, where they can check the officially registered
                                            clubs to avoid plagiarism.</p>
                                    </div>
                                    <h6 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'large', fontWeight: 'bold'}}>
                                        II. Inter House Clubs</h6>
                                    <div style={{marginLeft: '20px'}}>
                                        <p>a. All students in the House can become members of the clubs at Inter house level
                                            and have to apply to be a part of it.</p>
                                        <p>b. They have to adhere to the UHC Honor code.</p>
                                        <p>c. The members of the house if joined in the inter house clubs, have to inform
                                            the name of the club and relevant details to the respective group leader. </p>
                                    </div>
                                </CardText>
                                <CardText style={{fontFamily : 'Trebuchet MS', fontSize: 'large'}}>
                                    <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold', color: '#000'}}>
                                        Intra vs Inter House Clubs
                                    </h4>
                                    <div style={{marginLeft: '15px'}}>
                                        <p>a. The members of clubs at Inter house level can create a subset of the club within
                                            the Intra house level, with the permission of EW, to provide effective participation
                                            of the house members at Inter House level.</p>
                                        <p>b. These subsets of clubs will get all the support from NHC which is generally provided
                                            to registered clubs at Intra House level. </p>
                                    </div>
                                    <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold', color: '#000'}}>
                                        Structure and Governing body of the club
                                    </h4>
                                    <h6 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'large', fontWeight: 'bold'}}>
                                        I. Intra House Clubs</h6>
                                    <div style={{marginLeft: '20px'}}>
                                        <p>a. The following are the minimum roles expected in the club: Secretary, WebAdmin,
                                            Executive Member. Additional roles can be decided based on the type of activity of the club. </p>
                                        <p>b. The tenure of the role will be for a year</p>
                                        <p>c. Minimum Roles and Responsibilities - Club Secretaries will have overall
                                            responsibility for the club activities, WebAdmin will handle website and other application
                                            handles, Executive Members will be part of implementation teams for the various activities.
                                            For each additional role, the executive body will have to clearly define the responsibilities
                                            and justify the need from the general body</p>
                                        <p>d. All events and activities of the club have to be mandatorily approved by the EW of the NHC</p>
                                        <p>e. One student One Position - A student will not be allowed to have more than one
                                            executive position across various clubs and houses</p>
                                        <p>f. At the end of the tenure of the governing body, an election commission has to be
                                            formed within the club and they should conduct a democratic, free and fair elections
                                            following the guidelines of NHC’s Election Process.</p>
                                    </div>
                                    <h6 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                        textTransform: 'capitalize', fontSize: 'large', fontWeight: 'bold'}}>
                                        II. Inter House Clubs</h6>
                                    <div style={{marginLeft: '20px'}}>
                                        <p>a. The Structure and Governing body of the club is decided by the UHC</p>
                                    </div>
                                </CardText>
                            </CardBody>
                            <div style={{ display: "flex" }}>
                                <Button  className={classes.button} variant="outlined" color="primary"
                                         style={{ marginRight: "auto" }} endIcon={<ArrowRightIcon />}>
                                    <Link to={'/clubs/clubsList'}>
                                        Click here to see the list of Clubs
                                    </Link>
                                </Button>
                                <Button  className={classes.button} variant="outlined" color="primary"
                                         style={{ marginLeft: "auto" }} endIcon={<ArrowRightIcon />}>
                                    <Link to={'#'}>
                                        Click here to register a Club
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Club;