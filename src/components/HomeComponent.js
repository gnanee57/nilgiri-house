import React, {useEffect, useState} from "react";
/*import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';*/
import '../css/css/mdb.min.css';
import EventIcon from '@material-ui/icons/Event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
//import home from '../assests/jumbotron/nilgiri_home.jpg';
import birthdayPic from '../assests/birthday.png';
//import logo from "../assests/nilgiri_transparent.png";
import Divider from '@material-ui/core/Divider';
//import useWindowSize from "./useWindowSize";
import {Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid } from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import {
    ControlBar,
    CurrentTimeDisplay,
    ForwardControl,
    PlaybackRateMenuButton,
    Player,
    ReplayControl,
    TimeDivider, VolumeMenuButton
} from "video-react";
import ReactPlayer from "react-player";
import AppBar from "@material-ui/core/AppBar";
import {Loading} from "./LoadingComponent";

const useStyles1 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    textField: {
        width: 200,
    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        justifyContent: "center",
    },
    scroller: {
        flexGrow: "0"
    },
}));

function FeaturedVideoContent(props) {
    const classes1 = useStyles1();

    const content = props.content.map(content => {
        if (content.tabId === 1) {
            return (
                <GridListTile>
                    <ReactPlayer
                        url={content.link}
                        controls={true}
                        width="360px"
                        height="180px"
                    />
                </GridListTile>
            );
        }
    });
    return (
        <div className="container">
            <div className={"d-none d-lg-block"}>
                <div className="rows-col-md-8"/>
                <Grid container>
                    <GridList className={classes1.gridList} cols={2}>
                        {content}
                    </GridList>
                </Grid>
            </div>
            <div className={"d-block d-lg-none"}>
                <div className="rows-col-md-8"/>
                <Grid container>
                    <GridList className={classes1.gridList} cols={1}>
                        {content}
                    </GridList>
                </Grid>
            </div>
        </div>

    );
}

