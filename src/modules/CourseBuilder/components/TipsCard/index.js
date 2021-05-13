import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, Button } from 'reactstrap'

import { helpfulTips } from '../../../../assets/images'
import './TipsCard.scss'

const TipsCard = (props) => {
  const { text, buttonText, buttonClickHandler } = props
  return (
    <Card className="card-tips">
      <CardBody>
        <CardTitle tag="h5">Helpful tips!</CardTitle>
        <CardText>{text}</CardText>
        <Button onClick={() => buttonClickHandler()}>{buttonText}</Button>
        <CardImg top width="100%" src={helpfulTips} alt="tips illustration" />
      </CardBody>
    </Card>
  )
}

export default TipsCard
