import React from "react";
import {Card, CardBody, CardGroup, CardSubtitle,  CardTitle, } from "reactstrap";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar} from "@material-ui/core";
import ayush from '../assests/house_council_images/ayush.jpg';
import yoganath from '../assests/house_council_images/yoganath.jpg';
import suchitra from '../assests/house_council_images/suchitra.jpg';
import madhav from '../assests/house_council_images/madhav.jpeg';
import rajaram from '../assests/house_council_images/rajaram.png';
import siddarth from '../assests/house_council_images/siddharth.png';
import sivasurya from '../assests/house_council_images/sivasurya.jpg';
import santheri from '../assests/house_council_images/santheri.jpg';
import vasudev from '../assests/house_council_images/vasudev.jpg';
import ashusharma from '../assests/house_council_images/ashusharma.jpg';
import jaswanth from '../assests/house_council_images/jaswanth.jpg';
import abhishekdixit from '../assests/house_council_images/abhishekdixit.png';
import sowmyabrata from '../assests/house_council_images/soumyabrata.PNG';
import faisal from '../assests/house_council_images/faisalhasan.jpg';
import utkarsh from '../assests/house_council_images/utkarsh.jpg';
import abhishek from '../assests/house_council_images/abhishek.jpeg';
import aumsampat from '../assests/house_council_images/aumsampat.jpg';
import aaryesh from '../assests/house_council_images/aaryesh.jpg';
import akash from '../assests/house_council_images/akash.png';
import jayant from '../assests/house_council_images/jayant.jpeg';
import bibek from '../assests/house_council_images/bibek.jpg';
import anusha from '../assests/house_council_images/anusha.jpg';
import sumana from '../assests/house_council_images/sumana.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3.5),
        },
        justifyContent: 'center',
    },
    small: {
        width: theme.spacing(32.5),
        height: theme.spacing(32.5),
    },
    medium: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
}));

