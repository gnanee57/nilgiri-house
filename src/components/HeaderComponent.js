import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from "../assests/nilgiri_transparent.png";
import {Link} from "react-router-dom";
import {YouTube} from "@material-ui/icons";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";


export default function Header() {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={()=> window.open("https://www.instagram.com/nilgirihouse_iitm", "_blank")}>
                <IconButton size="large" aria-label="" color="inherit">
                    <InstagramIcon /><p>Intagram</p>
                </IconButton>

            </MenuItem>
            <MenuItem  onClick={()=> window.open("https://t.me/joinchat/0Bkmw5zCYhY1MThl", "_blank")}>
                <IconButton size="large" color="inherit">
                    <TelegramIcon /><p>WhatsApp</p>
                </IconButton>
                <p>Telegram</p>
            </MenuItem>
            <MenuItem onClick={()=> window.open("#", "_blank")}>
                <IconButton size="large" aria-label="" color="inherit">
                        <WhatsAppIcon /><p>WhatsApp</p>
                </IconButton>

            </MenuItem>
            <MenuItem onClick={()=> window.open("https://www.youtube.com/channel/UCTAxNwe8HM_mfYtuGKqKGZQ", "_blank")} >
                <IconButton size="large" aria-label="" color="inherit">
                    <YouTube /> <p>Youtube</p>
                </IconButton>

            </MenuItem>
        </Menu>
    );

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
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon style={{fill: "white" }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
