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
  Add as AddIcon
} from "@mui/icons-material"

import * as React from 'react';

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DesktopDatePicker, LocalizationProvider, YearPicker } from "@mui/lab";
import { useState } from "react";
import InsertEducationModal from "../components/InsertEducationModal";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CertTab(props) {

  const [insertEducationModalShow, setInsertEducationModalShow] = useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <Row>
      <Col>
        <Accordion expanded={expanded === 'panel1'} className="box-custom" onChange={handleChange('panel1')}>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Certificates
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}></Typography>
          </AccordionSummary>
          <Row className="justify-content-center">
            <Col lg={6} style={{ padding: "50px" }}>
              <Row>
                <Col>
                  <Typography variant="h5" style={{ fontWeight: 800 }}>
                    Certificate
                  </Typography>
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
                    <Col lg={12} className="mb-5">
                      <Typography variant="h6" style={{ fontWeight: 700 }}>
                        St. John The Baptist Catholic School
                      </Typography>
                      <Typography style={{ fontWeight: 500 }}>
                        Basic Education
                      </Typography>
                      <Typography>2008 - 2010</Typography>
                    </Col>
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
                    <Col lg={12} className="mb-5">
                      <Typography variant="h6" style={{ fontWeight: 700 }}>
                        St. John The Baptist Catholic School
                      </Typography>
                      <Typography style={{ fontWeight: 500 }}>
                        Basic Education
                      </Typography>
                      <Typography>2008 - 2010</Typography>
                    </Col>
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
                    <Col lg={12} className="mb-5">
                      <Typography variant="h6" style={{ fontWeight: 700 }}>
                        St. John The Baptist Catholic School
                      </Typography>
                      <Typography style={{ fontWeight: 500 }}>
                        Basic Education
                      </Typography>
                      <Typography>2008 - 2010</Typography>
                    </Col>
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
                    <Col lg={12} className="mb-5">
                      <Typography variant="h6" style={{ fontWeight: 700 }}>
                        St. John The Baptist Catholic School
                      </Typography>
                      <Typography style={{ fontWeight: 500 }}>
                        Basic Education
                      </Typography>
                      <Typography>2008 - 2010</Typography>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <InsertEducationModal
                show={insertEducationModalShow}
                onHide={() => setInsertEducationModalShow(false)}
              />
            </Col>
          </Row>
        </Accordion>
      </Col>
    </Row>
  );
}

export default CertTab;
