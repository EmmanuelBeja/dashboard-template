import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, Button } from 'reactstrap'

import { cardNewIcon } from '../../../assets/images'

const CardNew = (props) => (
  <Card>
    <CardBody>
      <CardImg top width="100%" src={cardNewIcon} alt="Card new" />
      <CardTitle tag="h5">Create a new Course</CardTitle>
      <CardText>Optional description. Hide or delete this layer if it’s not needed.</CardText>
      <Button onClick={() => {}}>Create</Button>
    </CardBody>
  </Card>
)

export default CardNew
