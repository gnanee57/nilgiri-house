import React, {useState} from "react";
/*import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';*/
import home from '../assests/jumbotron/nilgiri_home.jpg';
import birthdayPic from '../assests/birthday.png';
import logo from "../assests/nilgiri_transparent.png";
import {BIRTHDAYCONTENT} from "../shared/birthdayContent";
import {HOUSEDETAILS} from "../shared/houseDetails";
import Divider from '@material-ui/core/Divider';
import useWindowSize from "./useWindowSize";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Jumbotron
} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
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


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
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
function FeaturedVideoContent(props) {
    const classes = useStyles();
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
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <span>by: {content.author}</span>
                        </Typography>
                    </CardContent>
                </GridListTile>
            );
        }
    });
    return (
        <div className="container">
            <div className="rows-col-md-8"/>
            <Grid container>
                <GridList className={classes.gridList} cols={2}>
                    {content}
                </GridList>
            </Grid>
        </div>

    );
}

function FeaturedImageContent(props) {
    const classes = useStyles();
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
            <GridList className={classes.gridList}  cols={2.5}>
                {content}
            </GridList>
        </Grid>
    </div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
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
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Music & Dance" {...a11yProps(0)} />
                <Tab label="Paintings & Photography" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <FeaturedVideoContent content={props.featuredContent.filter(content => content.tabId === 1)} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FeaturedImageContent content={props.featuredContent.filter(content =>  content.tabId === 2 || content.tabId === 3)} />
            </TabPanel>
        </div>
    );
}

function BirthdaySegment() {

    const Birthday = (props) => {
        console.log(props)
        if (props.item.length != 0) {
            return (
                <div>
                    <CardImg height={"50%"} src={props.item[0].linkUrl} alt="Card image cap"/>
                    <CardBody>
                        <CardText style={{
                            justifyContent: 'center',
                            fontFamily: 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                            fontWeight: 'bold'
                        }}>
                            Wish you many more happy returns of the Day "{props.item[0].name}". May all your dreams come true.
                        </CardText>
                    </CardBody>
                </div>
            );
        }
        else {
            return (
                <div>
                    <CardImg src={birthdayPic} alt="Card image cap"/>

                </div>
            );
        }
    };

    return (
        <Card body outline className={'border-0'}>
            <CardHeader style={{backgroundColor : '#e6e5ff'}} >
                <CardTitle tag="h5" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                }}>Birthday of the Day</CardTitle>
                <CardSubtitle className="mb-2 text-muted" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Date: {moment().format("MMM Do YY")}</CardSubtitle>
            </CardHeader>
            <Birthday item = {BIRTHDAYCONTENT.filter(item => moment(item.date).isSame(moment(), 'day'))} />
            <CardFooter style={{backgroundColor : '#e6e5ff'}}>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Want your birthday to be displayed? <a href="https://forms.gle/Y46JLFWhBzbtEobYA" target={'_blank'}>
                    Fill this form.</a>
                </CardText>
            </CardFooter>
        </Card>
    );
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
        <Card body outline className={'border-0'}>
            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                <CardTitle tag="h5" style={{
                    justifyContent: 'start',
                    fontFamily : 'Trebuchet MS',
                }}>Announcements / Updates</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    {moment('2021-10-01').format("MMM Do YY")} : A new segment is added to know your house
                    & Group Details in the Nilgiri House Website. Please checkout in the homepage.
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    {moment('2021-09-30').format("MMM Do YY")} : The Expression of Interest(EOI) Form
                    for forming official clubs of Nilgiri House will be released within a week.
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    {moment('2021-09-29').format("MMM Do YY")} : We are pleased to inform you that our Nilgiri house is
                    now officially on Instagram and Telegram. We will keep updating our instagram page with house updates, funny memes and club
                    activities. Do give us a follow to keep yourself updated and make our family more stronger.
                    So please <a href={"https://www.instagram.com/nilgirihouse_iitm"} target={'_blank'}> follow </a> our Instagram page
                    and <a href={"https://t.me/joinchat/0Bkmw5zCYhY1MThl"} target={'_blank'}> join </a> our telegram group.
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    {moment('2021-09-27').format("MMM Do YY")} : Quiz & End Tem Syllabus - SEPTEMBER TERM(FOUNDATIONAL LEVEL)
                    click <a href={'https://docs.google.com/document/u/2/d/e/2PACX-1vSbylA6h7TpwechTn6k50v6yalhSwSTAhtkSzUnGfFAOLMSHebyMnoHwGS_uzHEyOpZ33wgcTqjOMNV/pub#h.75spqegi2p7s'} target={'_blank'}> here </a>
                    to refer to the table for the syllabus of quiz & end-term exam.
                </CardText>
                <div style={{ display: "flex" }}>
                    <Button variant="outlined" color="primary" style={{ marginLeft: "auto" }}>
                        <Link to={'/announcements'}>
                            view more
                        </Link>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

