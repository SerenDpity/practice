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
  Tooltip,
  IconButton,
  Divider
} from "@mui/material";

import {
  Edit as EditIcon,
  Add as AddIcon
} from "@mui/icons-material"

import {makeStyles} from '@mui/styles'

import Axios from 'axios'

import InsertEducationModal from "../components/InsertEducationModal";
import EducationTab from "../components/EducationTab";
import CertTab from "../components/CertTab";

function Profile() {

  const [insertEducationModalShow, setInsertEducationModalShow] = useState(false);

  var [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  console.log(user)
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function uploadProfileImage(){
    var btnUploadImage = document.getElementById('btnUploadImage');
    btnUploadImage.click()
  }

  function updateProfileImage(e){
    var file = e.target.files[0]

    var f = new FormData();

    f.append("profile",file);

    Axios.post(`https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/faculty/updateprofileimage/${user.EmployeeNumber}`,f).then((res)=>{ 
      var tempUser = JSON.parse(localStorage.getItem('user'))
      tempUser.ProfileImageURL = res.data
      console.log(tempUser)
      localStorage.setItem('user',JSON.stringify(tempUser))
      setUser(JSON.parse(localStorage.getItem('user')))
    });

  }

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
                  alt={user.FirstName}
                  src={user.ProfileImageURL}
                  sx={{ width: 200, height: 200 }}
                  style={{ border: "solid 10px #EAEBF3", float: "left" }}
                  id="imgProfile"
                />
                <input type="file" id="btnUploadImage" hidden onChange={(e)=>{updateProfileImage(e)}}/>

                <Row style={{ marginTop: "110px" }}>
                  <Col>
                    <Typography
                      variant="h5"
                      style={{ fontWeight: "800" }}
                    >
                      {user.FirstName + " " + user.LastName}
                      <Tooltip title="Edit">
                        <IconButton onClick={()=>{uploadProfileImage()}}>
                          <EditIcon/>
                        </IconButton>
                      </Tooltip>
                    
                    </Typography> 
                    <Typography>{user.EmailAddress}</Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <EducationTab></EducationTab>
        <CertTab></CertTab>
      </Col>
    </Row>
  );
}

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center"
  },
  scroller: {
    flexGrow: "0"
  }
});

export default Profile;
