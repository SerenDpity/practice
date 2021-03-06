import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'react-bootstrap'
import {Typography,TextField,Button,Tabs,Tab,Box,RadioGroup,Radio,FormControlLabel} from '@mui/material'
import Axios from 'axios'

import LoginTab from '../components/LoginTab';
import RegisterTab from '../components/RegisterTab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  
function Login() {

    const [darkMode,setDarkMode] = useState(localStorage.getItem('darkMode'))

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //var [user,setUser] = localStorage.getItem("user");

  return (
    
    <Row style={{height:"95vh", paddingLeft:"200px",paddingRight:"200px"}} className="align-items-center">
        <link rel="stylesheet" href={darkMode == 'true'?"css/theme-dark.css":"css/theme-light.css"}/>

        <Col className="justify-content-center div-custom" lg={5}>
            <Row>
                <Typography variant="h4">Faculty Management System</Typography>
                <Typography className="mb-4">Create or Login in your Faculty profile.</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Login" {...a11yProps(0)} />
                        <Tab label="Register" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <LoginTab/>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <RegisterTab/>
                </TabPanel>
            </Row>
        </Col>
        
        <Col lg={2}></Col>

        <Col className="justify-content-center text-center" lg={5}>
            <Row>
                <Col>
                    <img className="img-fluid" src="img/Logo.png" width="800px"></img>
                </Col>   
            </Row>
        </Col>

    </Row>


  );
}

export default Login;
