import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TelegramIcon from '@material-ui/icons/Telegram';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {Link} from "react-router-dom";
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function FooterPage(){
    return (
        <Footer color="primary-color" className="page-footer font-small pt-4 mt-4">
            {/*<div className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-fb mx-1"><FacebookIcon /></a></li>
                    <li className="list-inline-item"><a href={"https://www.instagram.com/nilgirihouse_iitm"} target={"_blank"} className="btn-floating btn-sm btn-gplus mx-1"><InstagramIcon /></a></li>
                    <li className="list-inline-item"><a href={"https://t.me/joinchat/0Bkmw5zCYhY1MThl"} target={"_blank"} className="btn-floating btn-sm btn-li mx-1"><TelegramIcon /></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><WhatsAppIcon /></a></li>
                </ul>
            </div>
            <hr/>*/}

            <Container className="text-left">
                <Row>
                    <Col md="6">
                        <h5 style={{color: "white"}} className="text-uppercase mb-4 mt-3 font-weight-bold">Subscribe to our NewsLetter</h5>
                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="2">
                        <h5 style={{color: "white"}}  className="text-uppercase mb-4 mt-3 font-weight-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to={'/events'}>Past Events</Link></li>
                            <li><a href="https://onlinedegree.iitm.ac.in/student_life.html" target={"_blank"}>IITM :: Student Life</a></li>
                            <li><a href={'https://sites.google.com/student.onlinedegree.iitm.ac.in/nilgiri-house-academia'}
                                   target={"_blank"}>Academia</a></li>
                            <li><a href={'https://sites.google.com/student.onlinedegree.iitm.ac.in/treehouse'}
                                   target={"_blank"}>Tree House</a></li>
                        </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="2">
                        <h5 style={{color: "white"}}  className="text-uppercase mb-4 mt-3 font-weight-bold">Forms</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">New Club Registration</a></li>
                            <li><Link to={"/events/eventRegistration"}>Event Registration</Link></li>
                            <li><Link to={'/grievance-form'}>Grievance Form</Link></li>
                        </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none" />
                    <Col md="2">
                        <h5 style={{color: "white"}} className="text-uppercase mb-4 mt-3 font-weight-bold">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="mailto:nilgiri-sec@student.onlinedegree.iitm.ac.in">
                                <MailOutlineIcon fontSize={'small'} style={{marginRight: '4px'}}/>Mail us</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center">
                <Container fluid>
                    &copy; {(new Date().getFullYear())} Copyright: Nilgiri House Council
                </Container>
            </div>
        </Footer>
    );
}

export default FooterPage;