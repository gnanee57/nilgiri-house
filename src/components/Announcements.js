import React from "react";
import useWindowSize from "./useWindowSize";
import {Card, CardBody, CardHeader, CardText, CardTitle, Jumbotron} from "reactstrap";
import announcement from "../announce.jpg";
import moment from "moment";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function Announcements() {
    const size = useWindowSize();

    return (
        <>
            <Jumbotron>
                <img src={announcement} width={size.width - 17} height="500" />
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
                </CardBody>
            </Card>
        </>
    );
}

export default Announcements;