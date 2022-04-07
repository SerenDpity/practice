import { Modal, Form, Col, Row } from "react-bootstrap";
import {
  Button,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Divider,
  Tooltip,
  IconButton
} from "@mui/material";

import {
  Edit as EditIcon,
  Add as AddIcon,
  Delete as DeleteIcon
} from "@mui/icons-material"

import * as React from 'react';

import {useEffect} from'react'
import Axios from 'axios'

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DesktopDatePicker, LocalizationProvider, YearPicker } from "@mui/lab";
import { useState } from "react";
import InsertEducationModal from "../components/InsertEducationModal";
import UpdateEducationModal from "../components/UpdateEducationModal";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function EducationTab(props) {

  const [User,setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [insertEducationModalShow, setInsertEducationModalShow] = useState(false);
  const [updateEducationModalShow,setUpdateEducationModalShow] = useState(false);
  const [currentRow,setCurrentRow] = useState();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [rows,setRows] = useState([])

  useEffect(() => {
    Axios.get(
      `https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/faculty/education/${User.EmployeeNumber}`
    ).then((res) => {
      setRows(res.data);
    });
  });

  function deleteEducation(){
    
    Axios.delete(`https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/faculty/education/delete/${currentRow.ID}/${User.EmployeeNumber}`).then((res)=>{ 

        if(res.data.error){

        }else{
          
        }
           
    }).catch((error)=>{
        //alert(error)
    });

  }

  return (
    <Row className="justify-content-center">
      <Col className="box-custom" lg={6} style={{ padding: "50px" }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{background:"none",border:"none",boxShadow:"none"}}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Educational Background
              </Typography>
              
              
          </AccordionSummary>
          <Row>
            <Col>
              
              <Row>
                <Col>
                  <Typography variant="h5" style={{fontWeight:800}}>Education</Typography>
                </Col>
                <Col className="text-end">
                  <Tooltip title="Add">
                    <IconButton
                      onClick={() => {
                        setInsertEducationModalShow(true);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </Col>
              </Row>

              <Row style={{ padding: "20px" }}>
                <Col>
                  <Typography variant="h6" style={{ fontWeight: 700 }}>
                    Elementary
                  </Typography>
                  <Row style={{ padding: "20px" }}>

                    {rows.map((val,i,rows) =>{ 
                        var count = 0;
                        for(var x = 0; x < rows.length;x++){
                          if(rows[x].EducationLevel == "Elementary"){
                            count++;
                          }
                        }

                        if(val.EducationLevel == "Elementary"){
                          
                          if(i != count){
                            return( 
                              <Col lg={12} className="mb-5">
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val);
                                      deleteEducation();
                                    }}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700}}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }else{
                            return( 
                              <Col lg={12}>
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }
                        }
                    })}

                  </Row>
                </Col>
              </Row>

              <Divider />

              <Row style={{ padding: "20px" }}>
                <Col>
                  <Typography variant="h6" style={{ fontWeight: 700 }}>
                    High School
                  </Typography>
                  <Row style={{ padding: "20px" }}>
                    
                  {rows.map((val,i,rows) =>{ 
                        var count = 0;
                        for(var x = 0; x < rows.length;x++){
                          if(rows[x].EducationLevel == "High School"){
                            count++;
                          }
                        }

                        if(val.EducationLevel == "High School"){
                          
                          if(i != count){
                            return( 
                              <Col lg={12} className="mb-5">
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }else{
                            return( 
                              <Col lg={12}>
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }
                        }
                    })}

                  </Row>
                </Col>
              </Row>

              <Divider />

              <Row style={{ padding: "20px" }}>
                <Col>
                  <Typography variant="h6" style={{ fontWeight: 700 }}>
                    Senior High School
                  </Typography>
                  <Row style={{ padding: "20px" }}>
                    
                  {rows.map((val,i,rows) =>{ 
                        var count = 0;
                        for(var x = 0; x < rows.length;x++){
                          if(rows[x].EducationLevel == "Senior High School"){
                            count++;
                          }
                        }

                        if(val.EducationLevel == "Senior High School"){
                          
                          if(i != count){
                            return( 
                              <Col lg={12} className="mb-5">
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }else{
                            return( 
                              <Col lg={12}>
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }
                        }
                    })}

                  </Row>
                </Col>
              </Row>

              <Divider />

              <Row style={{ padding: "20px" }}>
                <Col>
                  <Typography variant="h6" style={{ fontWeight: 700 }}>
                    College
                  </Typography>
                  <Row style={{ padding: "20px" }}>
                    
                  {rows.map((val,i,rows) =>{ 
                        var count = 0;
                        for(var x = 0; x < rows.length;x++){
                          if(rows[x].EducationLevel == "College"){
                            count++;
                          }
                        }

                        if(val.EducationLevel == "College"){
                          
                          if(i != count){
                            return( 
                              <Col lg={12} className="mb-5">
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }else{
                            return( 
                              <Col lg={12}>
                                <Tooltip title="Edit">
                                  <IconButton
                                    onClick={() => {
                                      setCurrentRow(val)
                                      setUpdateEducationModalShow(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                <Typography variant="h6" style={{ fontWeight: 700 }}>
                                  {val.SchoolName}
                                </Typography>
                                <Typography style={{ fontWeight: 500 }}>
                                  {val.Course}
                                </Typography>
                                <Typography>{val.YearStart} - {val.YearEnd}</Typography>
                              </Col>
                            ); 
                          }
                        }
                    })}

                  </Row>
                </Col>
              </Row>

              <InsertEducationModal
                show={insertEducationModalShow}
                onHide={() => setInsertEducationModalShow(false)}
              />

              <UpdateEducationModal
                show={updateEducationModalShow}
                onHide={() => setUpdateEducationModalShow(false)}
                row={currentRow}
              />

              
            </Col>
          </Row>
        </Accordion>
      </Col>
    </Row>
  );
}

export default EducationTab;
