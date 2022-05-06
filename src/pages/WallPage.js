import React from 'react';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
    Card,
    CardFooter,
    CardImg,
    CardSubtitle,
} from "reactstrap";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {Description, BrushSharp, DevicesOther, MusicNote, PhotoCamera} from "@material-ui/icons";
import {Loading} from "./LoadingPage";
import {a11yProps, HorizontalTabPanel} from "../components/TabPanel";
import {VideoPlayerNotFluid} from "../components/VideoPlayer";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
    },
    scroller: {
        flexGrow: "0"
    },
}));

function RenderContent(props) {

    const content = props.wallContent.map(content => {

        if (content.contentType === "video") {
            return (
                <div className={'col-xl-4 col-lg-6 col-md-6 col-12 mb-4'}>
                    <Card className={'border-0'}>
                        <VideoPlayerNotFluid link={content.link} />
                        <CardFooter>
                            <CardSubtitle className="mb-2 text-muted" style={{
                                justifyContent: 'center',
                                fontFamily : 'Trebuchet MS',
                                fontStyle: 'italic',
                                fontSize: 'small',
                            }}>by: {content.author}</CardSubtitle>
                        </CardFooter>
                    </Card>
                </div>
            );
        }
        if (content.contentType === "image") {
            return (
                <div className={'col-lg-4 col-md-6 col-12 mb-4'}>
                    <Card className={'border-0'}>
                        <CardImg height={"400px"} src={content.link} alt={"image by " + content.author} />
                        <GridListTileBar
                            subtitle={<span>by: {content.author} </span>}
                        />
                    </Card>
                </div>
            );
        }
    });

    return (
        <div className='container-fluid mt-2 overflow-hidden'>
            <div className={'row '}>
                <div className={'col-md-12'}>
                    <div className={'row'}>
                    {content}
                    </div>
                </div>
            </div>
        </div>
    );
}


function Wall(props) {

    React.useEffect(() => {
        document.title = 'Nilgiri Wall';
    }, []);

    const classes = useStyles();
    const [active, setActive] = React.useState(0);

    const handleChange = (event, newValue) => {
        setActive(newValue);
    };
    if (props.wallContentLoading || props.wallContent === []) {
        return (
            <Loading />
        );
    } else if (props.wallContentErrMess) {
        return (
            <h4>{props.wallContentErrMess}</h4>
        );
    } else {
        return (
            <div className={classes.root}>
                <div className="jumbotron jumbotron-fluid" style={{
                    backgroundImage : 'url("https://drive.google.com/uc?export=download&id=18-Trf02QkPJyGRoUh-G-g4lgzBaU1HyC")',
                    backgroundSize : 'cover',
                    opacity: '0.8'
                }} />
                <AppBar position="static" color="default">
                    <Tabs
                        classes={{root: classes.root, scroller: classes.scroller}}
                        value={active}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant={"scrollable"}
                        scrollButtons={"on"}
                    >
                        <Tab icon={<Description/>} label="ARTICLES" {...a11yProps(0)} />
                        <Tab icon={<MusicNote/>} label="MUSIC & DANCE" {...a11yProps(1)} />
                        <Tab icon={<BrushSharp/>} label="PAINTINGS" {...a11yProps(2)} />
                        <Tab icon={<PhotoCamera/>} label="PHOTOGRAPHY" {...a11yProps(3)} />
                        <Tab icon={<DevicesOther/>} label="OTHERS" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <HorizontalTabPanel value={active} index={0}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 0)}

                    />
                </HorizontalTabPanel>
                <HorizontalTabPanel value={active} index={1}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 1)}

                    />
                </HorizontalTabPanel>
                <HorizontalTabPanel value={active} index={2}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 2)}
                    />
                </HorizontalTabPanel>
                <HorizontalTabPanel value={active} index={3}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 3)}
                    />
                </HorizontalTabPanel>
                <HorizontalTabPanel value={active} index={4}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 4)}
                    />
                </HorizontalTabPanel>
            </div>
        );
    }
}

export default Wall;