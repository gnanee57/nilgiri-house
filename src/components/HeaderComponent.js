import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, DropdownToggle,
    UncontrolledDropdown, DropdownMenu, DropdownItem} from 'reactstrap';
import { NavLink } from "react-router-dom";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InfoIcon from '@material-ui/icons/Info';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [isClubShown, setClubShown] = useState(false);
    const [isEventShown, setEventShown] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar dark expand="md">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand href="/">
                    <img src="./assests/nilgiri_transparent.png" height="40" width="50"
                         alt="Nilgiri House" />
                    Nilgiri House
                </NavbarBrand>
                <Collapse isOpen={isOpen} className="justify-content-end" navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span><HomeIcon /></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                onMouseEnter={() => setClubShown(true)}
                                onMouseLeave={() => setClubShown(false)}
                                nav inNavbar>
                                <DropdownToggle nav noCaret className="dropdown-toggle-split">
                                        <span><GroupWorkIcon /></span> Clubs
                                </DropdownToggle>
                                {isClubShown && !click && <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink  to={"/clubs/clubsList"}>List of Clubs </NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink  to={"/"}>New Club Registration  </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>}
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                as={NavLink} to="/events"
                                onMouseEnter={() => setEventShown(true)}
                                onMouseLeave={() => setEventShown(false)}
                                nav inNavbar>
                                <DropdownToggle nav noCaret>
                                    <span><EventIcon /></span> Events
                                </DropdownToggle>
                                {isEventShown && <DropdownMenu>
                                    <DropdownItem>
                                        <NavLink  to={"/"}>Event Registration</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink  to={"/events/pastEvents"}>Past Events</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>}
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/wall">
                                <span><PhotoLibraryIcon /></span> Wall
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/houseCouncil">
                                <span><AccountBalanceIcon /></span> House Council
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <span><InfoIcon /></span> About us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <a className="nav-link" as="a" href="https://onlinedegree.iitm.ac.in/" target="_blank">IITM HOME</a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;