import React from 'react'

import { Row, Col, Form, FormGroup, Input } from 'reactstrap'

const AddLessonInput = (props) => {
  return (
    <Row>
      <Col md="12" className="form-add__lesson-container">
        <Form className="form-add__lesson">
          <FormGroup>
            <Input type="text" className="form-control" placeholder="Enter new lesson title" />
          </FormGroup>
        </Form>
      </Col>
    </Row>
  )
}

export default AddLessonInput
