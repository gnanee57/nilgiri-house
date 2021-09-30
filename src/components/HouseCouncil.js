import React from "react";
import useWindowSize from "./useWindowSize";
import {Card, CardBody, CardGroup, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Jumbotron,} from "reactstrap";
import houseCouncil from "../assests/jumbotron/nilgiri_council.jpg";
import houseStructure from '../assests/structure.png';
import viswadeep from '../assests/house_council_images/viswadeep.jpg';
import ponraj from '../assests/house_council_images/ponraj.jpg';
import saragupta from '../assests/house_council_images/saragupta.png';
import sowmya from '../assests/house_council_images/sowmya.jpg';
import gokul from '../assests/house_council_images/gokul.jpg';
import gnaneswar from '../assests/house_council_images/gnaneswar.jpg';
import {makeStyles} from "@material-ui/core/styles";
import {Avatar} from "@material-ui/core";
import GroupLeaders from "./GroupLeaders";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3.5),
        },
        justifyContent: 'center'
    },
    medium: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    small: {
        width: theme.spacing(32.5),
        height: theme.spacing(32.5),
    },
    large: {
        width: theme.spacing(45),
        height: theme.spacing(45),
    },
}));

function HouseCouncil() {
    const classes = useStyles();
    const size = useWindowSize();

    return (
        <>
            <Jumbotron className={'col-md-12 d-none d-sm-block'}>
                <img src={houseCouncil} width={size.width  - 17} height="500" />
            </Jumbotron>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Objectives of NHC</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText style={{fontFamily : 'Trebuchet MS', fontSize: 'large'}}>
                                    1. To foster and develop all student activities in the Nilgiri House <br />
                                    2. To Identify student issues and promote discussion on them <br />
                                    3. To develop a well-informed, articulate and participative student community life,
                                    and to increase social awareness.<br />
                                    4. To function as the office for all election/nominations of students for house
                                    activities.<br />
                                    5. To offer clerical and office support for all recognized student activities.<br />
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className={'col-md-6'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Nilgiri House Council Structure</CardTitle>
                            </CardHeader>
                            <div className={"row"}>
                                <div className={"col-md-2"} />
                                <div className={"col-md-8"}>
                                    <CardImg style={{justifyContent: 'center'}} height={"400 px"} src={houseStructure} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className={'row d-none d-lg-block'}>
                    <div className={'col-md-12'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Our Mentors</CardTitle>
                            </CardHeader>
                        </Card>
                        <CardGroup>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar src={viswadeep} className={classes.large} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Viswadeep V</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>Senior Engineer – Deployment of Digital Twin</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar src={ponraj} className={classes.large} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Ponraj BV</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>UHC - Mentor <br /> Co-Founder of Startup, Phd Scholar at NIT Trichy</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar src={saragupta} className={classes.large} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>SARA GUPTA</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>Associate Software Developer at Robert Bosch</CardSubtitle>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
                <div className={'row d-block d-sm-block d-md-block d-lg-none'}>
                    <div className={'col-md-12 d-block d-lg-none'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Our Mentors</CardTitle>
                            </CardHeader>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={viswadeep} className={classes.small} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'large',
                                    fontWeight: 'bold'
                                }}>Viswadeep V</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{
                                    justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS',
                                    fontStyle: 'italic',
                                    fontSize: 'medium',
                                }}>Senior Engineer – Deployment of Digital Twin</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={ponraj} className={classes.small} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'large',
                                    fontWeight: 'bold'
                                }}>Ponraj BV</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{
                                    justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS',
                                    fontStyle: 'italic',
                                    fontSize: 'medium',
                                }}>UHC - Mentor <br /> Co-Founder of Startup, Phd Scholar at NIT Trichy</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={saragupta} className={classes.small} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'large',
                                    fontWeight: 'bold'
                                }}>SARA GUPTA</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{
                                    justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS',
                                    fontStyle: 'italic',
                                    fontSize: 'medium',
                                }}>Associate Software Developer at Robert Bosch</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className={'row d-none d-lg-block'}>
                    <div className={'col-md-12'}>
                        <CardGroup>
                            <Card body outline className={'border-0 text-center'}>
                                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Secretary</CardTitle>
                                </CardHeader>
                                <div className={classes.root}>
                                    <Avatar src={sowmya} className={classes.large} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Sowmya Ramesh</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>[21f1001426]</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Deputy Secretary</CardTitle>
                                </CardHeader>
                                <div className={classes.root}>
                                    <Avatar src={gokul} className={classes.large} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Gokulakrishnan M</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        textTransform: 'uppercase',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>[21f1007026]</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Web Admin</CardTitle>
                                </CardHeader>
                                <div className={classes.root}>
                                    <Avatar src={gnaneswar} className={classes.large} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>KSS GNANESWAR SAI KUMAR</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        textTransform: 'uppercase',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>[21f1004073]</CardSubtitle>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
                <div className={'row d-block d-sm-block d-md-block d-lg-none'}>
                    <div className={'col-md-12'}>
                        <CardGroup>
                            <Card body outline className={'border-0 text-center'}>
                                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Secretary</CardTitle>
                                </CardHeader>
                                <div className={classes.root}>
                                    <Avatar src={sowmya} className={classes.medium} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Sowmya Ramesh</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>[21f1001426]</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Deputy Secretary</CardTitle>
                                </CardHeader>
                                <div className={classes.root}>
                                    <Avatar src={gokul} className={classes.medium} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Gokulakrishnan M</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        textTransform: 'uppercase',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>[21f1007026]</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Web Admin</CardTitle>
                                </CardHeader>
                                <div className={classes.root}>
                                    <Avatar src={gnaneswar} className={classes.medium} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily : 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>KSS GNANESWAR SAI KUMAR</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        textTransform: 'uppercase',
                                        fontFamily : 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>[21f1004073]</CardSubtitle>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-lg-12'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Our Group Leaders</CardTitle>
                            </CardHeader>
                        </Card>
                        <GroupLeaders />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HouseCouncil;