import React from 'react'

import { Card, CardBody, CardImg, Row, Col } from 'reactstrap'

import { cardLicensedIcon } from '../../../assets/images'
import './CardLicensed.scss'

const CardLicensed = (props) => {
  return (
    <Card className="dashboard-section__top-card__stack-licensed">
      <CardBody>
        <Row>
          <Col md="12" sm="12" xs="12" className="dashboard-section__top-card__stack-licensed__top">
            <CardImg top width="100%" src={cardLicensedIcon} alt="Card licensed" />
            Licensed
          </Col>
          <Col
            md="12"
            sm="12"
            xs="12"
            className="dashboard-section__top-card__stack-licensed__bottom"
          >
            11
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CardLicensed
