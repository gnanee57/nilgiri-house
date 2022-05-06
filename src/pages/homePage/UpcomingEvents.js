import React from "react";
import EventIcon from "@material-ui/icons/Event";
import {Link} from "react-router-dom";
import moment from "moment";


export default function UpcomingEvents() {
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
                                Rise n shine. It's huntin' time! &nbsp;
                                <Link style={{ textDecoration: 'none' }} to={`/events/18`}>
                                    read more
                                </Link></p>
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
                                {moment('2022-02-21T19:00:00').format("MMM Do YY h a")} -&nbsp;
                                {moment('2022-02-21T20:00:00').format("h a")}
                            </h4>
                            <h6 className="mb-3 dark-grey-text">
                                Kya Raaz hai tumhare apni bhasha mein</h6>
                            <p className="grey-text">On the auspicious occasion of the
                                International Mother Language Day, Nilgiri House brings you an interesting
                                Talk Show with the underlying theme of 'Kya Raaz hai tumhare apni bhasha mein'
                                where you people will share some insights & interesting stories &nbsp;
                                <Link style={{ textDecoration: 'none' }} to={`/events/16`}>
                                    read more
                                </Link></p>
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
                                {moment('2022-02-21T20:00:00').format("MMM Do YY h a")}
                            </h4>
                            <h6 className="mb-3 dark-grey-text">
                                Cross Lingua</h6>
                            <p className="grey-text">Keeping your passion in mind, Nilgiri House brings you a funny
                                Crossword competition where all the work-outable hints will lead you towards the names
                                of some really popular languages over the world. &nbsp;
                                <Link style={{ textDecoration: 'none' }} to={`/events/17`}>
                                    read more
                                </Link></p>
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