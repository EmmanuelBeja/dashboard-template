import React from 'react'

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardImg,
  CardBody,
} from 'reactstrap'
import Back from './Back'
import ProgressIndicator from './ProgressIndicator'
import SocialAuth from './SocialAuth'

import './UserWelcome.scss'

import {
  technoserve,
  kcb,
  equitel,
  syngeta,
  digifarm,
  heifer,
  mercycops,
  safaricom,
} from '../../../assets/images'

const UserWelcome = ({ next, index }) => {
  return (
    <Container className="user-welcome__container" fluid={true}>
      <Row className="">
        <Col md="7" sm="12" xs="12" className="">
          <UserWelcomeLeft next={next} index={index} />
        </Col>
        <Col md="5" sm="12" xs="12" className="">
          <UserWelcomeRight />
        </Col>
      </Row>
    </Container>
  )
}

export const UserWelcomeLeft = ({ next, index }) => {
  return (
    <>
      <Back previousUrl="/" />
      <Row className="user-welcome-left">
        <Col md="12" sm="12" xs="12" className="user-welcome-left__header">
          <h2>Welcome</h2>
          <p>Let’s get started with a few simple steps</p>
        </Col>
        <Col md="12" sm="12" xs="12" className="user-welcome-left__form">
          <Form>
            <FormGroup>
              <Label for="email">Enter email</Label>
              <Input type="email" name="email" id="email" placeholder="name@youremail.com" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Enter organization</Label>
              <Input
                type="organizations"
                name="text"
                id="organization"
                placeholder="Organization"
              />
            </FormGroup>
          </Form>
          <Button color="primary" onClick={next}>
            Continue
          </Button>
        </Col>
        <Col md="12" sm="12" xs="12" className="">
          <Row className="other-auth-option__container">
            <Col md="12" sm="12" xs="12" className="other-auth-option">
              <hr />
              <span>or signup with</span>
              <hr />
            </Col>
          </Row>
          <SocialAuth />
          <div className="text-center">
            Already have an account?
            <Button color="link" onClick={() => {}}>
              Log in
            </Button>
          </div>
        </Col>
        <ProgressIndicator totalSlides={4} currentIndex={index} />
      </Row>
    </>
  )
}

export const UserWelcomeRight = () => {
  const organizationsLogos = [
    technoserve,
    kcb,
    equitel,
    syngeta,
    digifarm,
    heifer,
    mercycops,
    safaricom,
  ]

  return (
    <Row className="user-welcome-right">
      <Col md="12" sm="12" xs="12" className="user-welcome-right__title">
        Create content for these high impact partners and engage millions of people
      </Col>

      {organizationsLogos.map((item) => (
        <Col md="6" sm="6" xs="12" className="user-welcome-right__logo">
          <Card>
            <CardBody>
              <CardImg top width="100%" src={item} alt="Card image Partner" />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default UserWelcome
