import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, Button } from 'reactstrap'

import { cardExampleIcon } from '../../../assets/images'
import './CardExample.scss'

const CardExample = (props) => {
  return (
    <Card className="dashboard-section__bottom-top-cards__example">
      <CardBody>
        <CardImg top width="100%" src={cardExampleIcon} alt="Card example" />
        <CardTitle tag="h5">Start with an example</CardTitle>
        <CardText>Optional description. Hide or delete this layer if it’s not needed.</CardText>
        <Button onClick={() => {}}>Get Started</Button>
      </CardBody>
    </Card>
  )
}

export default CardExample
