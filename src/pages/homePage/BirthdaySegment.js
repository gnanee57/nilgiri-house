import React from "react";
import {Loading} from "../LoadingPage";
import {Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import moment from "moment";
import birthdayPic from "../../assests/birthday.png";

export default function BirthdaySegment(props) {

    if (props.isLoading) {
        return (
            <Loading />
        );
    } else if (props.errMess || props.birthday[0] === undefined) {
        return (
            <Card body outline className={'border-0'}>
                <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                    <CardTitle tag="h5" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                    }}>Birthday of the Day</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Date: {moment().format("MMM Do YY")}</CardSubtitle>
                </CardHeader>
                <div>
                    <CardImg src={birthdayPic} alt="Card image cap"/>
                </div>
                <CardFooter style={{backgroundColor: '#e6e5ff'}}>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Want your birthday to be displayed? <a href="https://forms.gle/Y46JLFWhBzbtEobYA"
                                                              target={'_blank'}>
                        Fill this form.</a>
                    </CardText>
                </CardFooter>
            </Card>
        );
    } else {
        return (
            <Card body outline className={'border-0'}>
                <CardHeader style={{backgroundColor: '#e6e5ff'}}>
                    <CardTitle tag="h5" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                    }}>Birthday of the Day</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Date: {moment().format("MMM Do YY")}</CardSubtitle>
                </CardHeader>
                <div>
                    <CardImg height={"50%"} src={props.birthday[0].linkUrl} alt="Card image cap"/>
                    <CardBody>
                        <CardText style={{
                            justifyContent: 'center',
                            fontFamily: 'Trebuchet MS',
                            fontStyle: 'italic',
                            fontSize: 'small',
                            fontWeight: 'bold'
                        }}>
                            Wish you many more happy returns of the Day "{props.birthday[0].name}". May all your dreams come true.
                        </CardText>
                    </CardBody>
                </div>
                <CardFooter style={{backgroundColor: '#e6e5ff'}}>
                    <CardText style={{
                        justifyContent: 'center',
                        fontFamily: 'Trebuchet MS',
                        fontStyle: 'italic',
                        fontSize: 'small',
                    }}>Want your birthday to be displayed? <a href="https://forms.gle/Y46JLFWhBzbtEobYA"
                                                              target={'_blank'}>
                        Fill this form.</a>
                    </CardText>
                </CardFooter>
            </Card>
        );
    }
}