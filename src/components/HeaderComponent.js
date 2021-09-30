import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, DropdownToggle,
    UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from "../assests/nilgiri_transparent.png";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InfoIcon from '@material-ui/icons/Info';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {NavLink, useHistory} from "react-router-dom";
import useWindowSize from "./useWindowSize";

function Header() {

    const size = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let [isClubShown, setClubShown] = useState(false);
    const [isEventShown, setEventShown] = useState(false);


    return (
        <div>
            <Navbar dark expand="md">
                <NavbarBrand href="/">
                    <img src={logo} height="40" width="50"
                         alt="Nilgiri House" />
                    Nilgiri House
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} className="justify-content-end" navbar>
                    <Nav navbar>
                        <NavItem onClick={() => { if(size.width < 768) toggle()}}>
                            <NavLink className="nav-link" to="/home">
                                <span><HomeIcon fontSize="small" /></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => { if(size.width < 768) toggle()}} onMouseEnter={() => setClubShown(true)}
                                 onMouseLeave={() => setClubShown(false)}
                        >
                            <NavLink className="nav-link" to="/clubs">
                                <span><GroupWorkIcon fontSize="small" /></span> Clubs
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            onMouseEnter={() => setClubShown(true)}
                            onMouseLeave={() => setClubShown(false)}
                            nav inNavbar>
                            <DropdownToggle nav noCaret>
                                    <span><KeyboardArrowDownIcon /></span>
                            </DropdownToggle>
                            {isClubShown && <DropdownMenu>
                                <NavLink onClick={() => { if(size.width < 768) toggle()}} className="dropdown-item justify-content-center"  to={"/clubs/clubsList"}>
                                    List of Clubs </NavLink>
                                <DropdownItem divider />
                                <a onClick={() => { if(size.width < 768) toggle()}} className="dropdown-item"  href="#">New Club Registration</a>
                            </DropdownMenu>}
                        </UncontrolledDropdown>
                        <NavItem onClick={toggle}onClick={() => { if(size.width < 768) toggle()}} onMouseEnter={() => setEventShown(true)}
                                 onMouseLeave={() => setEventShown(false)}
                        >
                            <NavLink className="nav-link" to="/events/eventsCalendar">
                                <span><EventIcon fontSize="small" /></span> Events
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown
                            onMouseEnter={() => setEventShown(true)}
                            onMouseLeave={() => setEventShown(false)}
                            nav inNavbar>
                            <DropdownToggle nav noCaret>
                                <span><KeyboardArrowDownIcon /></span>
                            </DropdownToggle>
                            {isEventShown && <DropdownMenu>
                                <NavLink onClick={() => { if(size.width < 768) toggle()}} className="dropdown-item"  to={"/events/eventRegistration"}>Event Registration</NavLink>
                            </DropdownMenu>}
                        </UncontrolledDropdown>
                        <NavItem onClick={() => { if(size.width < 768) toggle()}}>
                            <NavLink className="nav-link" to="/wall">
                                <span><PhotoLibraryIcon fontSize="small" /></span> Wall
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => { if(size.width < 768) toggle()}}>
                            <NavLink className="nav-link" to="/houseCouncil">
                                <span><AccountBalanceIcon fontSize="small" /></span> House Council
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => { if(size.width < 768) toggle()}}>
                            <NavLink className="nav-link" to="/about">
                                <span><InfoIcon fontSize="small" /></span> About us
                            </NavLink>
                        </NavItem>
                        <NavItem onClick={() => { if(size.width < 768) toggle()}}>
                            <a className="nav-link" as="a" href="https://onlinedegree.iitm.ac.in/" target="_blank">IITM HOME</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;