function FeaturedImageContent(props) {
    const classes1 = useStyles1();
    const content = props.content.map(content => {
        if (content.tabId === 2 || content.tabId === 3) {
            return (
                    <GridListTile>
                        <img src={content.link} height="200px" width="150px"/>
                        <GridListTileBar
                            subtitle={<span>by: {content.author} </span>}
                        />
                    </GridListTile>
            );
        }
    });
    return (
    <div className="container">
        <div className="rows-col-md-5"/>
        <Grid
            container
        >
            <GridList className={classes1.gridList}  cols={2.5}>
                {content}
            </GridList>
        </Grid>
    </div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <React.Fragment>
            <div className={"d-none d-lg-block"}>
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`vertical-tabpanel-${index}`}
                    aria-labelledby={`vertical-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box p={3}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            </div>
            <div className={"d-block d-lg-none"}>
                <div
                    role="tabpanel"
                    hidden={value !== index}
                    id={`scrollable-auto-tabpanel-${index}`}
                    aria-labelledby={`scrollable-auto-tab-${index}`}
                    {...other}
                >
                    {value === index && (
                        <Box p={3}>
                            <Typography>{children}</Typography>
                        </Box>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function FeaturedTabs(props) {
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (props.isLoading || props.wallContent === []) {
        return (
            <Loading />
        );
    } else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        );
    } else {
        return (
            <React.Fragment>
                <div className={"d-none d-lg-block"}>
                    <div className={classes1.root}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            className={classes1.tabs}
                        >
                            <Tab label="Music & Dance" {...a11yProps(0)} />
                            <Tab label="Paintings & Photography" {...a11yProps(1)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <FeaturedVideoContent
                                content={props.featuredContent.filter(content => content.tabId === 1)}/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <FeaturedImageContent
                                content={props.featuredContent.filter(content => content.tabId === 2 || content.tabId === 3)}/>
                        </TabPanel>
                    </div>
                </div>
                <div className={"d-block d-lg-none"}>
                    <div className={classes2.root}>
                        <AppBar position="static" color="default"
                                style={{background: 'transparent', boxShadow: 'none'}}>
                            <Tabs
                                classes={{root: classes2.root, scroller: classes2.scroller}}
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant={"scrollable"}
                                scrollButtons={"on"}
                            >
                                <Tab label="Music & Dance" {...a11yProps(0)} />
                                <Tab label="Paintings & Photography" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <FeaturedVideoContent
                                content={props.featuredContent.filter(content => content.tabId === 1)}/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <FeaturedImageContent
                                content={props.featuredContent.filter(content => content.tabId === 2 || content.tabId === 3)}/>
                        </TabPanel>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function BirthdaySegment(props) {

    if (props.isLoading) {
        return (
            <Loading />
        );
    } else if (props.errMess || props.birthday[0] === undefined) {
        return (
            <Card body outline className={'border-0'}>
                <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                    <CardTitle tag="h5" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                    }}>Birthday of the Day</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Date: {moment().format("MMM Do YY")}</CardSubtitle>
                </CardHeader>
                <div>
                    <CardImg src={birthdayPic} alt="Card image cap"/>
                </div>
                <CardFooter style={{backgroundColor: '#e6e5ff'}}>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Want your birthday to be displayed? <a href="https://forms.gle/Y46JLFWhBzbtEobYA"
                                                              target={'_blank'}>
                        Fill this form.</a>
                    </CardText>
                </CardFooter>
            </Card>
        );
    } else {
        return (
            <Card body outline className={'border-0'}>
                <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                    <CardTitle tag="h5" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                    }}>Birthday of the Day</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Date: {moment().format("MMM Do YY")}</CardSubtitle>
                </CardHeader>
                <div>
                    <CardImg height={"50%"} src={props.birthday[0].linkUrl} alt="Card image cap"/>
                    <CardBody>
                        <CardText style={{
                            justifyContent: 'center',
                            fontFamily: 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                            fontWeight: 'bold'
                        }}>
                            Wish you many more happy returns of the Day "{props.birthday[0].name}". May all your dreams come true.
                        </CardText>
                    </CardBody>
                </div>
                <CardFooter style={{backgroundColor: '#e6e5ff'}}>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Want your birthday to be displayed? <a href="https://forms.gle/Y46JLFWhBzbtEobYA"
                                                              target={'_blank'}>
                        Fill this form.</a>
                    </CardText>
                </CardFooter>
            </Card>
        );
    }
}

/*function RiddleSegment() {

    return (
        <Card body outline className={'border-0'}>
            <CardHeader style={{backgroundColor : '#e6e5ff'}} >
                <CardTitle tag="h5" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontSize: 'medium',
                }}>Riddle of the Day</CardTitle>
                <CardSubtitle className="mb-2 text-muted" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Date: {moment().format("MMM Do YY")}</CardSubtitle>
            </CardHeader>
            <CardBody>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>
                    Will be Updated...
                </CardText>
            </CardBody>
            <CardFooter style={{backgroundColor : '#e6e5ff'}}>
                <CardSubtitle className="mb-2 text-muted" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>The Answer for Riddle - 2 : To be Updated</CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Top Answers for Riddle - 2 is given by :<br/> To be Updated </CardSubtitle>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Want to answer the Riddle? <a href="" target={'_blank'}>
                    Fill this form.</a>
                </CardText>
            </CardFooter>
        </Card>
    );
}*/

function FeaturedAnnouncements() {
    return (
        <section id="announcements" className="mt-2 mb-2">
            <h2 className="pink-text text-uppercase font-weight-bold mb-2 pt-4 wow fadeIn" data-wow-delay=".2s">
                Announcements & updates</h2>
            <hr className="mb-2" />
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2021-10-01').format("MMM Do YY")} : A new segment is added to know your house
                & Group Details in the Nilgiri House Website. Please checkout in the homepage.
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2021-09-30').format("MMM Do YY")} : The Expression of Interest(EOI) Form
                for forming official clubs of Nilgiri House will be released within a week.
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2021-09-29').format("MMM Do YY")} : We are pleased to inform you that our Nilgiri house is
                now officially on Instagram and Telegram. We will keep updating our instagram page with house updates, funny memes and club
                activities. Do give us a follow to keep yourself updated and make our family more stronger.
                So please <a href={"https://www.instagram.com/nilgirihouse_iitm"} target={'_blank'}> follow </a> our Instagram page
                and <a href={"https://t.me/joinchat/0Bkmw5zCYhY1MThl"} target={'_blank'}> join </a> our telegram group.
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2021-09-27').format("MMM Do YY")} : Quiz & End Tem Syllabus - SEPTEMBER TERM(FOUNDATIONAL LEVEL)
                click <a href={'https://docs.google.com/document/u/2/d/e/2PACX-1vSbylA6h7TpwechTn6k50v6yalhSwSTAhtkSzUnGfFAOLMSHebyMnoHwGS_uzHEyOpZ33wgcTqjOMNV/pub#h.75spqegi2p7s'} target={'_blank'}> here </a>
                to refer to the table for the syllabus of quiz & end-term exam.
            </CardText>
            <div className="wow fadeIn" data-wow-delay=".4s" style={{ display: "flex" }}>
                <Button variant="outlined" color="primary" style={{ marginLeft: "auto" }}>
                    <Link to={'/announcements'}>
                        view more
                    </Link>
                </Button>
            </div>
        </section>
        /*<Card body outline className={'border-0'}>
            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                <CardTitle tag="h5" style={{
                    justifyContent: 'start',
                    fontFamily : 'Trebuchet MS',
                }}>Announcements / Updates</CardTitle>
            </CardHeader>
            <CardBody>

            </CardBody>
        </Card>*/
    );
}

function UpcomingEvents() {
    return (
        <section className="mt-5 mb-5">
            <h4 className="text-center dark-grey-text mb-5 pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                Upcoming events
            </h4>
            <p className="text-center w-responsive mx-auto my-5 grey-text wow fadeIn" data-wow-delay="0.2s">
                Have fun and have faith that when you use your heart to navigate through
                life and use the Universe as a map the magic and miracles in your life will be endless. Pandora
                opened the box with the new high-heels, put them on and went out to town.</p>
            <div className="row pt-4">
                <div className="col-md-4 mb-4">
                    <div className="row">
                        <div className="col-1 col-md-2">
                            <EventIcon fontSize="large"
                                       className="indigo-text"
                            />
                        </div>
                        <div className="col-10 col-md-9 col-lg-10 float-right">
                            <h4 className="indigo-text"
                                style={{
                                    fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                    textTransform: 'capitalize', fontSize: 'x-large', fontWeight: 'bold'}}>
                                TBD
                            </h4>
                            <h6 className="mb-3 dark-grey-text">
                                Treasure Hunt</h6>
                            <p className="grey-text">If you're too busy to hunt, then you're too busy!
                                Rise n shine. It's huntin' time!
                            </p>
                            {/*<a href="" className="font-small dark-grey-text">
                                read more
                            </a>*/}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="row">
                        <div className="col-1 col-md-2">
                            <EventIcon fontSize="large"
                                       className="indigo-text"
                            />
                        </div>
                        <div className="col-10 col-md-9 col-lg-10 float-right">
                            <h4 className="indigo-text" style={{
                                fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                textTransform: 'capitalize', fontSize: 'x-large', fontWeight: 'bold'}}>
                                TBD
                            </h4>
                            <h6 className="mb-3 dark-grey-text">
                                Painting Competition</h6>
                            <p className="grey-text">All you need to paint is a few tools,
                                a little instruction, and a vision in your mind.</p>
                            {/*<a href="" className="font-small dark-grey-text">
                                read more
                            </a>*/}
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="row">
                        <div className="col-1 col-md-2">
                            <EventIcon fontSize="large"
                                       className="indigo-text"
                            />
                        </div>
                        <div className="col-10 col-md-9 col-lg-10 float-right">
                            <h4 className="indigo-text" style={{
                                fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                textTransform: 'capitalize', fontSize: 'x-large', fontWeight: 'bold'}}>
                                {moment('2021-11-14').format("MMM Do YY")}
                            </h4>
                            <h6 className="mb-3 dark-grey-text">
                                Slay the King</h6>
                            <p className="grey-text">One doesn't have to play well,
                                it's enough to play better than your opponent</p>
                            {/*<a href="" className="font-small dark-grey-text">
                                read more
                            </a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /*<Card body outline className={'border-0'} >
            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                <CardTitle tag="h5" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                }}>Upcoming Events</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>{moment('2021-10-15').format("MMM Do YY")} : Nilgiri House :: Student of the Year Contest.
                </CardText>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>{moment('2021-10-02').format("MMM Do YY")} : Nilgiri House :: Formal Welcome & Q/A Session for joined house members in September 2021.
                </CardText>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>EOD : Nilgiri House :: Painting Competition
                </CardText>
                <div style={{ display: "flex" }}>
                    <Button variant="outlined" color="primary" style={{ marginLeft: "auto" }}>
                        <Link to={'/events/eventsCalendar'}>
                            view more
                        </Link>
                    </Button>
                </div>
            </CardBody>
        </Card>*/
    );
}

function QuoteStreak() {
    return (
        <div className="streak streak-photo streak-md"
             style={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/Things/full%20page/img%20%287%29.jpg')"}}>
            <div className="flex-center mask rgba-indigo-strong">
                <div className="text-center wow fadeInDownBig" data-wow-delay="0.2s">
                    <h2 className="h2-responsive mb-5" style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'floralwhite',
                        fontFamily : 'Trebuchet MS',
                        textTransform: 'capitalize',
                        fontSize : 'xx-large'
                    }}>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                         Creativity requires the courage to let
                        go of
                        certainties
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </h2>
                    <h5 className="text-center wow fadeInUpBig"
                        data-wow-delay="0.2s"
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textTransform: 'capitalize',
                            fontSize : 'large',
                            fontStyle : 'italic'
                        }}
                    >~ Erich Fromm</h5>
                </div>
            </div>
        </div>
    );
}


function HouseDetails(props) {


    const [rollNum, setRollNum] = useState('');
    const [rollNo, setRollNo] = useState('');

    const resetForm = () => {
        setRollNum('');
    }

    const StudentDetails = () => {
        {console.log(props.studentDetails)}
        if (props.studentDetailsLoading) {
            return (
                <Loading />
            );
        } else if (props.studentDetailsErrMess || props.studentDetails[0] === undefined) {
            return (<div></div>);
        } else {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}>
                    Your House & Group Details are: <br/>
                    Roll No : {props.studentDetails[0].studentId} <br/>
                    Group Id: {props.studentDetails[0].groupId} <br/>
                    House Name: {props.studentDetails[0].house} <br/>
                    Added in : {moment(props.studentDetails[0].termAdded,'DD-MM-YYYY').format('MMMM YYYY')}
                </CardText>
            );
        }
    }

    const TraceDetails = () => {
        if (props.studentDetails === null && rollNo.length === 10) { return (<div></div>) }
        else if(props.studentDetails !== null && rollNo.length === 10) {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>
                    Click on search to view your House & Group
                </CardText>
            );
        }
        else {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>
                    Enter Valid Roll No. 2XfX00XXXX
                </CardText>
            );
        }
    }

    return (
        <section className="mb-2">
            <div className='container-fluid overflow-hidden grey lighten-4'>
                <div className='container'>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <h4 className="pink-text text-capitalize text-center font-weight-bold mb-2 pt-4 wow fadeIn"
                                data-wow-delay=".2s">
                                Know your House & Group</h4>
                            <hr className="mb-2" />
                            <div className={'col-md-4'}>
                                <form  noValidate autoComplete="off" onSubmit={(e) => {
                                    e.preventDefault();
                                    props.handleSearch(rollNum);
                                    resetForm();
                                }}
                                >
                                    <div  className="col-6">
                                        <TextField
                                            required
                                            fullWidth
                                            name="rollNum"
                                            label="Roll No:"
                                            placeholder="Enter your Roll No:"
                                            value={rollNum}
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => {
                                                setRollNum(e.target.value);
                                                setRollNo(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="row mt-2">
                                        <div className={"col-md-5"}>
                                            <Button  type={"submit"} variant="contained" color="primary">
                                                Search
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                                <div className="mt-3 mb-3">
                                    <TraceDetails />
                                </div>
                            </div>
                            <div className={'col-md-4 align-self-center'}>
                                <StudentDetails />
                            </div>
                            <div className={'col-md-4 align-self-center d-none d-md-block'} style={{marginLeft: "auto"}}>
                                <img src={'https://static.thenounproject.com/png/140350-200.png'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



function Home(props) {

    useEffect(() => {
        document.title = 'Nilgiri Home'
    }, []);

    /*const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };*/

    return(
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid d-none d-md-block" style={{backgroundImage :
            "url('https://drive.google.com/uc?export=download&id=1xHXG3-8Rm_KjbggCjo7nhZUeHafcEWV1')",
            backgroundSize : 'cover',
            opacity: '0.8'
            }}>
                <div className="container text-center">
                    <div className="col-12">
                        <div className="wow fadeInDown" data-wow-delay="0.5s">
                        <h1 style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textTransform: 'uppercase',
                            fontSize : '80px',
                            fontWeight: 'bold'
                        }}>Nilgiri House <br/>
                            <hr style={{ height: "5px",
                                border:'none'}} />
                        </h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p className="lead" style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'black',
                            opacity: '1',
                            textTransform: 'capitalize',
                            fontSize : '30px',
                            fontFamily : 'Trebuchet MS',
                            fontWeight: 'bold'
                        }}>Nearer to the House, Closer to your heart!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid d-none d-sm-block d-md-none" style={{backgroundImage :
                    "url('https://drive.google.com/uc?export=download&id=1xHXG3-8Rm_KjbggCjo7nhZUeHafcEWV1')",
                backgroundSize : 'cover',
                opacity: '0.7'
            }}>
                <div className="container text-center">
                    <div className="col-12">
                        <div className="wow fadeInDown" data-wow-delay="0.5s">
                        <h1 style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textTransform: 'uppercase',
                            fontSize : '50px',
                            fontWeight: 'bold'
                        }}>Nilgiri House <br/>
                            <hr style={{ height: "3px",
                                border:'none'}} />
                        </h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p className="lead" style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'dark-grey',
                            textTransform: 'capitalize',
                            fontSize : '20px',
                            fontFamily : 'Trebuchet MS',
                            fontWeight: 'bold'
                        }}>Nearer to the House, Closer to your heart!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid d-block d-sm-none" style={{backgroundImage :
                    "url('https://drive.google.com/uc?export=download&id=1xHXG3-8Rm_KjbggCjo7nhZUeHafcEWV1')",
                backgroundSize : 'cover',
                opacity: '0.7'
            }}>
                <div className="container text-center">
                    <div className="col-12">
                        <div className="wow fadeInDown" data-wow-delay="0.5s">
                        <h1 style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textTransform: 'uppercase',
                            fontSize : '30px',
                            fontWeight: 'bold'
                        }}>Nilgiri House <br/>
                            <hr style={{ height: "3px",
                                border:'none'}} />
                        </h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p className="lead" style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'dark-grey',
                            textTransform: 'capitalize',
                            fontSize : '12px',
                            fontFamily : 'Trebuchet MS',
                            fontWeight: 'bold'
                        }}>Nearer to the House, Closer to your heart!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Jumbotron className='col-md-12 d-none d-xl-block'>
                <img src={home} width={size.width  - 17} height="500" />
            </Jumbotron>*/}
            <div className='container-fluid mt-2 overflow-hidden'>
                <div className={'row mb-3'}>
                    <div className={'col-md-9'}>
                        <FeaturedAnnouncements />
                    </div>
                    <div className={'col-md-3'}>
                        <BirthdaySegment birthday = {props.birthday}
                                         isLoading={props.birthdayLoading}
                                         errMess={props.birthdayErrMess}
                        />
                    </div>
                </div>
            </div>
            <HouseDetails
                handleSearch={props.handleSearch}
                studentDetails={props.studentDetails}
                studentDetailsLoading={props.studentDetailsLoading}
                studentDetailsErrMess={props.studentDetailsErrMess}
            />
            <div className={'container'}>
                <div className={'row mb-3'}>
                    <div className={'col-md-12'}>
                        <UpcomingEvents />
                    </div>
                </div>
            </div>
            <QuoteStreak />
                {/*<div className='row mb-3'>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <div className={'col-md-3 mb-0'}>
                                <RiddleSegment />
                            </div>
                        </div>
                    </div>
                </div>*/}
            <div className='container-fluid overflow-hidden grey lighten-4'>
                <div className={'col-md-12'}>
                    <section className="mt-3 mb-2">
                        <h4 className="text-center dark-grey-text pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                            fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                            Our Wall
                        </h4>
                        <p className="text-center w-responsive mx-auto grey-text wow fadeIn" data-wow-delay="0.2s">
                            Want your work to be posted on Nilgiri Wall? <a
                            href={'https://forms.gle/fFftSgDAHcX7DDHp6'} target={'_blank'}>Fill this form</a></p>
                                {/*<Card body outline className={'border-0'}>
                                    <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                        <CardTitle tag="h5" style={{
                                            justifyContent: 'start',
                                            fontFamily : 'Trebuchet MS',
                                            textTransform: 'uppercase',
                                            fontSize: 'x-large',
                                            fontWeight: 'bold'
                                        }}>Our Wall</CardTitle>
                                        <CardSubtitle className="mb-2 text-muted" style={{
                                            justifyContent: 'center',
                                            fontFamily : 'Trebuchet MS',
                                            fontStyle: 'italic',
                                            fontSize: 'small',
                                        }}></CardSubtitle>
                                    </CardHeader>
                                </Card>*/}
                        <Divider />
                        <FeaturedTabs featuredContent={props.featuredContent}/>
                        <div style={{ display: "flex" }}>
                            <Button variant="outlined" color="primary" style={{ marginLeft: "auto" }}>
                                <Link to={'/wall'}>
                                    view more
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
            <div className='container-fluid mt-2 overflow-hidden'>
                {/*<div className={'row'}>
                    <div className={'col-md-12 mb-0'}>
                        <Card body outline className={'border-0'} >
                            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS',
                                }}>STUDENT OF THE YEAR CONTEST</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{
                                    justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS',
                                    fontStyle: 'italic',
                                    fontSize: 'small',
                                }}>Event Date: {moment('2021-10-15T04:00:00+05:30').format("dddd, MMMM Do YYYY, h")}pm  <br/>
                                    Venue: Google Meet <br/>
                                    Want to Participate? <a
                                        href={'https://forms.gle/7oFj7dMSzbQvWXq1A'} target={'_blank'}>Fill this form</a></CardSubtitle>
                            </CardHeader>
                            <CardBody>
                                <div className={'row'}>
                                    <div className={'col-md-8'}>
                                        <QuizTabs />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <img src={quizPoster} width={'300px'} height={'450px'}/>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>*/}
                <div className={'row'}>
                    <div className={'col-md-12'}>
                        <section className="mt-5 mb-5">
                            <h4 className="text-center dark-grey-text mb-5 pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                                fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                                Glimpses
                            </h4>
                            <Card body outline className={'border-0'}>
                            <div className={"row"}>
                            <div className={'col-xl-4 col-lg-6 col-12 mt-4'}>
                                <Card className={'border-0 align-self-center'}>
                                    <Player src={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                            fluid ={false}
                                            height = {300}
                                            width = {350}
                                    >
                                        <ControlBar>
                                            <VolumeMenuButton vertical />
                                            <ReplayControl seconds={10} order={1.1} />
                                            <ForwardControl seconds={30} order={1.2} />
                                            <CurrentTimeDisplay order={4.1} />
                                            <TimeDivider order={4.2} />
                                            <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.8, 0.5]} order={7.1} />
                                        </ControlBar>
                                    </Player>
                                </Card>
                            </div>
                            <div className={'col-xl-4 col-lg-6 col-12 mt-4'}>
                                <Card className={'border-0 align-self-center'}>
                                    <Player src={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                            fluid ={false}
                                            height = {300}
                                            width = {350}
                                    >
                                        <ControlBar>
                                            <VolumeMenuButton vertical />
                                            <ReplayControl seconds={10} order={1.1} />
                                            <ForwardControl seconds={30} order={1.2} />
                                            <CurrentTimeDisplay order={4.1} />
                                            <TimeDivider order={4.2} />
                                            <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.8, 0.5]} order={7.1} />
                                        </ControlBar>
                                    </Player>
                                </Card>
                            </div>
                            <div className={'col-xl-4 col-lg-6 col-12 mt-4'}>
                                <Card className={'border-0 align-self-center'}>
                                    <Player src={'https://drive.google.com/uc?export=download&id=1EDfAmePz9Kj7aO-u4VnlDBL_H5f4lQ5N'}
                                            fluid ={false}
                                            height = {300}
                                            width = {350}
                                    >
                                        <ControlBar>
                                            <VolumeMenuButton vertical />
                                            <ReplayControl seconds={10} order={1.1} />
                                            <ForwardControl seconds={30} order={1.2} />
                                            <CurrentTimeDisplay order={4.1} />
                                            <TimeDivider order={4.2} />
                                            <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.8, 0.5]} order={7.1} />
                                        </ControlBar>
                                    </Player>
                                </Card>
                            </div>
                            </div>
                            </Card>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;