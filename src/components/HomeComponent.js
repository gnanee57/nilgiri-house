import React from "react";
import home from '../home.jpg';
import {Button, Jumbotron} from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReactPlayer from "react-player";
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
function FeaturedVideoContent(props) {
    const classes = useStyles();
    const content = props.content.map(content => {
        if (content.tabId === 1) {
            return (

                <GridListTile>
                    <ReactPlayer
                        url={content.link}
                        controls={true}
                        width="360px"
                        height="140px"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <span>by: {content.author}</span>
                        </Typography>
                    </CardContent>
                </GridListTile>
            );
        }
    });
        return (
            <div className="container">
                <div className="rows-col-md-5"/>
                <Grid
                    container
                >
                    <GridList className={classes.gridList} cols={2}>
                        {content}
                    </GridList>
                </Grid>

            </div>

        );
}
function FeaturedImageContent(props) {
    const classes = useStyles();
    const content = props.content.map(content => {
        if (content.tabId === 2 || content.tabId === 3) {
            return (

                    <GridListTile>
                        <img src={content.link} height="200px" width="150px" />
                        <GridListTileBar
                            subtitle={<span>by: {content.author} </span>}
                        />
                    </GridListTile>
            );
        }
    });

    return (
        <div className="container">
            <div className="rows-col-md-5"/>
            <Grid
                container
            >
                <GridList className={classes.gridList}  cols={4}>
                    {content}
                </GridList>
            </Grid>

        </div>


    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function FeaturedTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Music & Dance" {...a11yProps(0)} />
                <Tab label="Paintings & Photography" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <FeaturedVideoContent content={props.featuredContent.filter(content => content.tabId === 1)} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FeaturedImageContent content={props.featuredContent.filter(content =>  content.tabId === 2 || content.tabId === 3)} />
            </TabPanel>
        </div>
    );
}


function Home(props) {
    return(
        <div>
            <Jumbotron>
                <img src={home} width="1349" height="440" />
            </Jumbotron>
            <div>
                <h3>Our Talents</h3>
                <FeaturedTabs featuredContent={props.featuredContent}/>
                <div style={{ display: "flex" }}>
                    <Link to={'/wall'}>
                        <Button style={{ marginLeft: "1200px" }} color="link">
                            view more
                        </Button></Link>
                </div>
            </div>
        </div>



    );
}

export default Home;