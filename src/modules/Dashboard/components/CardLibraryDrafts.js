import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardImg, Button } from 'reactstrap'

import { cardLibraryDraftsIcon } from '../../../assets/images'
import './CardLibraryDrafts.scss'

const CardLibraryDrafts = (props) => {
  return (
    <Card className="dashboard-section__bottom-top-cards__library-drafts">
      <CardBody>
        <CardImg top width="100%" src={cardLibraryDraftsIcon} alt="Card library and drafts" />
        <CardTitle tag="h5">Content Library and drafts</CardTitle>
        <CardText>Optional description. Hide or delete this layer if it’s not needed.</CardText>
        <Button onClick={() => {}}>View Library</Button>
      </CardBody>
    </Card>
  )
}

export default CardLibraryDrafts
