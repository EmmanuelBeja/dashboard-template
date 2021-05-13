import React from 'react'

import { Card, CardText, CardBody, CardTitle, Progress } from 'reactstrap'

import './CardWelcome.scss'

const CardWelcome = (props) => {
  return (
    <Card className="dashboard-section__top-card__welcome">
      <CardBody>
        <div>👋</div>
        <CardTitle tag="h5">Welcome back, Kamau</CardTitle>
        <CardText>
          We recommend you to complete <span className="text-black">uploading your resume</span> and
          add your <span className="text-black">bank details</span>
        </CardText>
        <Progress color="success" value="50" />
        <div className="card-more">
          60% Profile completion
          <span className="text-black">Complete your profile to be verified</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardWelcome
