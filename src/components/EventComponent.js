import React, {createRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/daygrid/main.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Jumbotron} from "reactstrap";
import eventBanner from "../nilgiri_events.jpg";
import useWindowSize from "./useWindowSize";

const calendarApiRef = createRef();

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Events() {
    const [eventDetail, setEventDetail] = useState(null);

    const eventClicked = (event) => {
        console.log(event.event._def.title)
        console.log(event.el.fcSeg.eventRange.range.start)
        console.log(event.el.fcSeg.eventRange.range.end)
        console.log(event.event._def.extendedProps.description)
    }

    const Calendar = () => {
        return (
            <FullCalendar
                ref={calendarApiRef} nowIndicator navLinks
                headerToolbar={{
                    left: 'prev,today,next',
                    center: 'title',
                    right: 'dayGridMonth, dayGridWeek, dayGridDay'
                }}
                plugins={[
                    googleCalendarPlugin,
                    interactionPlugin,
                    dayGridPlugin
                ]}
                googleCalendarApiKey = 'AIzaSyAz2qNTpW9Tf7CPxctJ76LR--UEAdfOGsQ'
                events= {{
                    googleCalendarId: 'c_1odtkdev6kslj8js0c2bbb2vio@group.calendar.google.com',
                }}
                eventClick={eventClickInfo => {
                    eventClickInfo.jsEvent.preventDefault();
                    eventClickInfo.jsEvent.cancelBubble = true;
                    console.log(eventClickInfo)
                    setEventDetail(eventClickInfo)
                    eventClicked(eventClickInfo)
                }}
                editable
                selectable
                defaultView="dayGridMonth"
            />
        );
    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const EventDetails = (props) => {
        if(props.event != null) {
            return (
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {props.event.event._def.title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary"
                                    dangerouslySetInnerHTML={{__html:props.event.event._def.extendedProps.description}}
                        >
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            );
        }
        else {
            return (
            <div>
                No Event Selected
            </div>
            );
        }

    }

    const size = useWindowSize();

    return (
        <div>
            <Jumbotron>
                <img src={eventBanner} width={size.width - 17} height="440" />
            </Jumbotron>
        <div className="container">
            <div className="row">
                Past Events
            </div>
            <div className="row">
                <div className="col-12 col-md-8 justify-content-start">
                    <Calendar />
                </div>
                <div className ="col-12 col-md-4 justify-content-start">
                    <EventDetails event = {eventDetail} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Events;