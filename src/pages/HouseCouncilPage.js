import React, {useEffect} from "react";
import {Card, CardBody, CardGroup, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import houseStructure from '../assests/structure.png';
import {makeStyles} from "@material-ui/core/styles";
import {Avatar} from "@material-ui/core";
import {Loading} from "./LoadingPage";
import {fetchHouseCouncil} from "../redux/ActionCreators";
import {useDispatch, useSelector} from "react-redux";

const useStyles1 = makeStyles((theme) => ({
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

const useStyles2 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3.5),
        },
        justifyContent: 'center',
    },
    small: {
        width: theme.spacing(32.5),
        height: theme.spacing(32.5),
    },
    medium: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
}));

function HouseCouncil() {

    const houseCouncil=  useSelector(state => state.houseCouncil);

    const dispatch = useDispatch();

    useEffect(async() => {
        document.title = 'Nilgiri House Council';
        dispatch(fetchHouseCouncil());
    }, []);

    const classes = useStyles1();
    const classes1 = useStyles2();

    if (houseCouncil.loading) {
        return (
            <Loading />
        );
    } else if (houseCouncil.errMess) {
        return (
            <h4>{houseCouncil.errMess}</h4>
        );
    } else {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={{
                    backgroundImage : 'url("https://drive.google.com/uc?export=download&id=1qO5xSdbYBpkvvqMLrvbWCObV5o9dCweC")',
                    backgroundSize : 'cover',
                    opacity: '0.8'
                }} />
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <Card body outline className={'border-0'}>
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Objectives of NHC</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardText style={{fontFamily: 'Trebuchet MS', fontSize: 'large'}}>
                                        1. To foster and develop all student activities in the Nilgiri House <br/>
                                        2. To Identify student issues and promote discussion on them <br/>
                                        3. To develop a well-informed, articulate and participative student community
                                        life,
                                        and to increase social awareness.<br/>
                                        4. To function as the office for all election/nominations of students for house
                                        activities.<br/>
                                        5. To offer clerical and office support for all recognized student
                                        activities.<br/>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className={'col-md-6'}>
                            <Card body outline className={'border-0'}>
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Nilgiri House Council Structure</CardTitle>
                                </CardHeader>
                                <div className={"row"}>
                                    <div className={"col-md-2"}/>
                                    <div className={"col-md-8"}>
                                        <CardImg style={{justifyContent: 'center'}} height={"400 px"}
                                                 src={houseStructure}/>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className={'row d-none d-lg-block'}>
                        <div className={'col-md-12'}>
                            <Card body outline className={'border-0'}>
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Mentors</CardTitle>
                                </CardHeader>
                            </Card>

                            <CardGroup>
                                <Card body outline className={'border-0 text-center'}>
                                    <div className={classes.root}>
                                        <Avatar
                                            src={'https://drive.google.com/uc?export=download&id=1YXMviQ43ByX2ZAah6BQs6ZMUivcC1OeZ'}
                                            className={classes.large}/>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" style={{
                                            fontFamily: 'Trebuchet MS',
                                            textTransform: 'uppercase',
                                            fontSize: 'large',
                                            fontWeight: 'bold'
                                        }}>Viswadeep V</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" style={{
                                            justifyContent: 'center',
                                            fontFamily: 'Trebuchet MS',
                                            fontStyle: 'italic',
                                            fontSize: 'medium',
                                        }}>Senior Engineer – Deployment of Digital Twin</CardSubtitle>
                                    </CardBody>
                                </Card>
                                <Card body outline className={'border-0 text-center'}>
                                    <div className={classes.root}>
                                        <Avatar
                                            src={'https://drive.google.com/uc?export=download&id=1UiX8aVeO8GyQ1M3hvRS5mCwjtnU5UIW4'}
                                            className={classes.large}/>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" style={{
                                            fontFamily: 'Trebuchet MS',
                                            textTransform: 'uppercase',
                                            fontSize: 'large',
                                            fontWeight: 'bold'
                                        }}>Ponraj BV</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" style={{
                                            justifyContent: 'center',
                                            fontFamily: 'Trebuchet MS',
                                            fontStyle: 'italic',
                                            fontSize: 'medium',
                                        }}>UHC - Mentor <br/> Co-Founder of Startup, Phd Scholar at NIT
                                            Trichy</CardSubtitle>
                                    </CardBody>
                                </Card>
                                <Card body outline className={'border-0 text-center'}>
                                    <div className={classes.root}>
                                        <Avatar
                                            src={'https://drive.google.com/uc?export=download&id=1cyH4QOjvqVf9VI-7g-5t2bSZLm6_EGTg'}
                                            className={classes.large}/>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" style={{
                                            fontFamily: 'Trebuchet MS',
                                            textTransform: 'uppercase',
                                            fontSize: 'large',
                                            fontWeight: 'bold'
                                        }}>SARA GUPTA</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" style={{
                                            justifyContent: 'center',
                                            fontFamily: 'Trebuchet MS',
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
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Mentors</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar
                                        src={'https://drive.google.com/uc?export=download&id=1YXMviQ43ByX2ZAah6BQs6ZMUivcC1OeZ'}
                                        className={classes.small}/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Viswadeep V</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>Senior Engineer – Deployment of Digital Twin</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar
                                        src={'https://drive.google.com/uc?export=download&id=1UiX8aVeO8GyQ1M3hvRS5mCwjtnU5UIW4'}
                                        className={classes.small}/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Ponraj BV</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>UHC - Mentor <br/> Co-Founder of Startup, Phd Scholar at NIT
                                        Trichy</CardSubtitle>
                                </CardBody>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar
                                        src={'https://drive.google.com/uc?export=download&id=1cyH4QOjvqVf9VI-7g-5t2bSZLm6_EGTg'}
                                        className={classes.small}/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>SARA GUPTA</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>Associate Software Developer at Robert Bosch</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className={'row'}>
                        <div className={'col-md-6'}>
                            <Card body outline className={'border-0'}>
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Student Constitution Steering Committee Member</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar
                                        src={'https://drive.google.com/uc?export=download&id=1LvhDPvK3s8R6295TgpUjCsdNqnEIksd6'}
                                        className={classes.large}/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Sowmya Ramesh</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>Ex-Secretary of Nilgiri House (May 2021 - Nov 2021)</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className={'col-md-6'}>
                            <Card body outline className={'border-0'}>
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Academic Affairs Coordinator - SEC</CardTitle>
                                </CardHeader>
                            </Card>
                            <Card body outline className={'border-0 text-center'}>
                                <div className={classes.root}>
                                    <Avatar
                                        src={'https://drive.google.com/uc?export=download&id=1ulCqx1bfdyoqTMOGucBcGCYR2jRmmEiH'}
                                        className={classes.large}/>
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'large',
                                        fontWeight: 'bold'
                                    }}>Gokulakrishnan. M</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'medium',
                                    }}>Ex-Secretary of Nilgiri House (Dec 2021 - Feb 2022) <br/>
                                        Ex-Deputy Secretary of Nilgiri House (May 2021 - Nov 2021)
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className={'row d-none d-lg-block'}>
                        <div className={'col-md-12'}>
                            <CardGroup>
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Secretary').map(student =>
                                    <Card body outline className={'border-0 text-center'}>
                                        <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'x-large',
                                                fontWeight: 'bold'
                                            }}>Our Secretary</CardTitle>
                                        </CardHeader>
                                        <div className={classes.root}>
                                            <Avatar src={student.downloadUrl} className={classes.large}/>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'large',
                                                fontWeight: 'bold'
                                            }}>{student.studentName}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily: 'Trebuchet MS',
                                                fontStyle: 'italic',
                                                fontSize: 'medium',
                                            }}>Ex-Deputy Secretary of Nilgiri House (Dec 2021 - Feb 2022)</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                )}
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Deputy Secretary').map(student =>
                                    <Card body outline className={'border-0 text-center'}>
                                        <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'x-large',
                                                fontWeight: 'bold'
                                            }}>Our Deputy Secretary</CardTitle>
                                        </CardHeader>
                                        <div className={classes.root}>
                                            <Avatar src={student.downloadUrl} className={classes.large}/>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'large',
                                                fontWeight: 'bold'
                                            }}>{student.studentName}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontStyle: 'italic',
                                                fontSize: 'medium',
                                            }}>[{student.studentId}]</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                )}
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Web Admin').map(student =>
                                    <Card body outline className={'border-0 text-center'}>
                                        <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'x-large',
                                                fontWeight: 'bold'
                                            }}>Our Web Admin</CardTitle>
                                        </CardHeader>
                                        <div className={classes.root}>
                                            <Avatar src={student.downloadUrl} className={classes.large}/>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'large',
                                                fontWeight: 'bold'
                                            }}>{student.studentName}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontStyle: 'italic',
                                                fontSize: 'medium',
                                            }}>[{student.studentId}]</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                )}
                            </CardGroup>
                        </div>
                    </div>
                    <div className={'row d-block d-sm-block d-md-block d-lg-none'}>
                        <div className={'col-md-12'}>
                            <CardGroup>
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Secretary').map(student =>
                                    <Card body outline className={'border-0 text-center'}>
                                        <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'x-large',
                                                fontWeight: 'bold'
                                            }}>Our Secretary</CardTitle>
                                        </CardHeader>
                                        <div className={classes.root}>
                                            <Avatar src={student.downloadUrl} className={classes.medium}/>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'large',
                                                fontWeight: 'bold'
                                            }}>{student.studentName}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontStyle: 'italic',
                                                fontSize: 'medium',
                                            }}>[{student.studentId}]</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                )}
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Deputy Secretary').map(student =>
                                    <Card body outline className={'border-0 text-center'}>
                                        <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'x-large',
                                                fontWeight: 'bold'
                                            }}>Our Deputy Secretary</CardTitle>
                                        </CardHeader>
                                        <div className={classes.root}>
                                            <Avatar src={student.downloadUrl} className={classes.medium}/>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'large',
                                                fontWeight: 'bold'
                                            }}>{student.studentName}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontStyle: 'italic',
                                                fontSize: 'medium',
                                            }}>[{student.studentId}]</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                )}
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Web Admin').map(student =>
                                    <Card body outline className={'border-0 text-center'}>
                                        <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'x-large',
                                                fontWeight: 'bold'
                                            }}>Our Web Admin</CardTitle>
                                        </CardHeader>
                                        <div className={classes.root}>
                                            <Avatar src={student.downloadUrl} className={classes.medium}/>
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" style={{
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontSize: 'large',
                                                fontWeight: 'bold'
                                            }}>{student.studentName}</CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily: 'Trebuchet MS',
                                                textTransform: 'uppercase',
                                                fontStyle: 'italic',
                                                fontSize: 'medium',
                                            }}>[{student.studentId}]</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                )}
                            </CardGroup>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-lg-12'}>
                            <Card body outline className={'border-0'}>
                                <CardHeader className={'text-center'} style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        fontFamily: 'Trebuchet MS',
                                        textTransform: 'uppercase',
                                        fontSize: 'x-large',
                                        fontWeight: 'bold'
                                    }}>Our Group Leaders</CardTitle>
                                </CardHeader>
                            </Card>
                            <div className={"row"}>
                                {houseCouncil.houseCouncil.filter(student => student.role === 'Group Leader').map(student =>
                                    <div className={"col-lg-3 col-md-6"}>
                                        <Card body outline className={'border-0 text-center'}>
                                            <div className={classes1.root}>
                                                <Avatar src={student.downloadUrl} className={classes1.medium}/>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" style={{
                                                    fontFamily: 'Trebuchet MS', textTransform: 'uppercase',
                                                    fontSize: 'large', fontWeight: 'bold'
                                                }}>{student.studentName}</CardTitle>
                                                <CardSubtitle className="mb-2 text-muted" style={{
                                                    justifyContent: 'center',
                                                    fontFamily: 'Trebuchet MS',
                                                    textTransform: 'uppercase',
                                                    fontStyle: 'italic',
                                                    fontSize: 'medium',
                                                }}>Group Id: {student.groupId}
                                                    <br/> [{student.studentId}]</CardSubtitle>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HouseCouncil;