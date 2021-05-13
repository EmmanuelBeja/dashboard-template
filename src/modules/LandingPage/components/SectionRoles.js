import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'

import { angleRight, partnerCard, contentAuthorCard } from '../../../assets/images'

const SectionRoles = (props) => {
  const { handleSignupToggle } = props

  return (
    <Container className="section-roles__container" fluid="true">
      <Row>
        <Col md={{ size: 4, offset: 2 }} sm="6" xs="12" className="section-roles__left">
          <Card>
            <CardBody>
              <div className="card-images">
                <CardImg className="undraw" src={partnerCard} alt="Card image Partner" />
              </div>
              <div className="card-body__content">
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Partner
                </CardSubtitle>
                <CardTitle tag="h5">Get content that perfectly fits your campaign</CardTitle>
                <CardText>
                  95% have reported experiencing an improvement in their quality of life as a result
                  of their interaction with Us. Results showed that 63% of the respondents
                  attributed an improvement in their quality to our content
                </CardText>
                <CardText>
                  96% of the respondents reported that interaction with our content has contributed
                  to an increase in the number of sacks of potatoes they harvested.
                </CardText>
                <Button
                  color="secondary"
                  size="lg"
                  className="btn-with-icon"
                  onClick={() => handleSignupToggle()}
                >
                  Learn more
                  <img src={angleRight} alt="icon" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={{ size: 4 }} sm="6" xs="12" className="section-roles__right">
          <Card>
            <CardBody>
              <div className="card-images">
                <CardImg
                  className="undraw"
                  src={contentAuthorCard}
                  alt="Card image Content Author"
                />
              </div>
              <div className="card-body__content">
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Content Author
                </CardSubtitle>
                <CardTitle tag="h5">License your content and get paid</CardTitle>
                <CardText>
                  On average, 80% of the farmers attributed an increase in the inputs they use in
                  their farms including seeds, fertilizers and pesticides to our content, which has
                  led to an increased expenditure on inputs and increased crop output as well.
                </CardText>
                <CardText>
                  78% of the respondents reported that they had recommended our content to other
                  farmers too. We are seeing a multiplier effect, where 78 learners are collectively
                  telling about our content to as low as 368 and as high as 648 other farmers.
                </CardText>
                <Button
                  color="primary"
                  size="lg"
                  className="btn-with-icon"
                  onClick={() => handleSignupToggle()}
                >
                  Get started
                  <img src={angleRight} alt="icon" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionRoles
