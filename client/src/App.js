import {Container,Row,Col} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import DataTable from './components/DataTable'
import SideNavigation from './components/SideNavigation'

import {useState, useRef} from 'react'
import {Typography} from '@mui/material'
import Login from './pages/Login'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {

  var content = useRef()

  var [user,setUser] = useState(localStorage.getItem("user"));

  
  if(user){

    return (
      <Router>
        <Container id="main-container" fluid>
          <SideNavigation/>
          <Row id="main-content" style={{paddingTop:"25px",transition:"0.25s"}} ref={content} className="justify-content-center">
            <Col>
              <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    );

  }else{

    return (
      <Router>
        <Container fluid>
          <Row style={{transition:"0.25s"}} className="justify-content-center">
            <Col>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    );

  }

}

export default App;
