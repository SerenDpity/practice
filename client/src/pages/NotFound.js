import {Row,Col} from 'react-bootstrap'
import {Typography} from '@mui/material'

function NotFound() {
  
  return (
    
    <Row style={{height:"95vh"}} className="justify-content-center align-items-center text-center">
        <Col className="animate__animated animate__fadeIn">
            <Typography variant="h5" className="text-muted">Error 404</Typography>
            <Typography variant="h3" className="text-muted">Page Not Found</Typography>
        </Col>
    </Row>

  );

}

export default NotFound;
