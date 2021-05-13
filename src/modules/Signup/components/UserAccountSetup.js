import React from 'react'

import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import Back from './Back'
import ProgressIndicator from './ProgressIndicator'

import { userAccountSetupUndraw } from '../../../assets/images'
import './UserAccountSetup.scss'

const UserAccountSetup = ({ previous, next, index }) => {
  return (
    <Container className="user-account-setup__container" fluid={true}>
      <Row className="">
        <Col md="7" sm="12" xs="12" className="">
          <UserAccountSetupLeft previous={previous} next={next} index={index} />
        </Col>
        <Col md="5" sm="12" xs="12" className="user-account-setup-right__container">
          <UserAccountSetupRight />
        </Col>
      </Row>
    </Container>
  )
}

const UserAccountSetupLeft = ({ previous, next, index }) => {
  return (
    <Row className="user-account-setup-left">
      <Back previous={previous} />
      <Col md="12" sm="12" xs="12" className="user-account-setup-left__header">
        <h2>Setup your account</h2>
        <p>Fill in your profile details</p>
      </Col>
      <Col md="12" sm="12" xs="12" className="user-account-setup-left__form">
        <Form>
          <FormGroup>
            <Label for="userName">Full Name</Label>
            <Input type="text" name="userName" id="userName" placeholder="Enter Full Name" />
          </FormGroup>
          <FormGroup>
            <Label for="phoneNumber">Enter email</Label>
            <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="+254 72567 9352" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> I agree with the <a href="#">terms of service</a> and{' '}
              <a href="#">Privacy policy</a>
            </Label>
          </FormGroup>
        </Form>
        <div className="user-account-setup-left__form-buttons">
          <Button color="link" onClick={next}>
            Skip
          </Button>
          <Button color="primary" onClick={next}>
            Continue
          </Button>
        </div>
      </Col>
      <ProgressIndicator totalSlides={4} currentIndex={index} />
    </Row>
  )
}

const UserAccountSetupRight = () => {
  return (
    <Row className="user-account-setup-right">
      <Col md="12" sm="12" xs="12" className="">
        <img
          src={userAccountSetupUndraw}
          className="user-account-setup-right__svg"
          alt="setting up account illustration"
        />
      </Col>
      <Col md="12" sm="12" xs="12" className="user-account-setup-right__body">
        Give us your details so that you can login later, we promise NOT to share your information.
      </Col>
    </Row>
  )
}

export default UserAccountSetup
