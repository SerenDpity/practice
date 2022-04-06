import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import {
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Avatar,
} from "@mui/material";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Profile() {
  var [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log(user)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Row
      style={{ height: "95vh", paddingRight: "20px" }}
      className="animate__animated animate__fadeIn"
    >
      <Col className="justify-content-center">
        <Row>
          <Col>
            <div
              style={{
                minHeight: "300px",
                background:
                  "url('https://thumbs.dreamstime.com/b/long-vector-banner-very-peri-color-abstract-organic-floral-background-copy-space-text-facebook-cover-minimal-trendy-238767296.jpg')",
                backgroundSize: "cover",
                backgroundPositionY: "-12vh",
                backgroundRepeat: "no-repeat",
                borderRadius: "20px",
              }}
            ></div>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: "-100px", marginLeft: "75px" }}>
            <Row>
              <Col>
                <Avatar
                  alt="Carmela Isabelle"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 200, height: 200 }}
                  style={{ border: "solid 10px #EAEBF3", float: "left" }}
                />
                <Row style={{ marginTop: "110px" }}>
                  <Col>
                    <Typography
                      variant="h5"
                      style={{ fontWeight: "800" }}
                    >{user.FirstName + " " + user.LastName}</Typography>
                    <Typography>Student Assistant</Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Personal Information" {...a11yProps(0)} />
                <Tab label="Educational Background" {...a11yProps(1)} />
                <Tab label="Work Experience" {...a11yProps(2)} />
                <Tab label="Certificate" {...a11yProps(3)} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Row>
                <Col>
                  <Typography>Personal Information</Typography>
                </Col>

                <Col></Col>
              </Row>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Row className="mb-3">
                <Col lg={3}>
                  <Typography variant="h6">Elementary</Typography>
                </Col>

                <Col lg={9}>
                  <Row className="mb-3">
                    <Col>
                      <Typography variant="h5">St. John the Baptist Catholic School</Typography>
                      <Typography>2005-2018</Typography>   
                    </Col>
                  </Row>  
                </Col>
              </Row>

              <Row>
                <Col lg={3}>
                  <Typography variant="h6">High School</Typography>
                </Col>

                <Col lg={9}>
                  <Row className="mb-3">
                    <Col>
                      <Typography variant="h5">St. John the Baptist Catholic School</Typography> 
                      <Typography>Humanities and Social Science</Typography>   
                      <Typography>2018-2020</Typography>   
                    </Col>
                  </Row>  
                </Col>
              </Row>





            </TabPanel>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Profile;
