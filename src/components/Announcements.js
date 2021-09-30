import React from "react";
import useWindowSize from "./useWindowSize";
import {Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Jumbotron} from "reactstrap";
import announcement from "../assests/jumbotron/announce.jpg";
import moment from "moment";

function Announcements() {
    const size = useWindowSize();

    return (
        <>
            <Jumbotron className={'col-md-12 d-none d-sm-block'}>
                <img src={announcement} width={size.width  - 17} height="500" />
            </Jumbotron>
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
                        {moment('2021-10-01').format("MMM Do YY")} : The Expression of Interest(EOI) Form
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
                    <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                        fontSize: 'medium', fontWeight: 'bold'}}>
                        {moment('2021-07-13').format("MMM Do YY")} : Please write an essay on the advantages and
                        disadvantages of learning English remotely as a part of the course. You may write about the English
                        course content and features that you like and dislike the most. The maximum word limit is 400 words
                        or a one-word page. The essays will be evaluated randomly and given feedbacks.
                        Use this <a href={'https://forms.gle/XVaUmTCS7vHny9hw6'} target={'_blank'}> G Form </a> to submit
                        your essay. Deadline: 16th July (11.00 pm)
                    </CardText>
                </CardBody>
            </Card>
        </>
    );
}

export default Announcements;