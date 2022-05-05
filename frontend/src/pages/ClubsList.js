import React, {useEffect} from "react";
import {Loading} from "./LoadingComponent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import {useDispatch, useSelector} from "react-redux";
import {fetchClubs} from "../redux/ActionCreators";
import {CardText} from "reactstrap";

function ClubsList() {

    const clubs=  useSelector(state => state.clubs);

    const dispatch = useDispatch();

    useEffect(async() => {
        document.title = 'Nilgiri Clubs & Societies';
        dispatch(fetchClubs());
    }, []);

    if (clubs.loading) {
        return (
            <Loading />
        );
    } else if (clubs.errMess) {
        return (
            <h4>{clubs.errMess}</h4>
        );
    } else {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={{
                    backgroundImage : 'url("https://drive.google.com/uc?export=download&id=1qOGyA6kyuDWhoZtvltf8Or1QSIUUUmdR")',
                    backgroundSize : 'cover',
                    opacity: '0.8'
                }} />
                <div className="container-fluid">
                    <section className="mt-5 mb-5">
                        <h4 className="text-center dark-grey-text mb-5 pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                            fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                            Clubs , Societies & Organizations of Nilgiri House
                        </h4>
                    </section>
                    <div className={"row"}>
                        {clubs.clubs.map(club =>  {
                            return (
                                <div className={"col-lg-3 col-md-6 mb-4"}>
                                    <Card style={{height:"560px"}}>
                                        <CardMedia
                                            component="img"
                                            alt={club.clubName}
                                            height="250"
                                            width="200"
                                            image={club.clubPic}
                                        />
                                        <CardContent>
                                            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                                fontSize: 'medium', fontWeight: 'bold'}}>
                                                {club.clubName}
                                            </CardText>
                                            <CardText className="wow fadeIn" data-wow-delay=".4s" style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                                                fontSize: 'medium'}}> {club.clubDescription} &nbsp;
                                                For more details, <a href={ "mailto:" + club.contactId}>
                                                    contact </a> &nbsp;{club.clubLeader}
                                            </CardText>
                                            <Button size="small"
                                                    onClick={()=> window.open(club.clubWhatsAppLink, "_blank")}
                                                    aria-label="join now"
                                            ><WhatsAppIcon />&nbsp;Join WhatsApp Group</Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ClubsList;