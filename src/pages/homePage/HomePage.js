import React, {useEffect, useState} from "react";
import {QuoteStreak} from '../../components/QuoteStreak';
import {FeaturedHome} from "./FeaturedHome";
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchBirthday, fetchStudentDetails} from "../../redux/ActionCreators";
import {VideoPlayer} from "../../components/VideoPlayer";
import SearchHouse from "./SearchHouse";
import BirthdaySegment from "./BirthdaySegment";
import FeaturedAnnouncements from "./FeaturedAnnouncements";
import UpcomingEvents from "./UpcomingEvents";

function Home(props) {

    const birthday = useSelector(state => state.birthday);
    const studentDetails =  useSelector(state => state.studentDetails);

    const dispatch = useDispatch();

    const [studentId, setStudentId] = useState();

    const handleSearch = rollNum => {
        setStudentId(rollNum);
    }

    useEffect(async() => {
        document.title = 'Nilgiri Home';
    }, []);

    useEffect(async() => {
        dispatch(fetchBirthday());
    }, []);

    useEffect(async() => {
        dispatch(fetchStudentDetails(studentId));
    }, [studentId]);

    return(
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid d-none d-md-block" style={{backgroundImage :
            "url('https://drive.google.com/uc?export=download&id=1xHXG3-8Rm_KjbggCjo7nhZUeHafcEWV1')",
            backgroundSize : 'cover',
            opacity: '0.8'
            }}>
                <div className="container text-center">
                    <div className="col-12">
                        <div className="wow fadeInDown" data-wow-delay="0.5s">
                        <h1 style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textTransform: 'uppercase',
                            textShadow: '2px 2px black',
                            fontSize : '80px',
                            fontWeight: 'bold'
                        }}>Nilgiri House <br/>
                            <hr style={{ height: "5px",
                                border:'none'}} />
                        </h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p className="lead" style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'black',
                            opacity: '1',
                            textTransform: 'capitalize',
                            fontSize : '30px',
                            fontFamily : 'Trebuchet MS',
                            fontWeight: 'bold'
                        }}>Nearer to the House, Closer to your heart!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid d-none d-sm-block d-md-none" style={{backgroundImage :
                    "url('https://drive.google.com/uc?export=download&id=1xHXG3-8Rm_KjbggCjo7nhZUeHafcEWV1')",
                backgroundSize : 'cover',
                opacity: '0.7'
            }}>
                <div className="container text-center">
                    <div className="col-12">
                        <div className="wow fadeInDown" data-wow-delay="0.5s">
                        <h1 style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textShadow: '2px 2px black',
                            textTransform: 'uppercase',
                            fontSize : '50px',
                            fontWeight: 'bold'
                        }}>Nilgiri House <br/>
                            <hr style={{ height: "3px",
                                border:'none'}} />
                        </h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p className="lead" style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'dark-grey',
                            textTransform: 'capitalize',
                            fontSize : '20px',
                            fontFamily : 'Trebuchet MS',
                            fontWeight: 'bold'
                        }}>Nearer to the House, Closer to your heart!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid d-block d-sm-none" style={{backgroundImage :
                    "url('https://drive.google.com/uc?export=download&id=1xHXG3-8Rm_KjbggCjo7nhZUeHafcEWV1')",
                backgroundSize : 'cover',
                opacity: '0.7'
            }}>
                <div className="container text-center">
                    <div className="col-12">
                        <div className="wow fadeInDown" data-wow-delay="0.5s">
                        <h1 style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textShadow: '2px 2px black',
                            textTransform: 'uppercase',
                            fontSize : '30px',
                            fontWeight: 'bold'
                        }}>Nilgiri House <br/>
                            <hr style={{ height: "3px",
                                border:'none'}} />
                        </h1>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay="0.8s">
                        <p className="lead" style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'dark-grey',
                            textTransform: 'capitalize',
                            fontSize : '12px',
                            fontFamily : 'Trebuchet MS',
                            fontWeight: 'bold'
                        }}>Nearer to the House, Closer to your heart!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Jumbotron className='col-md-12 d-none d-xl-block'>
                <img src={home} width={size.width  - 17} height="500" />
            </Jumbotron>*/}
            <div className='container-fluid mt-2 overflow-hidden'>
                <div className={'row mb-3'}>
                    <div className={'col-md-9'}>
                        <FeaturedAnnouncements />
                    </div>
                    <div className={'col-md-3'}>
                        <BirthdaySegment birthday = {birthday.birthday}
                                         isLoading={birthday.loading}
                                         errMess={birthday.errMess}
                        />
                    </div>
                </div>
            </div>
            <SearchHouse
                handleSearch={handleSearch}
                studentDetails={studentDetails.studentDetails}
                studentDetailsLoading={studentDetails.loading}
                studentDetailsErrMess={studentDetails.errMess}
            />
            <div className={'container'}>
                <div className={'row mb-3'}>
                    <div className={'col-md-12'}>
                        <UpcomingEvents />
                    </div>
                </div>
            </div>
            <QuoteStreak
                imgUrl = 'https://mdbootstrap.com/img/Photos/Horizontal/Things/full%20page/img%20%287%29.jpg'
                text = "Creativity requires the courage to let go of certainties"
            />

            <div className='container-fluid overflow-hidden grey lighten-4'>
                <div className={'col-md-12'}>
                    <section className="mt-3 mb-2">
                        <h4 className="text-center dark-grey-text pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                            fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                            Our Wall
                        </h4>
                        <p className="text-center w-responsive mx-auto grey-text wow fadeIn" data-wow-delay="0.2s">
                            Want your work to be posted on Nilgiri Wall? <a
                            href={'https://forms.gle/fFftSgDAHcX7DDHp6'} target={'_blank'}>Fill this form</a></p>
                        <Divider />
                        <FeaturedHome featuredContent={props.featuredContent}/>
                        <div style={{ display: "flex" }}>
                            <Button variant="outlined" color="primary" style={{ marginLeft: "auto" }}>
                                <Link to={'/wall'}>
                                    view more
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
            <div className='container-fluid mt-2 overflow-hidden'>
                <section className="mt-5 mb-5">
                    <h4 className="text-center dark-grey-text mb-5 pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                        fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                        textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                        Glimpses
                    </h4>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <VideoPlayer url={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"} />
                            <div className={'d-block d-md-none mb-2'} />
                        </div>
                        <div className={'col-md-4'}>
                            <VideoPlayer url={"https://drive.google.com/uc?export=download&id=1UnZwKKmz0UAuzppg-qpFkb8YTBVYnPSZ"}/>
                            <div className={'d-block d-md-none mb-2'} />
                        </div>
                        <div className={'col-md-4'}>
                            <VideoPlayer url={'https://drive.google.com/uc?export=download&id=1EDfAmePz9Kj7aO-u4VnlDBL_H5f4lQ5N'}/>
                            <div className={'d-block d-md-none mb-2'} />
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Home;