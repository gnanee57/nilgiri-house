import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import ReactPlayer from "react-player";
import {Grid} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {Loading} from "../LoadingPage";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import {VerticalTabPanel, HorizontalTabPanel, a11yProps} from "../../components/TabPanel";

const useStyles1 = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'hidden',
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
    textField: {
        width: 200,
    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        justifyContent: "center",
    },
    scroller: {
        flexGrow: "0"
    },
}));

function FeaturedVideoContent(props) {
    const classes1 = useStyles1();

    const content = props.content.map(content => {
        return (
            <GridListTile>
                <ReactPlayer
                    url={content.link}
                    config={{
                        file: {
                            attributes: {
                                preload: 'metadata'
                            }
                        }
                    }}
                    controls={true}
                    width="360px"
                    height="180px"
                />
            </GridListTile>
        );
    });
    return (
        <div className="container">
            <div className={"d-none d-lg-block"}>
                <div className="rows-col-md-8"/>
                <Grid container>
                    <GridList className={classes1.gridList} cols={2}>
                        {content}
                    </GridList>
                </Grid>
            </div>
            <div className={"d-block d-lg-none"}>
                <div className="rows-col-md-8"/>
                <Grid container>
                    <GridList className={classes1.gridList} cols={1}>
                        {content}
                    </GridList>
                </Grid>
            </div>
        </div>
    );
}

function FeaturedImageContent(props) {
    const classes1 = useStyles1();
    const content = props.content.map(content => {
        return (
            <GridListTile>
                <img src={content.link} height="200px" width="150px"/>
                <GridListTileBar
                    subtitle={<span>by: {content.author} </span>}
                />
            </GridListTile>
        );
    });
    return (
        <div className="container">
            <div className="rows-col-md-5"/>
            <Grid
                container
            >
                <GridList className={classes1.gridList}  cols={2.5}>
                    {content}
                </GridList>
            </Grid>
        </div>
    );
}

export function FeaturedHome(props) {
    const classes1 = useStyles1();
    const classes2 = useStyles2();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (props.isLoading || props.wallContent === []) {
        return (
            <Loading />
        );
    } else if (props.errMess) {
        return (
            <h4>{props.errMess}</h4>
        );
    } else {
        return (
            <React.Fragment>
                <div className={"d-none d-lg-block"}>
                    <div className={classes1.root}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            className={classes1.tabs}
                        >
                            <Tab label="Music & Dance" {...a11yProps(0)} />
                            <Tab label="Paintings & Photography" {...a11yProps(1)} />
                        </Tabs>
                        <VerticalTabPanel value={value} index={0}>
                            <FeaturedVideoContent
                                content={props.featuredContent.filter(content => content.tabId === 1)}/>
                        </VerticalTabPanel>
                        <VerticalTabPanel value={value} index={1}>
                            <FeaturedImageContent
                                content={props.featuredContent.filter(content => content.tabId === 2 || content.tabId === 3)}/>
                        </VerticalTabPanel>
                    </div>
                </div>
                <div className={"d-block d-lg-none"}>
                    <div className={classes2.root}>
                        <AppBar position="static" color="default"
                                style={{background: 'transparent', boxShadow: 'none'}}>
                            <Tabs
                                classes={{root: classes2.root, scroller: classes2.scroller}}
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant={"scrollable"}
                                scrollButtons={"on"}
                            >
                                <Tab label="Music & Dance" {...a11yProps(0)} />
                                <Tab label="Paintings & Photography" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <HorizontalTabPanel value={value} index={0}>
                            <FeaturedVideoContent
                                content={props.featuredContent.filter(content => content.tabId === 1)}/>
                        </HorizontalTabPanel>
                        <HorizontalTabPanel value={value} index={1}>
                            <FeaturedImageContent
                                content={props.featuredContent.filter(content => content.tabId === 2 || content.tabId === 3)}/>
                        </HorizontalTabPanel>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}