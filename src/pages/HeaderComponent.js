import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import logo from "../assests/nilgiri_transparent.png";
import {Link} from "react-router-dom";
import {YouTube} from "@material-ui/icons";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{background: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",}} color={"transparent"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    ><Link to="/home">
                        <img src={logo} height="40" width="50"
                             alt="Nilgiri House" />
                    </Link>
                    </IconButton>
                    <Typography
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{
                            color : 'white',
                            fontFamily : 'Trebuchet MS',
                            fontSize: "x-large",
                            fontWeight: 'bold'
                        }}
                    >
                        Nilgiri House
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large"
                                    onClick={()=> window.open(
                                        "https://www.instagram.com/nilgirihouse_iitm",
                                        "_blank")}>
                           <InstagramIcon style={{fill: "white" }}/>
                        </IconButton>
                        <IconButton size="large"
                                    onClick={()=> window.open(
                                        "https://t.me/joinchat/0Bkmw5zCYhY1MThl",
                                        "_blank")}>
                            <TelegramIcon style={{fill: "white" }} />
                        </IconButton>
                        <IconButton size="large"
                                    onClick={()=> window.open(
                                        "#",
                                        "_blank")}>
                            <WhatsAppIcon style={{fill: "white" }}/>
                        </IconButton>
                        <IconButton size="large"
                                    onClick={()=> window.open(
                                        "https://www.youtube.com/channel/UCTAxNwe8HM_mfYtuGKqKGZQ",
                                        "_blank")}>
                            <YouTube style={{fill: "white" }}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
