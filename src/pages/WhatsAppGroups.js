import React from 'react';
import {Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";


export default function WhatsAppGroups() {

    return (
        <Card body outline className={'border-0'}>
            <CardHeader style={{backgroundColor : '#e6e5ff'}}>
                <CardTitle tag="h5" style={{
                    justifyContent: 'start',
                    fontFamily : 'Trebuchet MS',
                }}>Nilgiri Academia WhatsApp Groups (Foundational Only)</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    Mathematics for Data Science - 1:
                    <a href={'https://chat.whatsapp.com/GSC5guuYa1A1llza9DltSI'} target={"_blank"}>click here to join group.</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    Statistics for Data Science - 1:
                    <a href={'https://chat.whatsapp.com/Dv2oFYIBqS73RPgUIqiBzK'} target={"_blank"}>click here to join group.</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    Computational Thinking:
                    <a href={'https://chat.whatsapp.com/HWj1K60cxZm3rTMTUxoA7Y'} target={"_blank"}>click here to join group.</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    Mathematics for Data Science - 2:
                    <a href={'https://chat.whatsapp.com/GxZrHIDpvRnJg2SevphYf4'} target={"_blank"}>click here to join group.</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    Statistics for Data Science - 2:
                    <a href={'https://chat.whatsapp.com/FuRwogGx3WE4LveuF7UO9V'} target={"_blank"}>click here to join group.</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    Programming in Python:
                    <a href={'https://chat.whatsapp.com/D2EDbGExuc134auidVpPzd'} target={"_blank"}>click here to join group.</a>
                </CardText>
            </CardBody>
        </Card>
    );
}