import React from 'react'
import { useHistory } from 'react-router-dom'

import { Card, CardBody, CardTitle, CardImg } from 'reactstrap'

import { libraryAddIcon } from '../../../assets/images'
import './CardNew.scss'

const CardNew = (props) => {
  const history = useHistory()

  return (
    <Card className="card-new" onMouseDown={() => history.push('/course/builder')}>
      <CardBody>
        <CardTitle tag="h5">Add a New Course</CardTitle>
        <CardImg top width="100%" src={libraryAddIcon} alt="Card new" />
      </CardBody>
    </Card>
  )
}

export default CardNew
