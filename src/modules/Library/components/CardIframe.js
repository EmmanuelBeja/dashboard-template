import React from 'react'

import { Card } from 'reactstrap'
import YouTubeIframe from '../../../app/components/YouTubeIframe'

import './CardIframe.scss'

const CardIframe = (props) => {
  return (
    <Card className="card-iframe">
      <YouTubeIframe height={320} embedId={'-bJM4BGtJ9Y'} />
    </Card>
  )
}

export default CardIframe
