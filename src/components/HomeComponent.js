import React, {useState} from "react";
import home from '../home.jpg';
import birthdayPic from './birthday.png';
import {BIRTHDAYCONTENT} from "../shared/birthdayContent";
import Divider from '@material-ui/core/Divider';
import useWindowSize from "./useWindowSize";
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Jumbotron, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from "react-player";
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import moment from "moment";

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
                <Grid
                    container
                >

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
                <>
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
                </>
            );
        }
        else {
            return (
                <>
                    <CardImg src={birthdayPic} alt="Card image cap"/>

                </>
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

function RiddleSegment() {

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
}

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
                    {moment('2021-07-15').format("MMM Do YY")} : The Expression of Interest(EOI) Form
                    for forming official clubs of Nilgiri House will be released tomorrow.
                    ({moment('2021-07-16').format("MMM Do YY")})
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    {moment('2021-07-14').format("MMM Do YY")} : As discussed in House council meetings, All
                    the house members have to opt for an active, passive or absentee membership that suits their needs.
                    So please fill this <a href={'https://forms.gle/xALs8NTencD12kqd6'} target={'_blank'}> G Form </a>
                    given to opt your membership.
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    {moment('2021-07-13').format("MMM Do YY")} : Please write an essay on the advantages and
                    disadvantages of learning English remotely as a part of the course. You may write about the English
                    course content and features that you like and dislike the most. The maximum word limit is 400 words
                    or a one-word page. The essays will be evaluated randomly and given feedbacks.
                    Use this <a href={'https://forms.gle/XVaUmTCS7vHny9hw6'} target={'_blank'}> G Form </a> to submit
                    your essay. Deadline: 16th July (11.00 pm)
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
                }}>{moment('2021-08-16').format("MMM Do YY")} : Jamming Sesh & IITM Meme Marathon
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

function Home(props) {
    const size = useWindowSize();
    const items = [
        {
            id: 1,
            src: 'https://drive.google.com/uc?export=download&id=1mx0C9OMD3dXTA-EFuJsJKxG_6aBcMb6Z',
            altText: 'JAM Sesh',

        },
        {
            id: 2,
            src: 'https://drive.google.com/uc?export=download&id=1pU0irR8JV9EaBKNuX23NK2qOE_A9VEEP',
            altText: 'IITM Meme Event',

        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img width={'300 px'} height={'500 px'} src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return(
        <>
            <Jumbotron className='col-md-12 d-none d-sm-block'>
                <img src={home} width={size.width  - 17} height="500" />
            </Jumbotron>
            <div className='container-fluid mt-2 overflow-hidden'>
                <div className={'row'}>
                    <div className={'col-md-9'}>
                        <Card body outline className={'border-0'}>
                            <CardHeader className={'text-center'} style={{backgroundColor : '#e6e5ff'}}>
                                <CardTitle tag="h5" style={{
                                    fontFamily : 'Trebuchet MS',
                                    fontSize: 'x-large',
                                    fontWeight: 'bold'
                                }}>Let's Have Some Fun!!!</CardTitle>
                            </CardHeader>
                            <div className={'row'}>
                                <div className={'col-md-4'}>
                                    <Carousel
                                        activeIndex={activeIndex}
                                        next={next}
                                        previous={previous}
                                    >
                                        {slides}
                                        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
                                        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
                                    </Carousel>

                                </div>
                                <div className={'col-md-7'}>
                                    <div style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', padding: '10 px',
                                        fontSize: 'large'}}>
                                        <p>
                                            Hi fam!</p><p>
                                            Nilgiri invites the extended IITM peeps to our first informal get-together!
                                            </p><p>
                                            Call it an event, call it what you may but we guarantee you 2 things.
                                            Music and Fun!</p> <p>

                                            1. Jamming Sesh- Either pre-register or spot register to get a chance to sing for the family,
                                        we might also ask  everyone to turn on their mics and sing along!
                                        <CardSubtitle className="mb-2 text-muted" style={{
                                            justifyContent: 'center',
                                            fontFamily : 'Trebuchet MS',
                                            fontStyle: 'italic',
                                            fontSize: 'large',
                                        }}>Want to Participate? <a
                                            href={'https://forms.gle/Hh9HjpyHqKmMAExP8'} target={'_blank'}>Click here</a> to Register!!!</CardSubtitle>
                                    </p><p>
                                            2. IITM Meme Marathon- We think wesan safely say we have some Meme Kings and Queens that's been putting out quality content on social media as well as on our groups ever since the beginning of our course but maybe it's time we give them a stage to entertain!
                                            Bring your memes and your wit to have a fun evening!
                                            <CardSubtitle className="mb-2 text-muted" style={{
                                                justifyContent: 'center',
                                                fontFamily : 'Trebuchet MS',
                                                fontStyle: 'italic',
                                                fontSize: 'large',
                                            }}>Want to Participate?<a
                                                href={'https://forms.gle/K7z5NYWThwizMy1U7'} target={'_blank'}>Click here</a> to Register!!!</CardSubtitle>

                                        </p>
                                        <p>
                                            Event Date: Tommorow ({moment('2021-08-16').format("MMM Do YY")}) at 7pm
                                        </p>
                                        <p>
                                            Venue: Google Meet -- <a
                                            href={'https://meet.google.com/tkv-btaj-bja'} target={'_blank'}>(Click Here) </a>to join the Meet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className={'col-md-3'}>
                        <UpcomingEvents />
                        <RiddleSegment />
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <BirthdaySegment />
                            </div>
                            <div className={'col-md-8'}>
                                <FeaturedAnnouncements />
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className='col-md-12 d-none d-lg-block '>
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
                        </div>
                    </div>
                </div>
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
                                <div className={'d-block d-sm-block d-md-none'}>
                                    <ReactPlayer
                                        url={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                        controls={true}
                                        width="320px"
                                        height="250px"
                                    />
                                </div>
                                <div className={'col-md-6 col-lg-4 d-none d-sm-block'}>
                                    <ReactPlayer
                                        url={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                        controls={true}
                                        width="420px"
                                        height="315px"
                                    />
                                </div>
                                <div className={'d-block d-sm-block d-md-none'}>
                                    <ReactPlayer
                                        url={'https://drive.google.com/uc?export=download&id=1EDfAmePz9Kj7aO-u4VnlDBL_H5f4lQ5N'}
                                        controls={true}
                                        width="320px"
                                        height="250px"
                                    />
                                </div>
                                <div className={'col-md-6 col-lg-4 d-none d-sm-block'}>
                                    <ReactPlayer
                                        url={'https://drive.google.com/uc?export=download&id=1EDfAmePz9Kj7aO-u4VnlDBL_H5f4lQ5N'}
                                        controls={true}
                                        width="420px"
                                        height="315px"
                                    />
                                </div>
                                <div className={'d-block d-sm-block d-md-none'}>
                                    <ReactPlayer
                                        url={'https://drive.google.com/uc?export=download&id=1MxYzRyKC-g-UIPdoQ60mg4BM3vC5tmzi'}
                                        controls={true}
                                        width="320px"
                                        height="250px"
                                    />
                                </div>
                                <div className={'col-lg-4 d-none d-sm-block'}>
                                    <ReactPlayer
                                        url={'https://drive.google.com/uc?export=download&id=1MxYzRyKC-g-UIPdoQ60mg4BM3vC5tmzi'}
                                        controls={true}
                                        width="420px"
                                        height="315px"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;