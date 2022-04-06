import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Container,Row,Col} from 'react-bootstrap'
import {Typography,TextField,Button,Tabs,Tab,Box,RadioGroup,Radio,FormControlLabel} from '@mui/material'
import Axios from 'axios'

function LoginTab(){

    var [emailAddress,setEmailAddress] = useState('')
    var [password,setPassword] = useState('')

    function signIn(){

        Axios.post('https://3001-serendpity-practice-lvoltgzo0hr.ws-us38.gitpod.io/faculty/login',{
            EmailAddress:emailAddress,
            Password:password
        }).then((res)=>{ 
            localStorage.setItem("user",JSON.stringify(res.data));
            window.location.reload();
        }) 
        
    }

    return(
        <Container fluid>
            <Row className="mb-3">
                <Col>
                    <TextField type="email" variant="outlined" label="Email Address" fullWidth onChange={(e)=>{
                        setEmailAddress(e.target.value)
                    }}/>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col>
                    <TextField type="password" variant="outlined" label="Password" fullWidth onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="contained" className="btn-custom" style={{borderRadius:"50px",paddingTop:"10px", paddingBottom:"10px"}} fullWidth onClick={signIn}>Login</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default LoginTab();