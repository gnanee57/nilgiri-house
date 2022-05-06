import React from "react";
import {CardText} from "reactstrap";
import moment from "moment";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


export default function FeaturedAnnouncements() {
    return (
        <section className="mt-2 mb-2">
            <h2 className="pink-text text-uppercase font-weight-bold mb-2 pt-4">
                Announcements & updates</h2>
            <hr className="mb-2" />
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2022-02-20').format("MMM Do YY")} : We congratulate Faisal Hasan and Soumyabrata Mahapatra for becoming new Secretary
                and Deputy Secretary of Nilgiri House.
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2022-02-15').format("MMM Do YY")} : We congratulate GokulaKrishnan M, Secretary of Nilgiri
                House for becoming new Academic Affairs Coordinator of Student Executive Council of IITM BSC Program.
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2022-01-24').format("MMM Do YY")} : Greetings from Nilgiri Academia, One last step to blast off!
                This <a href={"https://forms.gle/qB7sVNQZpUmBrvCs6"} target={'_blank'}> form </a> is being shared for gathering people who can solve doubts of students during live sessions which are being conducted by Nilgiri house.
                Do fill this <a href={"https://forms.gle/qB7sVNQZpUmBrvCs6"} target={'_blank'}> form </a> if you want to help in clearing student's doubts relating to a particular subject. Deadline to fill the form - 25/01/2022 at 6pm
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2022-01-20').format("MMM Do YY")} : Greetings form Nilgiri Academia, The House of Nilgiri's
                is happy to announce the coming back of its study groups that might benefit your preparation. This sessions aims
                to explain the concepts as well as problem solving on weekly basis. As a first step we would like to know about
                the courses you have enrolled this term so that we can assign appropriate study group for you. Kindly fill this
                <a href={"https://forms.gle/QzaZrtMkqLHKJBRZ8"} target={'_blank'}> form </a> asap so that we can kick start the
                study group before quiz 1 itself :: For more details: <a href={"https://docs.google.com/document/d/1Iew933Hx6oexAYaVGfaD-gXlJQh8Ijj4HYPUNVh6s_I/edit?usp=sharing"} target={'_blank'}>
                read this document.</a>
            </CardText>
            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                fontSize: 'medium', fontWeight: 'bold'}}>
                {moment('2022-01-10').format("MMM Do YY")} : We are pleased to inform you that our Nilgiri house is
                now officially on Youtube. So please <a href={"https://www.youtube.com/channel/UCTAxNwe8HM_mfYtuGKqKGZQ"} target={'_blank'}> subscribe </a> to our
                our Youtube Channel.
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