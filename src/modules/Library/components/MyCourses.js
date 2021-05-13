import React from 'react'

import { Row, Col } from 'reactstrap'
import CardsSort from './CardsSort'
import CardNew from './CardNew'
import CardWrapper from './CardWrapper'
import CardIframe from './CardIframe'

import contentData from './myCoursesDummyData'
import './MyCourses.scss'

const MyCourses = (props) => {
  const cards = () => {
    const cardsArray = []
    contentData.map((item) => {
      let cardItem = ''
      if (item.cardType === 'text') {
        cardItem = (
          <Col lg="3" md="6" sm="6" xs="12" className="">
            <CardWrapper
              status={item.status}
              cardTitle={item.title}
              cardSubtitle={item.subTitle}
              cardText={item.content}
            />
          </Col>
        )
      } else {
        cardItem = (
          <Col lg="3" md="6" sm="6" xs="12" className="">
            <CardIframe />
          </Col>
        )
      }

      cardsArray.push(cardItem)
    })

    return cardsArray
  }

  return (
    <Row className="my-courses__container">
      <CardsSort />
      <Col lg="3" md="6" sm="6" xs="12" className="">
        <CardNew />
      </Col>
      {cards()}
    </Row>
  )
}

export default MyCourses
