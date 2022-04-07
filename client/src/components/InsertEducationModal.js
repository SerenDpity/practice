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

function InsertEducationModal(props) {
  const [value, setValue] = useState(new Date());
  const [insertModalShow, setInsertModalShow] = useState(false);
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
                    label="School"
                    fullWidth
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
                    >
                      <MenuItem value={10}>Elementary</MenuItem>
                      <MenuItem value={20}>High School</MenuItem>
                      <MenuItem value={30}>Senior High School</MenuItem>
                      <MenuItem value={30}>College</MenuItem>
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
                    >
                      <MenuItem value={10}>2015</MenuItem>
                      <MenuItem value={20}>2016</MenuItem>
                      <MenuItem value={30}>2017</MenuItem>
                      <MenuItem value={30}>2018</MenuItem>
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
                    >
                      <MenuItem value={10}>2015</MenuItem>
                      <MenuItem value={20}>2016</MenuItem>
                      <MenuItem value={30}>2017</MenuItem>
                      <MenuItem value={30}>2018</MenuItem>
                    </Select>
                  </FormControl>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" className="btn-custom">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InsertEducationModal;
