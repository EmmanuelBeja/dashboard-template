import React from 'react'

import { Container, Row, Col, Button } from 'reactstrap'

import { contactUsString } from '../../../assets/images'

const SectionContact = () => {
  return (
    <Container className="section-contact__container">
      <Row>
        <Col md="8" sm="12" xs="12" className="section-contact__left">
          <h2 className="section-contact__left-header">All-in-one platform for business</h2>
          <p className="section-contact__left-text">
            1.5M learners reached with skills, XX increase in farm productivity, XX increase in
            responsible dept. XX first access to reliable information
          </p>
        </Col>
        <Col md="4" sm="12" xs="12" className="section-contact__right">
          <Button size="lg" color="secondary" className="section-contact__right-button">
            Get in Touch
          </Button>
        </Col>
      </Row>

      <img src={contactUsString} className="section-contact__svg" alt="Contact Us String" />
    </Container>
  )
}

export default SectionContact
