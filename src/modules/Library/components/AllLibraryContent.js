import React from 'react'

import { Row, Col } from 'reactstrap'
import CardsSort from './CardsSort'
import CardNew from './CardNew'
import CardWrapper from './CardWrapper'
import CardIframe from './CardIframe'

import contentData from './allLibraryContentDummyData'
import './AllLibraryContent.scss'

const AllLibraryContent = (props) => {
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
    <Row className="all-library-content__container">
      <CardsSort />
      <Col md="12" sm="12" xs="12" className="all-library-content__title">
        Top Courses
      </Col>
      <Col lg="3" md="6" sm="6" xs="12" className="">
        <CardNew />
      </Col>
      {cards()}
    </Row>
  )
}

export default AllLibraryContent
