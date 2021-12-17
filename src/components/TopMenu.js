import React, {Component, useState} from 'react';
import "antd/dist/antd.css";
import {Menu} from 'antd';
import {Link, withRouter} from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import InfoIcon from "@material-ui/icons/Info";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EventIcon from "@material-ui/icons/Event";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import HomeIcon from "@material-ui/icons/Home";
import PropTypes from 'prop-types';

const { SubMenu } = Menu;

class TopMenu extends Component {

    static propTypes = {
        location: PropTypes.object.isRequired
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    centerStyle = {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    }


    render() {

        const { location } = this.props;

        return (
            <Menu onClick={this.handleClick}
                  defaultSelectedKeys={['/home']}
                  selectedKeys={[location.pathname]}
                  mode="horizontal"
                  style={this.centerStyle}>
                <Menu.Item key="/home" icon={<HomeIcon fontSize="small"/>}>Home
                    <Link to={"/home"}/>
                </Menu.Item>
                <SubMenu key="/clubs" icon={<GroupWorkIcon fontSize="small"/>} title="Clubs">
                    <Menu.ItemGroup>
                        <Menu.Item key="/clubs">Clubs :: Rules
                            <Link to={"/clubs"}/>
                        </Menu.Item>
                        <Menu.Item key="/clubs/clubsList">List of Clubs
                            <Link to={"/clubs/clubsList"}/>
                        </Menu.Item>
                        <Menu.Item key="clubRegister">New Club Registration
                            <Link to={"#"}/>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="/events/eventsCalendar" icon={<EventIcon fontSize="small"/>} title="Events">
                    <Menu.ItemGroup>
                        <Menu.Item key="/events">Past Events
                            <Link to={"/events"}/>
                        </Menu.Item>
                        <Menu.Item key="/events/eventsCalendar">Events :: Calendar
                            <Link to={"/events/eventsCalendar"}/>
                        </Menu.Item>
                        <Menu.Item key="/events/eventRegistration">Event Registration
                            <Link to={"/events/eventRegistration"}/>
                        </Menu.Item>
                        <Menu.Item key="/events/certificates">Verify Certicates
                            <Link to={"/events/certificates"}/>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="/wall" icon={<PhotoLibraryIcon fontSize="small"/>}>Wall
                    <Link to={"/wall"}/>
                </Menu.Item>
                <Menu.Item key="/houseCouncil" icon={<AccountBalanceIcon fontSize="small"/>}>House Council
                    <Link to={"/houseCouncil"}/>
                </Menu.Item>
                <Menu.Item key="/about" icon={<InfoIcon fontSize="small"/>}>About us
                    <Link to={"/about"}/>
                </Menu.Item>
                <Menu.Item key="iitmHome">
                    <a href="https://onlinedegree.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                        IITM HOME
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(TopMenu);
