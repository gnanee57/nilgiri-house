import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardTitle, Jumbotron} from "reactstrap";
import eventBanner from "../assests/jumbotron/nilgiri_events.jpg";
import logo from "../assests/nilgiri_transparent.png";
import {Loading} from "./LoadingComponent";
import useWindowSize from "./useWindowSize";
import {ExpandMore} from "@material-ui/icons";
import {Collapse} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";

const PastEvents = (props) => {

    const CardTime = (props) => {
        if(props.event.eventStartDate === props.event.eventEndDate) {
            if (props.event.eventStartTime !== '' || props.event.eventEndTime !== '') {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                        &nbsp; {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                        <br/><br/>
                        Venue: {props.event.venue} <br/>
                    </Typography>
                );
            } else {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        <br/><br/>
                        Venue: {props.event.venue} <br/>
                    </Typography>
                );
            }
        } else {
            if (props.event.eventStartTime !== '' || props.event.eventEndTime !== '') {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                        &nbsp; {moment(props.event.eventEndDate).format("MMM Do YY")} &nbsp;
                        {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                        <br/><br/>
                        Venue: {props.event.venue} <br/>
                    </Typography>
                );
            } else {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")} &nbsp; - &nbsp;
                        {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                        <br/><br/>
                        Venue: {props.event.venue} <br/>
                    </Typography>
                );
            }
        }
        if(props.event.eventStartDate === props.event.eventEndDate) {
            return (
                <Typography variant="body2" color="text.secondary">
                    {moment(props.event.eventStartDate).format("MMM Do YY")}
                    &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                    &nbsp; {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                    <br/><br/>
                    Venue: {props.event.venue} <br/>
                </Typography>
            );
        }
        else {
            return (
                <Typography variant="body2" color="text.secondary">
                    {moment(props.event.eventStartDate).format("MMM Do YY")} - {moment(props.event.eventEndDate).format("MMM Do YY")}
                    <br/>
                    Venue: {props.event.venue} <br/>
                </Typography>
            );
        }

    }
    const CardDescription = (props) => {
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        if (props.event.eventDescription !== '') {
            return (
                <React.Fragment >
                    <CardActions>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>{props.event.eventDescription}</Typography>
                        </CardContent>
                    </Collapse>
                </React.Fragment>
            );
        } else {
            return <div></div>;
        }
    }
    const CardFooter = (props) => {
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        if (props.event.prizeWinners1 !== undefined) {
            return (
                <React.Fragment >
                    <CardActions>
                        <Button size="small"
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                        >Click Here see the winners</Button>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>{props.event.winnersTag}</Typography>
                            <Typography paragraph>
                                {props.event.prizeWinners1}
                            </Typography>
                            <Typography paragraph>
                                {props.event.prizeWinners2}
                            </Typography>
                            <Typography paragraph>
                                {props.event.prizeWinners3}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </React.Fragment>
            );
        } else {
            return <div></div>;
        }
    }
    if (props.eventsLoading) {
        return (
            <Loading/>
        );
    } else if (props.eventsErrMess || props.events === undefined) {
        return (
            <h4>{props.eventsErrMess}</h4>
        );
    } else {
        return (
            <div className="container-fluid">
                <section className="mt-5 mb-5">
                    <h4 className="text-center dark-grey-text mb-5 pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                        fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                        textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                        Past events
                    </h4>
                    <p className="text-center w-responsive mx-auto my-5 grey-text wow fadeIn" data-wow-delay="0.2s">
                        The things we do outlast our mortality. The things we do are like monuments that people build
                        to honor heroes after they’ve died. They’re like the pyramids that the Egyptians built to
                        honor the pharaohs. Only instead of being made of stone, they’re made out of the memories
                        people have of you.</p>
                </section>
                <div className={"row"}>
                {props.events.filter(event => event.type === "past").map(event => event).reverse().map(event => {
                    return (
                        <div className={"col-lg-3 col-md-6 mb-2"}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={event.eventName}
                                height="250"
                                width="200"
                                image={event.eventDownloadLink}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {event.eventName}
                                </Typography>
                                <CardTime event = {event}/>
                            </CardContent>
                            <CardDescription event = {event}/>
                            <CardFooter event = {event}/>
                        </Card>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default function Events(props) {

    const size = useWindowSize();

    return (
        <React.Fragment>
            <Jumbotron className={'col-md-12 d-none d-xl-block'}>
                <img src={eventBanner} width={size.width - 17} height="500"/>
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
                                fontFamily: 'Trebuchet MS',
                                fontSize: 'xx-large',
                                fontWeight: 'bold'
                            }}>Events</CardTitle>
                            <CardTitle tag="h5" style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: 'floralwhite',
                                fontFamily: 'Trebuchet MS',
                                fontSize: 'large',
                                fontWeight: 'bold'
                            }}> Fun on the way... </CardTitle>
                        </div>
                        <div className="col-12 col-sm-3 align-self-center mt-2"/>
                        <div className="col-12 col-sm-3 align-self-center mt-2">
                            <img src={logo} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <PastEvents events={props.events}
                        eventsLoading={props.eventsLoading}
                        eventsErrMess={props.eventsErrMess}/>

        </React.Fragment>
    );
}