function UpcomingEvents() {
    return (
        <Card body outline className={'border-0'} >
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
        </Card>
    );
}


function HouseDetails() {
    const [rollNum, setRollNum] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [groupId, setGroupId] = useState('');
    const [house, setHouse] = useState('');
    const [termAdded, setTermAdded] = useState('');
    const [detailsFetched, setDetailsFetched] = useState(false);

    const resetForm = () => {
        setRollNum('');
    }

    const handleSearch = async e => {
        e.preventDefault();
        let student = HOUSEDETAILS.filter(student =>
            student.studentId === rollNo.toLowerCase() + '@student.onlinedegree.iitm.ac.in'
        );
        console.log(student);

        if(student.length) {
            setRollNo(rollNum);
            setGroupId(student[0].groupId);
            setHouse(student[0].house);
            setTermAdded(student[0].termAdded);
            setDetailsFetched(true);
        }
        resetForm();
    }


    const StudentDetails = () => {
        if(detailsFetched && rollNo.length === 10) {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}>
                    Roll No : {rollNo} <br/>
                    Group Id: {groupId} <br/>
                    House Name: {house} <br/>
                    Added in : {moment(termAdded).format('MMMM YYYY')}
                </CardText>
            );
        }
        else if(!detailsFetched && rollNo.length === 10) {
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
        <Card body outline className={'border-0'} >
            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                <CardTitle tag="h5" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                }}>Know your House & Group</CardTitle>
            </CardHeader>
            <CardBody>
                <form  noValidate autoComplete="off" onSubmit={handleSearch}>
                    <div  className="col-10">
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
                                setDetailsFetched(false);
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
                <br/>
                <StudentDetails />
            </CardBody>
        </Card>
    );
}

