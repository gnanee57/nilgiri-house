import React, {useState} from 'react';
import "antd/dist/antd.css";
import {Menu} from 'antd';
import {Link, withRouter} from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import InfoIcon from "@material-ui/icons/Info";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EventIcon from "@material-ui/icons/Event";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import HomeIcon from "@material-ui/icons/Home";

const { SubMenu } = Menu;

function Navbar() {

    const [current,setCurrent] = useState('/home');

    const centerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    }

    const handleClick: React.FC = (e) => {
        setCurrent(window.location.pathname);
    }

    return(
            <Menu onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                style={centerStyle}>
                <Menu.Item key="/home" icon={<HomeIcon fontSize="small" />}>Home
                    <Link to={"/home"}></Link>
                </Menu.Item>
                <SubMenu key="/clubs" icon={<GroupWorkIcon fontSize="small" />} title="Clubs">
                    <Menu.ItemGroup>
                        <Menu.Item key="/clubs">Clubs :: Rules
                            <Link to={"/clubs"}></Link>
                        </Menu.Item>
                        <Menu.Item key="/clubs/clubsList">List of Clubs
                            <Link to={"/clubs/clubsList"}></Link>
                        </Menu.Item>
                        <Menu.Item key="clubRegister">New Club Registration
                            <Link to={"#"}></Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="/events/eventsCalendar" icon={<EventIcon fontSize="small" />} title="Events">
                    <Menu.ItemGroup>
                        <Menu.Item key="/events/eventsCalendar">Events :: Calendar
                            <Link to={"/events/eventsCalendar"}></Link>
                        </Menu.Item>
                        <Menu.Item key="/events/eventRegistration">Event Registration
                            <Link to={"/events/eventRegistration"}></Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="/wall" icon={<PhotoLibraryIcon fontSize="small" />}>Wall
                    <Link to={"/wall"}></Link>
                </Menu.Item>
                <Menu.Item key="/houseCouncil" icon={<AccountBalanceIcon fontSize="small" />}>House Council
                    <Link to={"/houseCouncil"}></Link>
                </Menu.Item>
                <Menu.Item key="/about" icon={<InfoIcon fontSize="small" />}>About us
                    <Link to={"/about"}></Link>
                </Menu.Item>
                <Menu.Item key="iitmHome">
                    <a href="https://onlinedegree.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                        IITM HOME
                    </a>
                </Menu.Item>
            </Menu>

    );
}

export default withRouter(Navbar);
