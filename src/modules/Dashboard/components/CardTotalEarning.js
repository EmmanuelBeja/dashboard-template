import React from 'react'

import { Card, CardBody, CardImg, Row, Col } from 'reactstrap'

import { cardTotalEarningIcon } from '../../../assets/images'
import './CardTotalEarning.scss'

const CardTotalEarning = (props) => {
  return (
    <Card className="dashboard-section__top-card__stack-total-earning">
      <CardBody>
        <Row>
          <Col
            md="12"
            sm="12"
            xs="12"
            className="dashboard-section__top-card__stack-total-earning__top"
          >
            <CardImg top width="100%" src={cardTotalEarningIcon} alt="Card total earning" />
            Total Earning
          </Col>
          <Col
            md="12"
            sm="12"
            xs="12"
            className="dashboard-section__top-card__stack-total-earning__bottom"
          >
            KES 1.2k
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CardTotalEarning
