import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';

import {Row,Col} from 'react-bootstrap'

import {Switch,Button} from '@mui/material'

import { NavLink } from 'react-router-dom';

import { useState, useRef, useEffect } from 'react';

import TopNavigation from '../components/TopNavigation'

const SideNavigation = () => {

  const [darkMode,setDarkMode] = useState(localStorage.getItem('darkMode'))

  function toggleStyle(){
    if(darkMode == 'true') setDarkMode('false')
    else setDarkMode('true')
    localStorage.setItem('darkMode', darkMode=='true'?'false':'true');
  }

  return (
    <div>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',padding:"15px 15px",position:"fixed",zIndex:1}} className="animate__animated animate__fadeIn d-none d-md-block">
        <link rel="stylesheet" href={darkMode == 'true'?"css/theme-dark.css":"css/theme-light.css"}/>
        <CDBSidebar breakpoint="0" id="sidebar" textColor="#fff" backgroundColor="#fff">
          <CDBSidebarHeader style={{fontFamily:"Montserrat"}}>
              <Row className="text-center mb-1">
                <Col>
                  <img id="sidebar-logo" src="img/sdptlogo.png" width={48}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6 style={{marginBottom:0}}>&nbsp;SOLUTIONS</h6>
                </Col>
              </Row>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
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
              <Button onClick={()=>{localStorage.clear();window.location.reload()}}>
                <CDBSidebarMenuItem icon="users">Logout</CDBSidebarMenuItem>
              </Button>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <CDBSidebarFooter style={{ textAlign: 'center',paddingBottom:'25px'}}>
              {darkMode == 'true'?<Switch onChange={toggleStyle}/>:<Switch onChange={toggleStyle} defaultChecked/>}
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
      <TopNavigation darkMode={darkMode} setDarkMode = {setDarkMode} toggleStyle = {toggleStyle} />
    </div>
  );
};

export default SideNavigation;