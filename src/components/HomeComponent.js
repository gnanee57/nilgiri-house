import React, {useState} from "react";
import home from '../home.jpg';
import birthdayPic from './birthday.png';
import {BIRTHDAYCONTENT} from "../shared/birthdayContent";
import Divider from '@material-ui/core/Divider';
import useWindowSize from "./useWindowSize";
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Jumbotron, } from "reactstrap";
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
                }}>Riddle of the Day :: Riddle-1</CardTitle>
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
                    I have keys, but no locks. I have space, but no room. You can enter, but you can’t go outside. What am I?
                </CardText>
            </CardBody>
            <CardImg height={"25%"} src={'https://i.insider.com/5e29be67ab49fd3eba5daa5c?width=700&format=jpeg&auto=webp'} alt="Card image cap"/>
            <CardFooter style={{backgroundColor : '#e6e5ff'}}>
                <CardSubtitle className="mb-2 text-muted" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>The Answer for Riddle - 1 : TBD</CardSubtitle>
                <CardSubtitle className="mb-2 text-muted" style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Top Answers for Riddle - 1 is given by : TBD</CardSubtitle>
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                }}>Want to answer the Riddle? <a href="https://forms.gle/CgCLZGmSPFrEUbUP9" target={'_blank'}>
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
                }}>{moment('2021-07-15').format("MMM Do YY")} : Launch of Nilgiri House Website
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
    return(
        <>
            <Jumbotron>
                <img src={home} width={size.width - 17} height="500" />
            </Jumbotron>
            <div className='container-fluid mt-2 overflow-hidden'>
                <div className='row mb-3'>
                    <div className={'col-md-9'}>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <BirthdaySegment />
                            </div>
                            <div className={'col-md-8'}>
                                <FeaturedAnnouncements />
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className='col-md-12'>
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
                    <div className={'col-md-3'}>
                        <UpcomingEvents />
                        <RiddleSegment />
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
                                <div className={'col-md-4'}>
                                    <ReactPlayer
                                        url={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}
                                        controls={true}
                                        width="420px"
                                        height="315px"
                                    />
                                </div>
                                <div className={'col-md-4'}>
                                    <ReactPlayer
                                        url={"https://r2---sn-5jucgv5qc5oq-h55k.googlevideo.com/videoplayback?expire=1626362685&ei=3f7vYO_eJsf54-EP4e6aGA&ip=49.204.194.211&id=o-AJNw5BMqAbmWuIw-ElXFRUuBNOdUzwebmeLxWYBENNh3&itag=22&source=youtube&requiressl=yes&mh=iT&mm=31%2C29&mn=sn-5jucgv5qc5oq-h55k%2Csn-cvh76ney&ms=au%2Crdu&mv=m&mvi=2&pcm2cms=yes&pl=23&initcwndbps=1226250&vprv=1&mime=video%2Fmp4&ns=gBHJ9D2xqQ60NSsQ_Kcvt4QG&cnr=14&ratebypass=yes&dur=106.370&lmt=1593578892195773&mt=1626340855&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432432&n=XWpCNF54NOJ-JcVw6i&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMRtwdAXhT6jfexFCf-ydyg_IQqvzwk1q_ofwqgbCYQUAiEAmr6_1_PF2vVfRcoMcAZrNmJ6zTdS1t7YgodJ2dV_pc8%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAJw6y9S3fgZ8zWkNjaoeOkfaLee1K_T-Mr0zXGVX0DLOAiEAhcFdJWWWzLEvKoM6Nukap5vdjArR3N57fhlQwDNCFGA%3D"}
                                        controls={true}
                                        width="420px"
                                        height="315px"
                                    />
                                </div>
                                <div className={'col-md-4'}>
                                    <ReactPlayer
                                        url={"https://r1---sn-5jucgv5qc5oq-h55k.googlevideo.com/videoplayback?expire=1626362988&ei=DADwYKi9DtHJ4-EPy_GmuAw&ip=49.204.194.211&id=o-ANnOc-bZbGdHxZ-WzgIexQrA7W5OChPwOJ52S_Bh5ydL&itag=22&source=youtube&requiressl=yes&mh=YD&mm=31%2C29&mn=sn-5jucgv5qc5oq-h55k%2Csn-cvh7knsz&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=23&initcwndbps=1201250&vprv=1&mime=video%2Fmp4&ns=Zt4SPkYsbtZlq8WP5jMOfhwG&cnr=14&ratebypass=yes&dur=191.518&lmt=1618894614283782&mt=1626341104&fvip=5&fexp=24001373%2C24007246&c=WEB&txp=6316222&n=WtncLPMLhGilGmHAjT&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgNxjKRczf9VpOvuHBsEPrUxB3O17psXw89ADTcuLCYq4CIA5zI6md-kFGpB_yagjVeS3ivF-_pG1oBezZ3gLJ_vP6&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgPsj9Pd-WtyJeUBOGke_lycxQApFzhE9u2XXd3NiB-dcCIQDZC4aL52mvssFy7Kr5ztQ1rb1nlAG9k1h869HMI4GFNA%3D%3D"}
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