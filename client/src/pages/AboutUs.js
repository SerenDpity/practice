import {Row,Col} from 'react-bootstrap'
import {Typography} from '@mui/material'

function AboutUs() {
  
  return (
    
    <Row style={{height:"95vh"}} className="justify-content-center align-items-center text-center">
      <Col>
        <Row className="mb-5">
          <Col className="animate__animated animate__fadeIn">
              <img src="img/BSUColor.png" className="img-custom" style={{width:"250px"}}></img>
              <Typography variant="h3" className="text-muted">Team Two</Typography>
              <Typography variant="h5" className="text-muted">BulSu Main</Typography>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={5}>
            <Row className="justify-content-center">
              <Col lg={5} className="div-custom">
                <img src="img/ErenWhite.png" className="img-fluid"></img>
                <Typography variant="h5" className="txt-colored">Jean Eren Fajardo</Typography>
                <Typography style={{fontSize:"12px"}}>BACK-END DEVELOPER</Typography>
              </Col>
              <Col lg={2}></Col>
              <Col lg={5} className="div-custom">
                <img src="img/CarmelaWhite.PNG" className="img-fluid"></img>
                <Typography variant="h5" className="txt-colored">Isabelle Mendoza</Typography>
                <Typography style={{fontSize:"12px"}}>FRONT-END DEVELOPER</Typography>
              </Col>
              <Col lg={12} className="mt-5">
                <Typography>A team consisting of Third Year Students from Bulacan State University - Main. Participating in IRCITE 2022 Hackathon Competition not just for the school, but for the Glory of God. </Typography>
              </Col>
            </Row>
          </Col>
        </Row>

      </Col>
    </Row>

  );

}

export default AboutUs;
