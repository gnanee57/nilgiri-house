import React from 'react';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from 'react-router-dom';
import { Loading } from '../LoadingPage';
import {CardHeader} from "@material-ui/core";
import moment from "moment";
import {CardText} from "reactstrap";

function CourseMenu(props) {

    let cardStyle = {
        display: 'block',
        transitionDuration: '0.3s',
        minHeight: '25vw'
    }

    const foundationMenu = props.courses.filter(course => course.level === "foundation").map((course)=> {
        return (
            <div className={"col-lg-3 col-md-6 mb-5"}>
                <Card style={cardStyle}>
                    <Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>
                        <CardHeader
                            titleTypographyProps={{
                                variant: 'display3',
                            }}
                            subheaderTypographyProps={{
                                variant: 'caption',
                            }}
                            title={course.name}
                            subheader={'by ' + course.instructors}
                        />
                        <CardMedia
                            component="img"
                            alt={course.name}
                            image={course.image}
                        />
                    </Link>
                </Card>
            </div>
        );
    });

    const diplomaProgrammingMenu = props.courses.filter(course =>
        course.level === "diplomaProgramming").map((course)=> {
        return (
            <div className={"col-lg-3 col-md-6 mb-5"}>
                <Card style={cardStyle}>
                    <Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>
                        <CardHeader
                            titleTypographyProps={{
                                variant: 'display3',
                            }}
                            subheaderTypographyProps={{
                                variant: 'caption',
                            }}
                            title={course.name}
                            subheader={'by ' + course.instructors}
                        />
                        <CardMedia
                            component="img"
                            alt={course.name}
                            image={course.image}
                        />
                    </Link>
                </Card>
            </div>
        );
    });

    const diplomaDataScienceMenu = props.courses.filter(course =>
        course.level === "diplomaDataScience").map((course)=> {
        return (
            <div className={"col-lg-3 col-md-6 mb-5"}>
                <Card style={cardStyle}>
                    <Link style={{ textDecoration: 'none' }} to={`/courses/${course.id}`}>
                        <CardHeader
                            titleTypographyProps={{
                                variant: 'display3',
                            }}
                            subheaderTypographyProps={{
                                variant: 'caption',
                            }}
                            title={course.name}
                            subheader={'by ' + course.instructors}
                        />
                        <CardMedia
                            component="img"
                            alt={course.name}
                            image={course.image}
                        />
                    </Link>
                </Card>
            </div>
        );
    });

    if(props.isLoading) {
        return(
            <div className = "container">
                <div className = "row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className = "container">
                <div className = "row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center">COURSES</h3>
                        <hr />
                    </div>
                </div>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    To calculate your course grade:
                    <a href={'https://grade-calc.ashwinhebbar314.repl.co'} target={"_blank"}>click here</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    For PQPs:
                    <a href={'https://sites.google.com/student.onlinedegree.iitm.ac.in/iitmbsc-academia/home'} target={"_blank"}>click here</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    For Notes and Other Materials:
                    <a href={'https://theopennotesorg.web.app'} target={"_blank"}>click here</a>
                </CardText>
                <CardText style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                    fontSize: 'medium', fontWeight: 'bold'}}>
                    To join Nilgiri Academia WhatsApp Groups(Only Foundational):
                    <Link to={'/clubs/academia/groups'}>click here</Link>
                </CardText>
                <div className="row">
                    <h3 >Foundational Level Courses</h3>
                    {foundationMenu}
                    <h3 >Diploma in Programming Courses</h3>
                    {diplomaProgrammingMenu}
                    <h3 >Diploma in Data Science Courses</h3>
                    {diplomaDataScienceMenu}
                </div>
            </div>
        );           
}



export default CourseMenu;