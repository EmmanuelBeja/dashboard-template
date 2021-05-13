import React from 'react'

import { Card, CardBody, CardImg, Row, Col } from 'reactstrap'

import { cardCoursesPublishedIcon, cardCoursesPublishedUndraw } from '../../../assets/images'
import './CardCoursesPublished.scss'

const CardCoursesPublished = (props) => {
  return (
    <Card className="dashboard-section__top-card__stack-courses-published">
      <CardBody>
        <Row>
          <Col md="8" sm="12" xs="12">
            <Row>
              <Col
                md="12"
                sm="12"
                xs="12"
                className="dashboard-section__top-card__stack-courses-published__top"
              >
                <CardImg
                  top
                  width="100%"
                  src={cardCoursesPublishedIcon}
                  alt="Card courses published"
                />
                Courses Published
              </Col>
              <Col
                md="12"
                sm="12"
                xs="12"
                className="dashboard-section__top-card__stack-courses-published__bottom"
              >
                32
              </Col>
            </Row>
          </Col>
          <Col
            md="4"
            sm="12"
            xs="12"
            className="dashboard-section__top-card__stack-courses-published__image"
          >
            <CardImg
              top
              width="100%"
              src={cardCoursesPublishedUndraw}
              alt="Card courses published"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CardCoursesPublished