function Home(props) {
    const size = useWindowSize();

    /*const QuizTabs = (props) => {
        const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
            if(activeTab !== tab) setActiveTab(tab);
        }
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            style={{
                                backgroundColor: '#fff'
                            }}
                            className={classnames({ active: activeTab === '1'})}
                            onClick={() => { toggle('1'); }}
                        >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            style={{
                                backgroundColor: '#fff'
                            }}
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Rules
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <CardText style={{
                                    backgroundColor: '#fff', justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                    fontSize: 'medium', fontWeight: 'bold'}}>
                                    Nilgiri House brings you a fun-event on the auspicious occasion of the
                                    National Students' Day, on {moment('2021-10-15').format("MMM Do YY")}
                                    in collaboration with the Nilgiri Quiz Club - <br/><br/>
                                    Student of the Year, a General Quiz with the underlying theme of How attentive
                                    an IITM B.Sc degree student you are!<br/><br/>
                                    Sounds puzzling?<br/>
                                    Don't worry. We won't ask you do any complex integration or deduce any
                                    conditional probability.<br/><br/>
                                    It will be like any other General Quiz , but the answers (say some proper nouns or
                                    some terminologies orsome funda behind some particular invention or usage )
                                    are somehow related to this B.Sc degree course contents.<br/><br/>
                                    If you were attentive during the lectures or solving questions, you can easily take a guess.
                                    And if you haven't attended lectures etc that much precisely, you can still
                                    crack the answers given the work-outable hints in the question.
                                </CardText>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12" style={{
                                backgroundColor: '#fff'}}>
                                <CardText style={{
                                    backgroundColor: '#fff', justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                    fontSize: 'medium', fontWeight: 'bold'}}>
                                    Rules:<br/>
                                    <ul>
                                        <li>It will be a thoroughly General Quiz.</li>
                                        <li>Max 2 members per team,you can also take part as lonewolf. (however you are always suggested to take part in teams)</li>
                                        <li>A preliminary round to be followed by a Final.</li>
                                        <li>Prelims will be held on Google Form.</li>
                                        <li>8 teams to qualify for the Finals which will be held via Google Meet.</li>
                                    </ul>
                                </CardText>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }*/

    return(
        <React.Fragment>
            <Jumbotron className='col-md-12 d-none d-xl-block'>
                <img src={home} width={size.width  - 17} height="500" />
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
                            }}>Nilgiri Home</CardTitle>
                            <CardTitle tag="h5" style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: 'floralwhite',
                                fontFamily : 'Trebuchet MS',
                                fontSize: 'large',
                                fontWeight: 'bold'
                            }}>Nearer to the house, Closer to your heart!</CardTitle>
                        </div>
                        <div className="col-12 col-sm-3 align-self-center mt-2"/>
                        <div className="col-12 col-sm-3 align-self-center mt-2">
                            <img src={logo} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <div className='container-fluid mt-2 overflow-hidden'>
                <div className={'row mb-3'}>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <div className={'col-md-3 mb-0'}>
                                <HouseDetails />
                            </div>
                            <div className={'col-md-6'}>
                                <FeaturedAnnouncements />
                            </div>
                            <div className={'col-md-3 mb-0'}>
                                <UpcomingEvents />
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className='row mb-3'>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <div className={'col-md-3 mb-0'}>
                                <RiddleSegment />
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div className='row'>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <div className={'col-md-9 d-none d-lg-block'}>
                                <Card body outline className={'border-0'}>
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
                                        }}>Want your work to be posted on Nilgiri Wall? <a
                                            href={'https://forms.gle/fFftSgDAHcX7DDHp6'} target={'_blank'}>Fill this form</a></CardSubtitle>
                                    </CardHeader>
                                </Card>
                                <Divider />
                                <FeaturedTabs featuredContent={props.featuredContent}/>
                                <div style={{ display: "flex" }}>
                                    <Button variant="outlined" color="primary" style={{ marginLeft: "auto" }}>
                                        <Link to={'/wall'}>
                                            view more
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className={'col-md-3'}>
                                <BirthdaySegment />
                            </div>
                        </div>
                    </div>
                </div>
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
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    textTransform: 'uppercase',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Glimpses</CardTitle>
                            </CardHeader>
                            <div className={"row"}>
                                <div className={'col-xl-4 col-lg-6 col-md-6 col-12 mt-4'}>
                                    <Card className={'border-0'}>
                                        <Player src={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                                fluid ={false}
                                                height = {300}
                                                width = {"auto"}
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
                                <div className={'col-xl-4 col-lg-6 col-md-6 col-12 mt-4'}>
                                    <Card className={'border-0'}>
                                        <Player src={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                                fluid ={false}
                                                height = {300}
                                                width = {"auto"}
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
                                <div className={'col-xl-4 col-lg-6 col-md-6 col-12 mt-4'}>
                                    <Card className={'border-0'}>
                                        <Player src={'https://drive.google.com/uc?export=download&id=1EDfAmePz9Kj7aO-u4VnlDBL_H5f4lQ5N'}
                                                fluid ={false}
                                                height = {300}
                                                width = {"auto"}
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;