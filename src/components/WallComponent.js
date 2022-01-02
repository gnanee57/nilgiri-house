import React from 'react';
import PropTypes from 'prop-types';
import "../../node_modules/video-react/dist/video-react.css"; // import css
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
    Card,
    CardFooter,
    CardImg,
    CardSubtitle,
} from "reactstrap";
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';
import {Description, BrushSharp, DevicesOther, MusicNote, PhotoCamera} from "@material-ui/icons";
import {Loading} from "./LoadingComponent";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

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
                        <Player src={content.link}
                                fluid ={false}
                                height = {300}
                                width = {"auto"}
                        >
                            <ControlBar>
                                <VolumeMenuButton vertical />
                                <ReplayControl seconds={10} order={1.1} />
                                <ForwardControl seconds={30} order={1.2} />
                                <CurrentTimeDisplay order={4.1} />
                                <TimeDivider order={4.2} />
                                <PlaybackRateMenuButton rates={[1.75, 1.5, 1.25, 1, 0.8, 0.5]} order={7.1} />
                            </ControlBar>
                        </Player>
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
                <TabPanel value={active} index={0}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 0)}

                    />
                </TabPanel>
                <TabPanel value={active} index={1}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 1)}

                    />
                </TabPanel>
                <TabPanel value={active} index={2}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 2)}
                    />
                </TabPanel>
                <TabPanel value={active} index={3}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 3)}
                    />
                </TabPanel>
                <TabPanel value={active} index={4}>
                    <RenderContent
                        wallContent={props.wallContent.filter(content => content.tabId === 4)}
                    />
                </TabPanel>
            </div>
        );
    }
}

export default Wall;