export default function GroupLeaders() {
    const classes = useStyles();
    return(
        <div>
            <div className={"row d-none d-lg-block"}>
                <div className={"col-lg-12"}>
                    <CardGroup>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={''} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Himadhith</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 24 <br /> [21f1001176]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={ayush} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Ayush Singh</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 26 <br /> [21f1003617]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={yoganath} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Yoganath P</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 40 <br /> [21f1005571]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={''} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Anubhav Singh</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 46 <br /> [21f1001610]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={suchitra} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Suchithra Sriram</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 63 <br /> [21f1003402]</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className={"row d-none d-lg-block"}>
                <div className={"col-lg-12"}>
                    <CardGroup>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={madhav} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Madhav V</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 66 <br /> [21f1004828]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={rajaram} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>RAJARAM R</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 77 <br /> [21f1004375]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={siddarth} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Siddharth Swamynathan</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 79 <br /> [21f1005957]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={sivasurya} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Sivasurya E.</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 91 <br /> [21f1006711]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={santheri} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Santheri Bhat</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 126 <br /> [21f1003372]</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className={"row d-none d-lg-block"}>
                <div className={"col-lg-12"}>
                    <CardGroup>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={vasudev} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>VASUDEVAKRISHNA A S</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 133 <br /> [21f1005995]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={ashusharma} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Ashu Sharma</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 135 <br /> [21f1005810]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={jaswanth} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Jaswanth Karnati</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 148 <br /> [21f1002559]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={abhishekdixit} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>ABHISHEK DIXIT</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 205 <br /> [21f1006992]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={sowmyabrata} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Soumyabrata Mahapatra</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 209 <br /> [21f1003070]</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className={"row d-none d-lg-block"}>
                <div className={"col-lg-12"}>
                    <CardGroup>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={''} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Megha Bagaria</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 217 <br /> [21f1001898]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={faisal} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Md. Faisal Hasan</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 232 <br /> [21f1001297]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={utkarsh} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Utkarsh Sahu</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 233 <br /> [21f1001107]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={abhishek} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>ABHISHEKVARUN M</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 237 <br /> [21f1004899]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={''} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Ali Mafaz</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 239 <br /> [21f1006775]</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className={"row d-none d-lg-block"}>
                <div className={"col-lg-12"}>
                    <CardGroup>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={aumsampat} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Aum Sampat</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 255 <br /> [21f1002248]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={aaryesh} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Aaryesh Kiran Pundlik</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 261 <br /> [21f1000346]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={akash} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>K AKASH</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 296 <br /> [21f1004520]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={jayant} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Jayant Kochhar</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 300 <br /> [21f1000314]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={bibek} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Bibek Paul</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 317 <br /> [21f1005156]</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className={"row d-none d-lg-block"}>
                <div className={"col-lg-12"}>
                    <CardGroup>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={anusha} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Anusha R</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 322 <br /> [21f1002684]</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card body outline className={'border-0 text-center'}>
                            <div className={classes.root}>
                                <Avatar src={sumana} className={classes.medium} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                    fontSize: 'large', fontWeight: 'bold'}}>Sumana M</CardTitle>
                                <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                    fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                                }}>Group Id: 326 <br /> [21f1005616]</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            <div className={"row d-block d-sm-block d-md-block d-lg-none"}>
                <div className={"col-lg-12"}>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={''} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Himadhith</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 24 <br /> [21f1001176]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={ayush} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Ayush Singh</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 26 <br /> [21f1003617]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={yoganath} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Yoganath P</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 40 <br /> [21f1005571]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={''} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Anubhav Singh</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 46 <br /> [21f1001610]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={suchitra} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Suchithra Sriram</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 63 <br /> [21f1003402]</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className={"row d-block d-sm-block d-md-block d-lg-none"}>
                <div className={"col-lg-12"}>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={madhav} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Madhav V</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 66 <br /> [21f1004828]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={rajaram} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>RAJARAM R</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 77 <br /> [21f1004375]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={siddarth} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Siddharth Swamynathan</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 79 <br /> [21f1005957]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={sivasurya} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Sivasurya E.</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 91 <br /> [21f1006711]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={santheri} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Santheri Bhat</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 126 <br /> [21f1003372]</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className={"row d-block d-sm-block d-md-block d-lg-none"}>
                <div className={"col-lg-12"}>

                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={vasudev} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>VASUDEVAKRISHNA A S</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 133 <br /> [21f1005995]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={ashusharma} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Ashu Sharma</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 135 <br /> [21f1005810]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={jaswanth} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Jaswanth Karnati</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 148 <br /> [21f1002559]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={abhishekdixit} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>ABHISHEK DIXIT</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 205 <br /> [21f1006992]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={sowmyabrata} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Soumyabrata Mahapatra</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 209 <br /> [21f1003070]</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className={"row d-block d-sm-block d-md-block d-lg-none"}>
                <div className={"col-lg-12"}>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={''} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Megha Bagaria</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 217 <br /> [21f1001898]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={faisal} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Md. Faisal Hasan</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 232 <br /> [21f1001297]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={utkarsh} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Utkarsh Sahu</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 233 <br /> [21f1001107]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={abhishek} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>ABHISHEKVARUN M</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 237 <br /> [21f1004899]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={''} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Ali Mafaz</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 239 <br /> [21f1006775]</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className={"row d-block d-sm-block d-md-block d-lg-none"}>
                <div className={"col-lg-12"}>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={aumsampat} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Aum Sampat</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 255 <br /> [21f1002248]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={aaryesh} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Aaryesh Kiran Pundlik</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 261 <br /> [21f1000346]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={akash} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>K AKASH</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 296 <br /> [21f1004520]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={jayant} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Jayant Kochhar</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 300 <br /> [21f1000314]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={bibek} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Bibek Paul</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 317 <br /> [21f1005156]</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className={"row d-block d-sm-block d-md-block d-lg-none"}>
                <div className={"col-12"}>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={anusha} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Anusha R</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 322 <br /> [21f1002684]</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card body outline className={'border-0 text-center'}>
                        <div className={classes.root}>
                            <Avatar src={sumana} className={classes.medium} />
                        </div>
                        <CardBody>
                            <CardTitle tag="h5" style={{fontFamily : 'Trebuchet MS', textTransform: 'uppercase',
                                fontSize: 'large', fontWeight: 'bold'}}>Sumana M</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{justifyContent: 'center',
                                fontFamily : 'Trebuchet MS', textTransform: 'uppercase', fontStyle: 'italic', fontSize: 'medium',
                            }}>Group Id: 326 <br /> [21f1005616]</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

    );
}