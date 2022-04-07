import { Modal, Form, Col, Row } from "react-bootstrap";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DesktopDatePicker, LocalizationProvider, YearPicker } from "@mui/lab";
import { useState } from "react";

import Axios from "axios"

function InsertEducationModal(props) {
  
  var years = [];
  var now = new Date().getFullYear();
  for(var i = now+10; i > 1950;i--){
    years.push(i.toString());
  }

  const [User,setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const [SchoolName,setSchoolName] = useState()
  const [EducationLevel,setEducationLevel] = useState()
  const [Course,setCourse] = useState()
  const [YearStart,setYearStart] = useState()
  const [YearEnd,setYearEnd] = useState()
  
  const [SchoolNameError,setSchoolNameError] = useState()
  const [EducationLevelError,setEducationLevelError] = useState()
  const [CourseError,setCourseError] = useState()
  const [YearStartError,setYearStartError] = useState()
  const [YearEndError,setYearEndError] = useState()

  function addEducation(){

    var hasError = false;
    setSchoolNameError()
    setEducationLevelError()
    setCourseError()
    setYearStartError()
    setYearEndError()

    if(SchoolName == undefined || SchoolName.trim().length == 0){
      hasError = true;
      setSchoolNameError("Blank Spaces.")
    }
    if(EducationLevel == undefined || EducationLevel.trim().length == 0) {
      hasError = true;
      setEducationLevelError("Blank Spaces.")
    }
    if(Course == undefined || Course.trim().length == 0){
      hasError = true;
      setCourseError("Blank Spaces.")
    }
    if(YearStart == undefined || YearStart.trim().length == 0){
      hasError = true;
      setYearStartError("Blank Spaces.")
    }
    if(YearEnd == undefined || YearEnd.trim().length == 0){
      hasError = true;
      setYearEndError("Blank Spaces.")
    }
    
    console.log(props)

    if(!hasError){

      Axios.post('https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/faculty/education/add',{
            EmployeeNumber:User.EmployeeNumber,
            SchoolName:SchoolName,
            EducationLevel:EducationLevel,
            Course:Course,
            YearStart:YearStart,
            YearEnd:YearEnd
        }).then((res)=>{ 

            if(res.data.error){

            }else{
              props.onHide()
            }
           
        }).catch((error)=>{
            alert(error)
        });

    }

  }


  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "20px 50px 20px 50px" }}>
        <Form>
          <Row>
            <Col>
              <Row className="mb-3">
                <Col fullWidth>
                  <TextField
                    variant="outlined"
                    label="School Name"
                    fullWidth
                    onChange={(e)=>{
                      setSchoolName(e.target.value);
                    }}
                    value={SchoolName}
                    error={SchoolNameError}
                    helperText={SchoolNameError}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Education Level
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Education Level"
                      onChange={(e)=>{
                        setEducationLevel(e.target.value);
                      }}
                      value={EducationLevel}
                      error={EducationLevelError}
                      helperText={EducationLevelError}
                    >
                      <MenuItem value="Elementary">Elementary</MenuItem>
                      <MenuItem value="High School">High School</MenuItem>
                      <MenuItem value="Senior High School">Senior High School</MenuItem>
                      <MenuItem value="College">College</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col fullWidth>
                  <TextField
                    variant="outlined"
                    label="Course/Degree"
                    fullWidth
                    onChange={(e)=>{
                      setCourse(e.target.value);
                    }}
                    value={Course}
                    error={CourseError}
                    helperText={CourseError}
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Year Started
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Year Started"
                      onChange={(e)=>{
                        setYearStart(e.target.value);
                      }}
                      value={YearStart}
                      error={YearStartError}
                      helperText={YearStartError}
                    >
                      {years.map((val)=>{
                        return(
                          <MenuItem value={val}>{val}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>

                <Col>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Year Ended/Expected
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Year End/Expected"
                      onChange={(e)=>{
                        setYearEnd(e.target.value);
                      }}
                      value={YearEnd}
                      error={YearEndError}
                      helperText={YearEndError}
                    >
                      {years.map((val)=>{
                        return(
                          <MenuItem value={val}>{val}</MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" className="btn-custom" onClick={addEducation}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InsertEducationModal;
