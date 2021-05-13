import React from 'react'

import { Card, CardText, CardBody, CardTitle } from 'reactstrap'

import './CardDraft.scss'

const CardDraft = (props) => {
  return (
    <Card className="dashboard-section__bottom-bottom-cards__draft-card">
      <CardBody>
        <CardTitle tag="h5">Where you left off</CardTitle>
        <CardText>
          Example Content
          <i className="fas fa-long-arrow-alt-right" />
        </CardText>
        <CardText>
          Covid 19 Fundamentals
          <i className="fas fa-long-arrow-alt-right" />
        </CardText>
      </CardBody>
    </Card>
  )
}

export default CardDraft
