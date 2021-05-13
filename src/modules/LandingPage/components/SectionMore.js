import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import { dashboardPreview } from '../../../assets/images'

const SectionMore = () => {
  return (
    <Container className="section-more__container">
      <Row>
        <Col md="6" sm="12" xs="12" className="section-more__left">
          <img src={dashboardPreview} alt="application preview" />
          <div className="navy-rectangle" />
        </Col>
        <Col md="6" sm="12" xs="12" className="section-more__right">
          <h4>
            Access real-time analytics and feedback to better understand your target audiences
          </h4>
          <p>
            Deliver awareness and knowledge that drives usage of essential skills and high impact
            services.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionMore
