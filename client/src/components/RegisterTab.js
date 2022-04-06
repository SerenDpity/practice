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
    var [Birthdate,setBirthdate] = useState('')
    var [Age,setAge] = useState('')
    var [Sex,setSex] = useState('')

    var [EmailAddress,setEmailAddress] = useState('')
    var [Password,setPassword] = useState('')
    var [ConfirmPassword,setConfirmPassword] = useState('')

    var [FirstNameError,setFirstNameError] = useState('')
    var [MiddleInitialError,setMiddleInitialError] = useState('')
    var [LastNameError,setLastNameError] = useState('')
    var [BirthdateError,setBirthdateError] = useState('')
    var [AgeError,setAgeError] = useState('')

    var [EmailAddressError,setEmailAddressError] = useState('')
    var [PasswordError,setPasswordError] = useState('')
    var [ConfirmPasswordError,setConfirmPasswordError] = useState('')

    function signUp(){
        var data = {
            FirstName:FirstName,
            MiddleInitial:MiddleInitial,
            LastName:LastName,
            Birthdate:Birthdate,
            Age:Age,
            Sex:Sex,
            EmailAddress:EmailAddress,
            Password:Password
        }

        setFirstNameError('')
        setMiddleInitialError('')
        setLastNameError('')
        setBirthdateError('')
        setAgeError('')
        setEmailAddressError('')
        setPasswordError('')
        setConfirmPasswordError('')

        if(ConfirmPassword != Password){
            setPasswordError("Password doesn't Match")
            setConfirmPasswordError("Password doesn't Match")
        }

        if(FirstName.trim().length == 0) setFirstNameError("Blank Space")
        if(MiddleInitial.trim().length == 0) setMiddleInitialError("Blank Space")
        if(LastName.trim().length == 0) setLastNameError("Blank Space")
        if(Birthdate.trim().length == 0) setBirthdateError("Blank Space")
        if(Age.toString().trim().length == 0) setAgeError("Blank Space")
        if(EmailAddress.trim().length == 0) setEmailAddressError("Blank Space")
        if(Password.trim().length == 0) setPasswordError("Blank Space")
        if(ConfirmPassword.trim().length == 0) setConfirmPasswordError("Blank Space")

        if(
            FirstNameError.length == 0 &&
            MiddleInitialError.length == 0 &&
            LastNameError.length == 0 &&
            BirthdateError.length == 0 &&
            AgeError.length == 0 &&
            EmailAddressError.length == 0 &&
            PasswordError.length == 0 &&
            ConfirmPasswordError.length == 0){
                alert("posting")
            
            Axios.post('https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/faculty/register',data).then((res)=>{ 
                if(res.data.error){
                    
                }else{
                    localStorage.setItem("user",JSON.stringify(data));
                    window.location.reload();
                }
            }).catch((error)=>{
                alert(error)
            });

        }

        console.log(data)
    }

    return(
        <Container fluid style={{padding:"0",margin:"0"}}>
            <Row className="mb-3">
                <Col>
                    <Typography>Personal Credentials</Typography>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={5}>
                    <TextField type="text" variant="outlined" label="First Name" fullWidth onChange={(e)=>{setFirstName(e.target.value)}} error={FirstNameError} helperText={FirstNameError}/>
                </Col>
                <Col md={2}>
                    <TextField type="text" variant="outlined" label="M.I" fullWidth onChange={(e)=>{setMiddleInitial(e.target.value)}} error={MiddleInitialError} helperText={MiddleInitialError}/>
                </Col>
                <Col md={5}>
                    <TextField type="text" variant="outlined" label="Last Name" fullWidth onChange={(e)=>{setLastName(e.target.value)}} error={LastNameError} helperText={LastNameError}/>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <TextField type="date" variant="outlined" label="Date of Birth" defaultValue="2001-04-07" fullWidth onChange={
                        (e)=>{
                            setBirthdate(e.target.value)
                            var today = new Date();
                            var birthDate = new Date(e.target.value);
                            var age = today.getFullYear() - birthDate.getFullYear();
                            var m = today.getMonth() - birthDate.getMonth();
                            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
                            setAge(age)
                        }
                    } error={BirthdateError} helperText={BirthdateError}/>
                </Col>
                <Col md={6}>
                    <TextField type="number" variant="outlined" label="Age" fullWidth value={Age} disabled onChange={(e)=>{setAge(e.target.value)}} error={AgeError} helperText={AgeError}/>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <a>Sex</a>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={(e)=>{setSex(e.target.value)}}
                        defaultValue="F">
                        <FormControlLabel value="F" control={<Radio />} label="Female" />
                        <FormControlLabel value="M" control={<Radio />} label="Male" />
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
                    <TextField type="email" variant="outlined" label="Email Address" fullWidth onChange={(e)=>{setEmailAddress(e.target.value)}} error={EmailAddressError} helperText={EmailAddressError}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <TextField type="password" variant="outlined" label="Password" fullWidth onChange={(e)=>{setPassword(e.target.value)}} error={PasswordError} helperText={PasswordError}/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <TextField type="password" variant="outlined" label="Confirm Password" fullWidth onChange={(e)=>{setConfirmPassword(e.target.value)}} error={ConfirmPasswordError} helperText={ConfirmPasswordError}/>
                </Col>
            </Row>

                    
            <Row>
                <Col>
                    <Button variant="contained" className="btn-custom" style={{borderRadius:"50px",paddingTop:"10px", paddingBottom:"10px"}} fullWidth onClick={signUp}>Register</Button>
                </Col>
            </Row>            
        </Container>
    )

}

export default RegisterTab;