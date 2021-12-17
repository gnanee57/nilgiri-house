import React from "react";
import useWindowSize from "./useWindowSize";
import {Jumbotron, Media} from "reactstrap";
import clubList from "../assests/jumbotron/listClubs.png";
import {Loading} from "./LoadingComponent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function ClubsList(props) {

    React.useEffect(() => {
        document.title = 'Nilgiri Clubs & Societies';
    }, []);

    const size = useWindowSize();


    if (props.clubsLoading) {
        return (
            <Loading />
        );
    } else if (props.clubsErrMess) {
        return (
            <h4>{props.clubsErrMess}</h4>
        );
    } else {
        return (
            <div>
                <Jumbotron className={'col-md-12 d-none d-sm-block'}>
                    <img src={clubList} width={size.width - 17} height="500"/>
                </Jumbotron>
                <div className="container-fluid">
                    <section className="mt-5 mb-5">
                        <h4 className="text-center dark-grey-text mb-5 pt-3 wow fadeIn" data-wow-delay="0.2s" style={{
                            fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold'}}>
                            Clubs , Societies & Organizations of Nilgiri House
                        </h4>
                    </section>
                    <div className={"row"}>
                        {props.clubs.map(club =>  {
                            return (
                                <div className={"col-lg-3 col-md-6 mb-2"}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt={club.clubName}
                                            height="250"
                                            width="200"
                                            image={club.clubPic}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {club.clubName}
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography paragraph>{club.clubDescription} <br/><br/>
                                                For more details, <a href={ "mailto:" + club.contactId}>
                                                contact </a> &nbsp;{club.clubLeader}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small"
                                                    onClick={()=>
                                                        window.open(club.clubWhatsAppLink, "_blank")}
                                                    aria-label="join now"
                                            ><WhatsAppIcon />&nbsp;Join WhatsApp Group</Button>
                                        </CardActions>
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