import React from 'react'

import { Row, Col } from 'reactstrap'

import { progressRectangleIcon, progressEllipseIcon } from '../../../assets/images'
import './ProgressIndicator.scss'

const ProgressIndicator = ({ totalSlides, currentIndex }) => {
  const indicatorItems = () => {
    const indicators = []
    for (let i = 0; i < totalSlides; i++) {
      let indicator = ''
      if (currentIndex === i) {
        indicator = <img src={progressRectangleIcon} className="" alt="active slide icon" />
      } else {
        indicator = <img src={progressEllipseIcon} className="" alt="in active slide icon" />
      }
      indicators.push(indicator)
    }

    return indicators
  }
  return (
    <Row className="progress-indicator__container">
      <Col md="12" sm="12" xs="12" className="progress-indicator">
        {indicatorItems()}
      </Col>
    </Row>
  )
}

export default ProgressIndicator
