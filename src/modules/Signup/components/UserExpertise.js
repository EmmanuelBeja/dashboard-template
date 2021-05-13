import React from 'react'

import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap'
import Back from './Back'
import ProgressIndicator from './ProgressIndicator'

import {
  boxBulbIcon,
  agricultureHorticulture,
  insuranceFinance,
  governacePolicy,
  healthSanitation,
  creditFintech,
} from '../../../assets/images'
import './UserExpertise.scss'

const UserExpertise = ({ next, previous, index }) => {
  return (
    <Container className="user-expertise__container">
      <Row>
        <Back previous={previous} />
        <Col md="12" sm="12" xs="12" className="user-expertise__header">
          <h4>Let’s create the best experience for you</h4>
        </Col>
        <Col md="12" sm="12" xs="12" className="user-expertise__info">
          <img src={boxBulbIcon} className="user-expertise__info-image" alt="box bulb icon" />
          <div className="user-expertise__info-card">
            Did you know?
            <br />
            You can create and publish content modules and topics in just a few clicks. Our robust
            content guides, case studies, and sample content can help you get started.
          </div>
        </Col>
        <Col md="12" sm="12" xs="12" className="user-expertise__form">
          <p>Tell us a little about your area of expertise</p>
          <Form className="form">
            <Row className="form--custom__select">
              <Col md="2" sm="4" xs="6" className="form-check checked" id="1">
                <div className="form-check__top">
                  <img
                    src={agricultureHorticulture}
                    alt="select Agriculture & Horticulture images"
                  />
                </div>
                <div className="form-check__bottom">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="Agriculture & Horticulture"
                    checked
                  />
                  <Label className="form-check-label" htmlFor="exampleRadios1">
                    Agriculture & Horticulture
                  </Label>
                </div>
              </Col>
              <Col md="2" sm="4" xs="6" className="form-check" id="2">
                <div className="form-check__top">
                  <img src={insuranceFinance} alt="select Insurance & Finance" />
                </div>
                <div className="form-check__bottom">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="Insurance & Finance"
                  />
                  <Label className="form-check-label" htmlFor="exampleRadios2">
                    Insurance & Finance
                  </Label>
                </div>
              </Col>
              <Col md="2" sm="4" xs="6" className="form-check" id="3">
                <div className="form-check__top">
                  <img src={governacePolicy} alt="select Governance & Policy" />
                </div>
                <div className="form-check__bottom">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="Governance & Policy"
                  />
                  <Label className="form-check-label" htmlFor="exampleRadios2">
                    Governance & Policy
                  </Label>
                </div>
              </Col>
              <Col md="2" sm="4" xs="6" className="form-check" id="4">
                <div className="form-check__top">
                  <img src={healthSanitation} alt="select Health & Sanitation" />
                </div>
                <div className="form-check__bottom">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="Health & Sanitation"
                  />
                  <Label className="form-check-label" htmlFor="exampleRadios2">
                    Health & Sanitation
                  </Label>
                </div>
              </Col>
              <Col md="2" sm="4" xs="6" className="form-check" id="5">
                <div className="form-check__top">
                  <img src={creditFintech} alt="select Credit & Fintech" />
                </div>
                <div className="form-check__bottom">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="Credit & Fintech"
                  />
                  <Label className="form-check-label" htmlFor="exampleRadios2">
                    Credit & Fintech
                  </Label>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md="12" sm="12" xs="12" className="">
          <ProgressIndicator totalSlides={4} currentIndex={index} />
          <div className="user-expertise__form-buttons">
            <Button color="link" onClick={next}>
              Skip
            </Button>
            <Button color="primary" onClick={next}>
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default UserExpertise
