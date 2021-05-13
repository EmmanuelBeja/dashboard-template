import React, { useState } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import SMS from './components/Simulate/sms'
import WhatsApp from './components/Simulate/whatsapp'
import Telegram from './components/Simulate/telegram'
import Messenger from './components/Simulate/messenger'
import TipsCard from './components/TipsCard'
import ModalSubmitSuccess from './components/modals/ModalSubmitSuccess'

const Simulate = ({ next, previous }) => {
  const [activeTab, setActiveTab] = useState('1')
  const [submitSuccessModal, setSubmitSuccessModal] = useState(false)

  const toggle = (tab) => activeTab !== tab && setActiveTab(tab)

  const toggleSubmitSuccessModal = () => setSubmitSuccessModal(!submitSuccessModal)

  return (
    <div className="page-content__section--one">
      <Row>
        <Col lg="9" md="12" sm="12" xs="12">
          <div className="left">
            <div className="left-header">Simulate Content</div>
            {/* simulation navtabs */}
            <div className="left-subheader">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      toggle('1')
                    }}
                  >
                    SMS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      toggle('2')
                    }}
                  >
                    WhatsApp
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => {
                      toggle('3')
                    }}
                  >
                    Telegram
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '4' })}
                    onClick={() => {
                      toggle('4')
                    }}
                  >
                    Messenger
                  </NavLink>
                </NavItem>
              </Nav>
            </div>

            <div className="left-body">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <SMS />
                </TabPane>
                <TabPane tabId="2">
                  <WhatsApp />
                </TabPane>
                <TabPane tabId="3">
                  <Telegram />
                </TabPane>
                <TabPane tabId="4">
                  <Messenger />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Col>
        <Col lg="3" md="12" sm="12" xs="12">
          {/* right section of page */}
          <div className="right">
            <div className="right-top">
              <div className="panel panel-default">
                <div className="panel-body">
                  <button className="btn btn-primary" onClick={() => toggleSubmitSuccessModal()}>
                    SUBMIT FOR REVIEW
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="right-bottom">
              <TipsCard
                text="Scroll the content within the screen as same as your learners will."
                buttonText="Next tip"
                buttonClickHandler={() => {}}
              />
            </div>
          </div>
        </Col>
      </Row>

      <ModalSubmitSuccess toggle={toggleSubmitSuccessModal} isOpen={submitSuccessModal} />
    </div>
  )
}

export default Simulate
