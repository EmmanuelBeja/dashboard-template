import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import Layout from '../../app/components/layout'
import CardWelcome from './components/CardWelcome'
import CardCoursesPublished from './components/CardCoursesPublished'
import CardLicensed from './components/CardLicensed'
import CardTotalEarning from './components/CardTotalEarning'
import CardEarningGrowth from './components/CardEarningGrowth'
import CardExample from './components/CardExample'
import CardNew from './components/CardNew'
import CardLibraryDrafts from './components/CardLibraryDrafts'
import CardDraft from './components/CardDraft'
import CardHow from './components/CardHow'
import CardActivities from './components/CardActivities'

import './Dashboard.scss'

const Dashboard = ({ isOpen, handleModalClose }) => {
  return (
    <Layout>
      <Container className="dashboard-container" fluid="true">
        <Row className="dashboard-section__top">
          <Col md="5" sm="12" xs="12" className="dashboard-section__top-card__welcome__container">
            <CardWelcome />
          </Col>
          <Col md="3" sm="12" xs="12" className="dashboard-section__top-card__stack">
            <Row>
              <Col
                md="12"
                sm="12"
                xs="12"
                className="dashboard-section__top-card__stack-courses-published__container"
              >
                <CardCoursesPublished />
              </Col>
            </Row>
            <Row>
              <Col
                xl="6"
                lg="12"
                md="12"
                sm="12"
                xs="12"
                className="dashboard-section__top-card__stack-licensed__container"
              >
                <CardLicensed />
              </Col>
              <Col
                xl="6"
                lg="12"
                md="12"
                sm="12"
                xs="12"
                className="dashboard-section__top-card__stack-total-earning__container"
              >
                <CardTotalEarning />
              </Col>
            </Row>
          </Col>
          <Col
            md="4"
            sm="12"
            xs="12"
            className="dashboard-section__top-card__earning-growth__container"
          >
            <CardEarningGrowth />
          </Col>
        </Row>
        <Row className="dashboard-section__bottom">
          <Col md="8" sm="12" xs="12">
            <Row className="dashboard-section__bottom-top-cards">
              <Col
                md="12"
                sm="12"
                xs="12"
                className="dashboard-section__bottom-top-cards__header card-container__header"
              >
                Dashboard
                <div>
                  <div className="hr-top" />
                  <hr className="hr-bottom__fill" />
                </div>
              </Col>
              <Col
                md="4"
                sm="12"
                xs="12"
                className="dashboard-section__bottom-top-cards__example__container"
              >
                <CardExample />
              </Col>
              <Col md="4" sm="12" xs="12" className="dashboard-section__bottom-top-cards__new">
                <CardNew />
              </Col>
              <Col
                md="4"
                sm="12"
                xs="12"
                className="dashboard-section__bottom-top-cards__library-drafts__container"
              >
                <CardLibraryDrafts />
              </Col>
            </Row>
            <Row className="dashboard-section__bottom-bottom-cards">
              <Col md="4" sm="12" xs="12" className="">
                <Row className="dashboard-section__bottom-bottom-cards__draft">
                  <Col
                    md="12"
                    sm="12"
                    xs="12"
                    className="dashboard-section__bottom-bottom-cards__draft-header card-container__header"
                  >
                    Drafts
                    <div>
                      <div className="hr-top" />
                      <hr className="hr-bottom__fill" />
                    </div>
                  </Col>
                  <Col
                    md="12"
                    sm="12"
                    xs="12"
                    className="dashboard-section__bottom-bottom-cards__draft-card__container"
                  >
                    <CardDraft />
                  </Col>
                </Row>
              </Col>
              <Col md="8" sm="12" xs="12" className="">
                <Row className="dashboard-section__bottom-bottom-cards__how">
                  <Col
                    md="12"
                    sm="12"
                    xs="12"
                    className="dashboard-section__bottom-bottom-cards__how-header card-container__header"
                  >
                    How to
                    <div>
                      <div className="hr-top" />
                      <hr className="hr-bottom" />
                    </div>
                  </Col>
                  <Col
                    md="12"
                    sm="12"
                    xs="12"
                    className="dashboard-section__bottom-bottom-cards__how-card__container"
                  >
                    <CardHow />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="4" sm="12" xs="12" className="">
            <CardActivities />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Dashboard
