import * as React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle
} from "reactstrap";
import {Link} from "react-router-dom";
import moment from "moment";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EventIcon from '@material-ui/icons/Event';
import {Chip} from "@material-ui/core";
import {Loading} from "../LoadingPage";

export default function EventDetail(props) {


    const EventTime = () => {
        if(props.event.eventStartDate === props.event.eventEndDate) {
            if (props.event.eventStartTime !== 'null' || props.event.eventEndTime !== 'null') {
                return (
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                        &nbsp; {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                    </CardSubtitle>
                );
            } else {
                return (
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                    </CardSubtitle>
                );
            }
        } else {
            if (props.event.eventStartTime !== 'null' || props.event.eventEndTime !== 'null') {
                return (
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>
                        {moment(props.event.eventStartDate).format("MMM Do YY")}
                        &nbsp; {moment(props.event.eventStartTime, 'hh:mm a').format("LT")}  &nbsp; -
                        &nbsp; {moment(props.event.eventEndDate).format("MMM Do YY")} &nbsp;
                        {moment(props.event.eventEndTime, 'hh:mm a').format("LT")}
                    </CardSubtitle>
                );
            } else {
                return (
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>
                        {moment(props.event.eventStartDate).format("MMM Do YY")} &nbsp; - &nbsp;
                        {moment(props.event.eventEndDate).format("MMM Do YY")}
                    </CardSubtitle>
                );
            }
        }
    }

    const EventDescription = () => {

        if (props.event.eventDescription !== '') {

            return (
                <React.Fragment >
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'medium',
                        fontWeight: 'bold'
                    }}> {props.event.eventDescription.replace("?","?\n").replace(".",".\n").replace("!","!\n").split("\n").map(
                        (it, i) => <div key={'x'+i}>{it}</div> )}
                    </CardText>
                    <EventRegisterLink />
                    <EventMeetLink/>
                    <PrizeWinners />
                </React.Fragment>
            );
        } else {
            return (
                <PrizeWinners />
            );
        }
    }
    const PrizeWinners = () => {

        if (props.event.prizeWinners1 !== undefined) {
            return (
                <React.Fragment>
                    <CardTitle tag="h5" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                    }}>{props.event.winnersTag}</CardTitle>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'medium',
                        fontWeight: 'bold'
                    }}>
                        1st : {props.event.prizeWinners1} <br/>
                        2nd : {props.event.prizeWinners2} <br/>
                        3rd : {props.event.prizeWinners3}
                    </CardText>
                </React.Fragment>
            );
        } else {
            return <div/>;
        }
    }

    const EventBadge = () => {

        if (props.event.type === 'past') {
            return (
                <React.Fragment>
                    <Chip icon={<EventAvailableIcon />} label="Past Event" />
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Chip icon={<EventIcon />} label="Upcoming Event" />
                </React.Fragment>
            );
        }
    }

    const EventRegisterLink = () => {
        if (props.event.type === 'upComing' && props.event.registerLink !== 'null') {
            return (
                <React.Fragment>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'medium',
                        fontWeight: 'bold'
                    }}><a href={props.event.registerLink} target={"_blank"}>Click here,</a> to Register</CardText>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment/>
            );
        }
    }

    const EventMeetLink = () => {
        if (props.event.type === 'upComing' && props.event.meetLink !== 'null') {
            return (
                <React.Fragment>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'medium',
                        fontWeight: 'bold'
                    }}><a href={props.event.meetLink} target={"_blank"}>Click here,</a> to join the event/Meeting.</CardText>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment/>
            );
        }
    }

    if(props.isLoading) {
        return <Loading />;
    } else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        );
    } else {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={{
                    backgroundImage: 'url("https://drive.google.com/uc?export=download&id=1iev3zMjNCzW42SKj_QEDVroqC3-zyXBc")',
                    backgroundSize: 'cover'
                }}/>
                <div className="container-fluid mt-5">
                    <div className="row m-3">
                        <Breadcrumb>
                            <BreadcrumbItem><Link style={{textDecoration: 'none'}} to="/events">
                                All Events</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.event.eventName}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <Card body outline className={'border-0'}>
                                <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                                    <CardTitle tag="h5" style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                    }}>{props.event.eventName}</CardTitle>
                                    <EventTime/>
                                    <CardText style={{
                                        justifyContent: 'center',
                                        fontFamily: 'Trebuchet MS',
                                        fontStyle: 'italic',
                                        fontSize: 'small',
                                        fontWeight: 'bold'
                                    }}>Venue: {props.event.venue} <EventBadge/>
                                    </CardText>
                                </CardHeader>
                                <CardBody>
                                    <CardImg top src={props.event.eventDownloadLink} alt={props.event.name}/>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-6 mt-md-5">
                            <EventDescription/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}