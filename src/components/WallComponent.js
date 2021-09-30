import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ReactPlayer from 'react-player';
import {Description, BrushSharp, DevicesOther, MusicNote, PhotoCamera} from "@material-ui/icons";
import wall from "../assests/jumbotron/nilgiri_gallery.jpg";
import {Jumbotron} from "reactstrap";
import useWindowSize from "./useWindowSize";


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
    gridList: {
        width: "500 px",
        height: "450 px",
    },
}));

function RenderContent(props) {
    const classes = useStyles();

    const content = props.galleryContent.map(content => {

        if (content.contentType === "video") {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <Card raised ={true}>
                        <CardActionArea>
                            <ReactPlayer
                                url={content.link}
                                controls={true}
                                width="420px"
                                height="315px"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span>by: {content.author}</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            );
        }
        if (content.contentType === "image") {
            return (
                <Grid item xs={12} sm={6} md={4}>
                    <Card raised ={true}>
                        <CardActionArea>
                            <GridListTile cols={3} key={content.link}>
                                <img src={content.link} height="500px" width="440px"/>
                                <GridListTileBar
                                    subtitle={<span>by: {content.author} </span>}
                                />
                            </GridListTile>
                        </CardActionArea>
                    </Card>
                </Grid>

            );
        }

    });

    return (
        <Grid
            container
            spacing={4}
            justify="center"
        >
            {content}
        </Grid>
    );
}


function Wall(props) {
    const classes = useStyles();
    const size = useWindowSize();
    const [active, setActive] = React.useState(0);

    const handleChange = (event, newValue) => {
        setActive(newValue);
    };
    return (
        <div className={classes.root}>
            <Jumbotron className={'col-md-12 d-none d-sm-block'}>
                <img src={wall} width={size.width - 17} height="500" />
            </Jumbotron>
            <AppBar position="static" color="default">
                <Tabs
                    classes={{ root: classes.root, scroller: classes.scroller }}
                    value={active}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={"scrollable"}
                    scrollButtons={"on"}
                >
                    <Tab icon={<Description />} label="ARTICLES" {...a11yProps(0)} />
                    <Tab icon={<MusicNote/>}label="MUSIC & DANCE" {...a11yProps(1)} />
                    <Tab icon={<BrushSharp/>} label="PAINTINGS" {...a11yProps(2)} />
                    <Tab icon={<PhotoCamera/>} label="PHOTOGRAPHY" {...a11yProps(3)} />
                    <Tab icon={<DevicesOther/>} label="OTHERS" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={active} index={0}>
                <RenderContent
                    galleryContent={props.galleryContent.filter(content => content.tabId === 0)}
                />
            </TabPanel>
            <TabPanel value={active} index={1}>
                <RenderContent
                    galleryContent={props.galleryContent.filter(content => content.tabId === 1)}
                />
            </TabPanel>
            <TabPanel value={active} index={2}>
                <RenderContent
                    galleryContent={props.galleryContent.filter(content => content.tabId === 2)}
                />
            </TabPanel>
            <TabPanel value={active} index={3}>
                <RenderContent
                    galleryContent={props.galleryContent.filter(content => content.tabId === 3)}
                />
            </TabPanel>
            <TabPanel value={active} index={4}>
                <RenderContent
                    galleryContent={props.galleryContent.filter(content => content.tabId === 4)}
                />
            </TabPanel>
        </div>
    );
};

export default Wall;