import React from "react";
import useWindowSize from "./useWindowSize";
import {Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Jumbotron} from "reactstrap";
import aboutBanner from "../assests/jumbotron/nilgiri_about.jpg";
import logo from "../assests/nilgiri_transparent.png";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import LaunchIcon from '@material-ui/icons/Launch';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PeopleIcon from '@material-ui/icons/People';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from "moment";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    primaryTail: {
        backgroundColor: theme.palette.primary.main,
    }
}));

function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HomeWorkIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {moment('2021-05-15').format("MMM Do YYYY")}
                        </Typography>
                        <Typography>Formation of first Nilgiri House Council (NHC)</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <PeopleIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {moment('2021-05-14').format("MMM Do YYYY")}
                        </Typography>
                        <Typography>Election of Secretary / Dep. Secretary / Web Admin</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <AssignmentIndIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {moment('2021-05-10').format("MMM Do YYYY")}
                        </Typography>
                        <Typography>Selection of Mentors</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <PhotoSizeSelectSmallIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.primaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {moment('2021-04-28').format("MMM Do YYYY")}
                        </Typography>
                        <Typography>Election of Group Leaders</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <LaunchIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            {moment('2021-04-23').format("MMM Do YYYY")}
                        </Typography>
                        <Typography>Launch of Houses & Clubs</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

function About() {

    React.useEffect(() => {
        document.title = 'Nilgiri : About Us'
    }, []);

    const size = useWindowSize();

    return (
        <div>
            <Jumbotron className={'col-md-12 d-none d-xl-block'}>
                <img src={aboutBanner} width={size.width  - 17} height="500" />
            </Jumbotron>
            <Jumbotron className='col-md-12 d-xl-none' style={{
                backgroundColor: "#c6c4ff"
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 align-self-center mt-2">
                            <CardTitle tag="h5" style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: 'floralwhite',
                                fontFamily : 'Trebuchet MS',
                                fontSize: 'xx-large',
                                fontWeight: 'bold'
                            }}>About Us</CardTitle>
                            <CardTitle tag="h5" style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: 'floralwhite',
                                fontFamily : 'Trebuchet MS',
                                fontSize: 'large',
                                fontWeight: 'bold'
                            }}>Nilgiris and more... </CardTitle>
                        </div>
                        <div className="col-12 col-sm-3 align-self-center mt-2"/>
                        <div className="col-12 col-sm-3 align-self-center mt-2">
                            <img src={logo} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className="container-fluid">
                <div className="row m-4">
                    <div className="col-12 col-md-6">
                        <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                            The Name 'Nilgiri'...
                        </h4>
                        <div style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS',
                            fontSize: 'large'}}>
                            <p>The name "Nilgiri" of Nilgiri House came from the Nilgiri Hills and Nilgiri Biosphere Reserve.</p>
                            <p>Nilgiris, one of the oldest mountain ranges, located at the tri-junction of Tamil Nadu, Kerala
                                and Karnataka. Nilgiris is a part of the Western Ghats. Ooty the “Queen of Hill Stations”,
                                Coonoor 19 kms from Ooty and Kotagiri 31 kms from Ooty, are the three hill stations of this
                                district.</p>
                            <p>Rolling grasslands, dense sholas, waterfalls, streams, lakes, vast expanse of tea plantations,
                                interspersed with vegetable gardens, spectacular view points, an amazing variety of flora and
                                fauna, fabulous trekking trails, innumerable heritage sites, spell binding sunrises and sunsets,
                                magical light, pollution free atmosphere, mist, clouds, fog, star studded skies, serenity etc.</p>
                            <p>
                                Nilgiris presents a truly breathtaking kaleidoscope of visual treats and soul stirring
                                experiences. Come, discover it!
                            </p>
                        </div>
                    </div>
                    <div className={"col-12 col-md-6 mt-5"}>
                        <img width={"100%"} src={'https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/DC%20OOTY%2020A.jpg'} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-7'}>
                        <Card body outline className={'border-0 text-center'}>
                            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Logo of Nilgiri House</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{
                                    justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS',
                                    fontStyle: 'italic',
                                    fontSize: 'medium',
                                }}>Designed by : Harshit Katiyar</CardSubtitle>
                            </CardHeader>
                        </Card>
                        <div className={'row'}>
                            <div className={'col-md-5'}>
                                <img width={"320 px"} height={"320 px"} src={logo} alt-text = 'logo'/>
                            </div>
                            <div className={'col-md-7'}>
                                <div style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS',
                                    fontSize: 'large'}}>
                                    <p>The Logo of the Nilgiri House showcases various aspects of the Nilgiri Hills as well
                                        as the house.</p>
                                    <p>The Blue Mountains in the Logo depicts the  Neelakurinji (Strobilanthes kunthianus)
                                        which blooms only once in every 12 years and it sure is a sight to behold!</p>
                                    <p>The flying bird tells about the freedom in the house. The Nilgiri Gaur depicts
                                        strength of the house while orange is the colour of sunrise, it denotes the
                                        awakening and rise of the house.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'col-md-5'}>
                        <Card body outline className={'border-0 text-center'}>
                            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Timeline</CardTitle>
                            </CardHeader>
                        </Card>
                        <CustomizedTimeline />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-12'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Objectives of the House</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <CardText style={{fontFamily : 'Trebuchet MS', fontSize: 'large'}}>
                                    <p>1. To encourage participation in and enjoyment among the students. </p>
                                    <p>2. To celebrate achievement at both individual and House level. </p>
                                    <p>3. To share preparation, training and coaching for academics.</p>
                                    <p>4. To promote the Mental health and fitness of members. </p>
                                    <p>5. To encourage good fellowship. </p>
                                    <p>6. To undertake other duties, responsibilities and activities consistent with the nature
                                        and well-being of the House and other house members.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;