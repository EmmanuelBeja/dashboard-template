import React, { useState } from 'react'

import { Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import Layout from '../../app/components/layout'
import MyCourses from './components/MyCourses'
import AllLibraryContent from './components/AllLibraryContent'

import classnames from 'classnames'
import './Library.scss'

const Library = () => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab) => activeTab !== tab && setActiveTab(tab)

  return (
    <Layout>
      <Container className="library-container" fluid="true">
        <Container>
          <Row className="library-section__top">
            <Col md="12" sm="12" xs="12" className="library-section__top-header">
              Content Library
            </Col>
          </Row>
        </Container>

        <Row className="library-section__bottom">
          <Container>
            <Col
              lg="4"
              md="6"
              sm="12"
              xs="12"
              className="library-section__bottom-tab-nav__container"
            >
              <Nav tabs className="library-section__bottom-tab-nav">
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1')
                    }}
                  >
                    My Courses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2')
                    }}
                  >
                    All Library Content
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Container>

          <Col md="12" sm="12" xs="12">
            <Container>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <MyCourses />
                </TabPane>
                <TabPane tabId="2">
                  <AllLibraryContent />
                </TabPane>
              </TabContent>
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Library
