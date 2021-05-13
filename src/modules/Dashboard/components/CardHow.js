import React from 'react'

import { Card } from 'reactstrap'
import YouTubeIframe from '../../../app/components/YouTubeIframe'

import './CardHow.scss'

const CardHow = (props) => {
  return (
    <Card className="dashboard-section__bottom-bottom-cards__how-card">
      <YouTubeIframe height={200} embedId={'-bJM4BGtJ9Y'} />
    </Card>
  )
}

export default CardHow
