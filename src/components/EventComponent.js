import React, {useRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import Button from '@material-ui/core/Button';
import {Card, CardBody, CardFooter, CardHeader, CardSubtitle, CardText, CardTitle, Jumbotron} from "reactstrap";
import eventBanner from "../assests/jumbotron/nilgiri_events.jpg";
import useWindowSize from "./useWindowSize";
import moment from "moment";
import {CardActions} from "@material-ui/core";
import logo from "../assests/nilgiri_transparent.png";


function Events() {
    const [eventDetail, setEventDetail] = useState(null);
    const calendarRef = useRef(null);

    const eventClicked = (event) => {
        calendarRef.current.getApi().gotoDate(event.el.fcSeg.eventRange.range.start)
        console.log(event.event._def.extendedProps.attachments)
        console.log(event.event._def.title)
        console.log(moment(event.event._instance.range.start))
        console.log(event.event._instance.range.end)
        console.log(event.event._def.extendedProps.description)
    }

    const Calendar = () => {
        return (
            <FullCalendar
                ref={calendarRef} nowIndicator navLinks
                headerToolbar={{
                    left: 'prevYear,prev,today,next,nextYear',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                }}
                buttonText={{
                    today: 'Today',
                    month: 'Month',
                    week: 'Week',
                    day: 'Day',
                    list: 'List'
                }}
                plugins={[
                    googleCalendarPlugin,
                    interactionPlugin,
                    dayGridPlugin,
                    listPlugin
                ]}
                googleCalendarApiKey = 'AIzaSyAz2qNTpW9Tf7CPxctJ76LR--UEAdfOGsQ'
                events= {{
                    googleCalendarId: 'c_classroomeec35ce9@group.calendar.google.com',
                }}
                eventClick={eventClickInfo => {
                    eventClickInfo.jsEvent.cancelBubble = true;
                    eventClickInfo.jsEvent.preventDefault();
                    console.log(eventClickInfo)
                    setEventDetail(eventClickInfo)
                    eventClicked(eventClickInfo)
                }}
                editable
                selectable
            />
        );
    }


    const EventAttachment = (props) => {
        if(props.event.event._def.extendedProps.attachments[0] != null) {
            return (
                <CardActions>
                    <Button size="small" href={props.event.event._def.extendedProps.attachments[0].fileUrl} target="_blank">
                        {props.event.event._def.extendedProps.attachments[0].title}
                    </Button>
                </CardActions>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const EventDetails = (props) => {
        if(props.event != null) {
            return (
                <Card body outline className={'border-0'}>
                    <CardHeader style={{backgroundColor : '#e6e5ff'}} >
                        <CardTitle tag="h5" style={{
                            justifyContent: 'center',
                            fontFamily : 'Trebuchet MS',
                        }}>Event / Actvity Name: {props.event.event._def.title}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" style={{
                            justifyContent: 'center',
                            fontFamily : 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                        }}>
                            Start Date/Time: {moment(props.event.event._instance.range.start).subtract({'h': 5, 'm':30}).format(
                                "MMMM Do YYYY, h:mm a")} <br/>
                            End Date/Time: {moment(props.event.event._instance.range.end).subtract({'h': 5, 'm':30}).format(
                            "MMMM Do YYYY, h:mm a")}
                        </CardSubtitle>
                    </CardHeader>
                    <CardBody>
                        <CardText style={{
                            justifyContent: 'center',
                            fontFamily: 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                            fontWeight: 'bold'
                        }} >
                            Event Description:
                        </CardText>
                        <CardText style={{
                            justifyContent: 'center',
                            fontFamily: 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                            fontWeight: 'bold'
                        }} dangerouslySetInnerHTML={{__html:props.event.event._def.extendedProps.description}} />
                    </CardBody>
                    <EventAttachment event = {eventDetail} />
                    <CardFooter style={{backgroundColor : '#e6e5ff'}}>
                        <CardText style={{
                            justifyContent: 'center',
                            fontFamily : 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                        }}><a href={'https://calendar.google.com/calendar/u/3?' +
                        'cid=Y19jbGFzc3Jvb21lZWMzNWNlOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'} target={'_blank'}>Click here
                        </a>, to add this calendar to your Google Calendar
                        </CardText>
                    </CardFooter>
                </Card>
            );
        }
        else {
            return (
                <Card body outline className={'border-0'}>
                    <CardHeader style={{backgroundColor : '#e6e5ff'}} >
                        <CardTitle tag="h5" style={{
                            justifyContent: 'center',
                            fontFamily : 'Trebuchet MS',
                        }}>No Event Selected</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" style={{
                            justifyContent: 'center',
                            fontFamily : 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                        }}>
                            Click an Event/Activity in the Calendar to display the details.
                        </CardSubtitle>
                    </CardHeader>
                </Card>
            );
        }
    };

    const size = useWindowSize();

    return (
        <div>
            <Jumbotron className={'col-md-12 d-none d-xl-block'}>
                <img src={eventBanner} width={size.width  - 17} height="500" />
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
                            }}>Events</CardTitle>
                            <CardTitle tag="h5" style={{
                                justifyContent: 'center',
                                textAlign: 'center',
                                color: 'floralwhite',
                                fontFamily : 'Trebuchet MS',
                                fontSize: 'large',
                                fontWeight: 'bold'
                            }}> Fun on the way... </CardTitle>
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
                    <div className="col-12 col-md-7">
                        <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold', marginBottom: '25px'}}>
                            Nilgiri House :: Events / Activities Calendar
                        </h4>
                        <Calendar />
                    </div>
                    <div className ="col-12 col-md-5 justify-content-start mt-5">
                        <EventDetails event = {eventDetail} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;