import React from "react";
import {Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle} from "reactstrap";
import moment from "moment";

function Announcements() {

    React.useEffect(() => {
        document.title = 'Nilgiri Announcements';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="jumbotron jumbotron-fluid" style={{
                backgroundImage : 'url("https://drive.google.com/uc?export=download&id=1E27dOgDrjw8jjKyc9--yTen0wz43EKqa")',
                backgroundSize : 'cover',
                opacity: '0.8'
            }} />
            <Card body outline className={'border-0'}>
                <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                    <CardTitle tag="h5" style={{
                        justifyContent: 'start',
                        fontFamily : 'Trebuchet MS',
                    }}>Announcements / Updates</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                        fontSize: 'medium', fontWeight: 'bold'}}>
                        {moment('2022-02-20').format("MMM Do YY")} : We congratulate Faisal Hasan and for becoming new Secretary
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
                    <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                        fontSize: 'medium', fontWeight: 'bold'}}>
                        {moment('2021-08-16').format("MMM Do YY")} : Nilgiri invites the extended IITM peeps to our first informal get-together!
                        Call it an event, call it what you may but we guarantee you 2 things. Music and Fun!
                        <div>&emsp;1. Jamming Sesh- Either pre-register or spot register to get a chance to sing for the family,
                        we might also ask  everyone to turn on their mics and sing along!
                            <CardSubtitle className="mb-2 text-muted" style={{
                            justifyContent: 'center',
                            fontFamily : 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'large',
                        }}>&emsp;&emsp;Want to Participate? <a
                            href={'https://forms.gle/Hh9HjpyHqKmMAExP8'} target={'_blank'}>Click here</a> to Register!!!</CardSubtitle>
                        </div>
                        <div>&emsp;2. IITM Meme Marathon- We think wesan safely say we have some Meme Kings and Queens that's been putting out quality content on social media as well as</div><div>&emsp;&emsp;on our groups ever since the beginning of our course but maybe it's time we give them a stage to entertain!
                        Bring your memes and your wit to have</div><div>&emsp;&emsp;a fun evening!</div>
                            <CardSubtitle className="mb-2 text-muted" style={{
                                justifyContent: 'center',
                                fontFamily : 'Trebuchet MS',
                                fontStyle: 'italic',
                                fontSize: 'large',
                            }}>&emsp;&emsp;Want to Participate? <a href={'https://forms.gle/K7z5NYWThwizMy1U7'} target={'_blank'}>Click here</a> to Register!!!
                            </CardSubtitle>
                    </CardText>
                    <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                        fontSize: 'medium', fontWeight: 'bold'}}>
                        {moment('2021-07-14').format("MMM Do YY")} : As discussed in House council meetings, All
                        the house members have to opt for an active, passive or absentee membership that suits their needs.
                        So please fill this <a href={'https://forms.gle/xALs8NTencD12kqd6'} target={'_blank'}> G Form </a>
                        given to opt your membership.
                    </CardText>

                </CardBody>
            </Card>
        </div>
    );
}

export default Announcements;