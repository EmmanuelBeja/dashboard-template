import React from 'react'

import { Container, ModalFooter, Form, Row, Col, FormGroup, Input, Label, Button } from 'reactstrap'
import ModalWrapper from '../../../../app/components/Modal'

import './NewDeveloper.scss'

const NewDeveloper = (props) => {
  const { toggle, isOpen } = props

  return (
    <ModalWrapper
      isOpen={isOpen}
      handleModalClose={toggle}
      className="new-developer__modal-container"
      centered={true}
      title={
        <>
          <i className="fas fa-circle"></i>
          &nbsp;&nbsp; New Content Developer
        </>
      }
    >
      <Container>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" className="form-control" id="name" placeholder="eg.Tim Kamau" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="sector">Assign a Partner/Sector</Label>
                <Input type="select" className="form-control" id="select" placeholder="eg. Tech">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="role">Role</Label>
                <Input
                  type="select"
                  className="form-control"
                  id="role"
                  placeholder="eg. translator"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="location">location</Label>
                <Input
                  type="select"
                  className="form-control"
                  id="location"
                  placeholder="eg. Nairobi"
                >
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <div className="contact modal-sub-header">Contact</div>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="tim@google.com"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="+254 (444444)"
                />
              </FormGroup>
            </Col>
          </Row>

          <div className="teams modal-sub-header">Team(s)</div>
          <Row>
            <Col md="12">
              <div className="teams--container">
                <div>
                  <FormGroup>
                    <Label htmlFor="teamName">Team Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="teamName"
                      placeholder="eg. Animators"
                    />
                  </FormGroup>
                </div>
                <div>
                  <FormGroup>
                    <Label htmlFor="sub-title">location</Label>
                    <Input
                      type="select"
                      className="form-control"
                      id="select"
                      placeholder="eg. Nairobi"
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                    </Input>
                  </FormGroup>
                </div>
                <div>
                  <p>You can add any team that the developer is in</p>
                </div>
                <Container>
                  <FormGroup>
                    <Label>
                      <Input type="checkbox" value="" />
                      Send Login information on email
                    </Label>
                  </FormGroup>
                </Container>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <ModalFooter>
        <Button type="button" outline className="btn btn-outline-dark" onClick={toggle}>
          Cancel
        </Button>
        <Button type="button" className="btn btn-dark">
          Save
        </Button>
      </ModalFooter>
    </ModalWrapper>
  )
}

export default NewDeveloper
