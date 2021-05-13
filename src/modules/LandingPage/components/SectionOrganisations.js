import React from 'react'
import { Container, Row, Col } from 'reactstrap'

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

const SectionOrganisations = () => {
  return (
    <Container className="section-organisations__container">
      <Row>
        <Col md="12" sm="12" xs="12" className="section-organisations__header">
          <h4 className="text-center">Discover why these organizations love Us</h4>
        </Col>
        <Col md="12" sm="12" xs="12" className="section-organisations__logos">
          <Container>
            <Row>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={technoserve} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={kcb} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={equitel} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={syngeta} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={digifarm} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={heifer} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={mercycops} className="" alt="logo" />
              </Col>
              <Col md="3" sm="6" xs="12" className="section-organisations__logos-item">
                <img src={safaricom} className="" alt="logo" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionOrganisations
