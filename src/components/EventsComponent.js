import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Loading} from "./LoadingComponent";
import {ExpandMore} from "@material-ui/icons";
import {Collapse, styled} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchEvents} from "../redux/ActionCreators";
import IconButton from "@material-ui/core/IconButton";

const PastEvents = (props) => {

    const CardTime = (props) => {
        if(props.event.eventStartDate === props.event.eventEndDate) {
            if (props.event.eventStartTime !== 'null' || props.event.eventEndTime !== 'null') {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                        &nbsp; {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                        <br/>
                    </Typography>
                );
            } else {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        <br/>
                    </Typography>
                );
            }
        } else {
            if (props.event.eventStartTime !== 'null' || props.event.eventEndTime !== 'null') {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                        &nbsp; {moment(props.event.eventEndDate).format("MMM Do YY")} &nbsp;
                        {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                        <br/>
                    </Typography>
                );
            } else {
                return (
                    <Typography variant="body2" color="text.secondary">
                        {moment(props.event.eventStartDate).format("MMM Do YY")} &nbsp; - &nbsp;
                        {moment(props.event.eventEndDate).format("MMM Do YY")}
                        <br/>
                    </Typography>
                );
            }
        }
    }
    const CardDescription = (props) => {

        const ExpandMore = styled((props) => {
            const { expand, ...other } = props;
            return <IconButton {...other} />;
        })(({ theme, expand }) => ({
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        }));

        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        if (props.event.eventDescription !== '') {
            return (
                <React.Fragment >
                    <CardActions>
                        <Typography style={{marginRight: "auto"}} variant="body2" color="text.secondary">Venue: {props.event.venue}</Typography>
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
                            <CardFooter event = {props.event}/>
                        </CardContent>
                    </Collapse>
                </React.Fragment>
            );
        } else {
            return (
                <CardContent style={{marginRight : "initial"}}>
                    <Typography variant="body2" color="text.secondary">Venue: {props.event.venue}</Typography>
                    <CardFooter event = {props.event}/>
                </CardContent>
            );
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
                                1st : {props.event.prizeWinners1}
                            </Typography>
                            <Typography paragraph>
                                2nd : {props.event.prizeWinners2}
                            </Typography>
                            <Typography paragraph>
                                3rd : {props.event.prizeWinners3}
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
                                <CardTime event={event} />
                                <CardDescription event = {event}/>
                            </CardContent>
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

    const events=  useSelector(state => state.events);

    const dispatch = useDispatch();

    useEffect(async() => {
        document.title = 'Nilgiri Events';
        dispatch(fetchEvents());
    }, []);

    return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid" style={{
                backgroundImage : 'url("https://drive.google.com/uc?export=download&id=1dflPoHrKCFLgItjWy9QFdLLIaxgu8jqG")',
                backgroundSize : 'cover',
                opacity: '0.8'
            }} />
            <PastEvents events={events.events}
                        eventsLoading={events.loading}
                        eventsErrMess={events.errMess}/>

        </React.Fragment>
    );
}