
import {Navbar,Container,Nav,Row} from 'react-bootstrap'
import { CDBSidebarMenuItem, CDBSidebarMenu } from 'cdbreact';
import {Switch} from '@mui/material'

import {NavLink} from 'react-router-dom'

const TopNavigation = (props) =>{

    return(
        <Navbar id="topbar" expand="lg" className="d-block d-md-none animate__animated animate__fadeInDown">
            <Container fluid>
                <Navbar.Brand href="#">
                    <h6 style={{marginBottom:0}}><img id="sidebar-logo" src="img/sdptlogo.png" width={40}/>&nbsp;&nbsp;SOLUTIONS</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <CDBSidebarMenu>
                            <NavLink to="/">
                                <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/dataset">
                                <CDBSidebarMenuItem icon="table">Dataset</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/services">
                                <CDBSidebarMenuItem icon="book">Services</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to="/profile">
                                <CDBSidebarMenuItem icon="users">About Us</CDBSidebarMenuItem>
                            </NavLink>
                            <div>
                                <CDBSidebarMenuItem icon={props.darkMode == 'true'?"moon":"sun"}>{props.darkMode == 'true'?<Switch onChange={props.toggleStyle}/>:<Switch onChange={props.toggleStyle} defaultChecked/>}</CDBSidebarMenuItem>
                            </div>
                        </CDBSidebarMenu>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavigation;