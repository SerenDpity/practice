import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'react-bootstrap'
import {Typography,TextField,Button,Tabs,Tab,Box,RadioGroup,Radio,FormControlLabel} from '@mui/material'
import Axios from 'axios'

function RegisterTab(){

    var [FirstName,setFirstName] = useState('')
    var [MiddleInitial,setMiddleInitial] = useState('')
    var [LastName,setLastName] = useState('')
    
    return(
        <Container fluid style={{padding:"0",margin:"0"}}>
            <Row className="mb-3">
                <Col>
                    <Typography>Personal Credentials</Typography>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={5}>
                    <TextField type="text" variant="outlined" label="First Name" fullWidth/>
                </Col>
                <Col md={2}>
                    <TextField type="text" variant="outlined" label="M.I" fullWidth/>
                </Col>
                <Col md={5}>
                    <TextField type="text" variant="outlined" label="Last Name" fullWidth/>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <TextField type="date" variant="outlined" label="Date of Birth" defaultValue="2001-04-07" fullWidth/>
                </Col>
                <Col md={6}>
                    <TextField type="number" variant="outlined" label="Age" fullWidth disabled/>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <a>Sex</a>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </Col> 
            </Row>
                    
            <Row className="mb-3">
                <Col>
                    <Typography>Account Credentials</Typography>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <TextField type="email" variant="outlined" label="Email Address" fullWidth/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <TextField type="password" variant="outlined" label="Password" fullWidth/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <TextField type="password" variant="outlined" label="Confirm Password" fullWidth/>
                </Col>
            </Row>

                    
            <Row>
                <Col>
                    <Button variant="contained" className="btn-custom" style={{borderRadius:"50px",paddingTop:"10px", paddingBottom:"10px"}} fullWidth>Register</Button>
                </Col>
            </Row>            
        </Container>
    )

}

export default RegisterTab;