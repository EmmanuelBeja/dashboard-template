import React, { useState, useEffect } from 'react'

import Tour from 'react-product-intro'
import { Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Accordion, Card } from 'react-bootstrap'
import ActionButtons from './components/ActionButtons'
import AddContent from './components/AddContent'
import ModalComments from './components/modals/ModalComments'

import { lessons } from './utils/lessonsData'

const ContentLoading = ({ next, previous }) => {
  const [dropdownOpen, setDropdownOpen] = useState('')
  const [commentsModal, setCommentsModal] = useState(false)
  const [isTourActive, setIsTourActive] = useState(false)
  const [tourStep, setTourStep] = useState(1)
  const [showFormProgrammatically, setShowFormProgrammatically] = useState(false)

  useEffect(() => {
    setIsTourActive(true)
  }, [])

  const toggleDropdown = (id) => {
    setDropdownOpen((prevState) => (id === dropdownOpen ? '' : id))
  }
  const toggleCommentsModal = () => setCommentsModal(!commentsModal)

  // tour steps
  const steps = [
    {
      step: 1,
      selector: '#add-button',
      body: (
        <div className="tooltip--custom__info">
          <div className="tooltip--custom__info__head">Helpful Tips!</div>
          <div className="tooltip--custom__info__content">
            Great! Let’s get started. To start click on the + FAB Icon under the lesson and create
            content, questions, surveys etc.
          </div>
          <div className="tooltip--custom__info__footer">
            <Button
              className="btn-info"
              onClick={() => {
                setShowFormProgrammatically(true)
                setIsTourActive(false)
              }}
            >
              Show me how to get started
            </Button>
            <Button className="btn-info" onClick={() => setTourStep(2)}>
              Next tip
            </Button>
          </div>
        </div>
      ),
    },
    {
      step: 2,
      selector: '.panel-body__comment',
      body: (
        <div className="tooltip--custom__warning">
          <div className="tooltip--custom__warning__content">
            Get all your reviews and comments here, you can reply to the comments too.
          </div>
          <div className="tooltip--custom__warning__footer">
            <Button className="btn-warning" onClick={() => setIsTourActive(false)}>
              Next
            </Button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="page-content__section--one">
      <Tour
        active={isTourActive}
        step={tourStep}
        onNext={(step) => setTourStep(step)}
        onBack={(step) => setTourStep(step)}
        onCancel={() => setIsTourActive(false)}
        hideButtons={true}
        hideClose={true}
        hideSteps={true}
        arrowColor="transparent"
        steps={steps}
      />

      <Row>
        <Col lg="9" md="12" sm="12" xs="12">
          <div className="left">
            <Row className="left-header">
              Health & Sanitization
              <span>V1. COVID-19 </span>
            </Row>

            <Row>
              <Accordion className="panel-group" defaultActiveKey="0">
                {lessons.map((lesson, index) => (
                  <Card key={index}>
                    <Card.Header>
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <Accordion.Toggle
                            as={Button}
                            className="btn-transparent"
                            variant="link"
                            eventKey={index === 0 ? '0' : index}
                          >
                            Lesson {lesson.id}. {lesson.title}
                          </Accordion.Toggle>
                          <div className="panel-title__right">
                            <Button className="btn-transparent">
                              <img
                                className="arrow-right"
                                src="/assets/img/custom/down.svg"
                                alt=""
                              />
                            </Button>
                            <Dropdown
                              isOpen={lesson.id === dropdownOpen}
                              toggle={() => toggleDropdown(lesson.id)}
                            >
                              <DropdownToggle className="btn-transparent" caret>
                                <i className="material-icons more_vert">more_vert</i>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>New Lesson</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Make a Copy</DropdownItem>
                                <DropdownItem>Trash</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </div>
                        </h4>
                      </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index === 0 ? '0' : index}>
                      <Card.Body>
                        <div className="panel-body">
                          <AddContent showFormProgrammatically={showFormProgrammatically} />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Row>

            <ActionButtons />

            <Row className="bottom">
              <Col md="8">
                <Button type="button" className="btn btn-plain__active" onClick={() => previous()}>
                  <div className="btn-plain__active__content">
                    <i className="material-icons">keyboard_backspace</i>
                    <span>Back to the previous step</span>
                  </div>
                </Button>
              </Col>
              <Col md="4">
                <Button className="btn btn-primary" onClick={() => next()}>
                  NEXT STEP
                  <div className="overlap-group">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="3" md="12" sm="12" xs="12">
          {/* page right section */}
          <div className="right">
            <div className="right-top">
              <Card className="panel panel-default">
                <Card.Header className="panel-heading">
                  <div className="">Content Overview</div>
                  <img className="arrow-right" src="/assets/img/custom/up.svg" alt="" />
                </Card.Header>
                <Card.Body className="panel-body">
                  <div className="panel-row">
                    <div className="panel-row-content">
                      <img
                        className="arrow-right"
                        src="/assets/img/custom/content-overview-1.svg"
                        alt=""
                      />
                      Status
                      <span>Draft</span>
                    </div>
                    <div></div>
                  </div>
                  <div className="panel-row">
                    <div className="panel-row-content">
                      <img
                        className="arrow-right"
                        src="/assets/img/custom/content-overview-2.svg"
                        alt=""
                      />
                      Draft History
                    </div>
                    <div></div>
                  </div>
                  <div className="panel-row flex">
                    <div className="panel-row-content">
                      <img
                        className="arrow-right"
                        src="/assets/img/custom/content-overview-3.svg"
                        alt=""
                      />
                      Submit
                      <span>for review</span>
                    </div>
                    <div className="delete">Move to trash</div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div className="right-bottom">
              <Card className="panel panel-default">
                <Card.Header className="panel-heading">
                  <div className="panel-heading__title">
                    Comments
                    <span>2 New</span>
                  </div>
                  <div className="panel-heading__sort">
                    All
                    <img className="arrow-right" src="/assets/img/custom/down.svg" alt="" />
                  </div>
                </Card.Header>
                <Card.Body className="panel-body">
                  <div className="panel-body__title">
                    <div className="panel-body__title-day">Today</div>
                    <div className="panel-body__title-page">Page 1</div>
                  </div>

                  <div className="panel-body__comment" onMouseDown={() => toggleCommentsModal()}>
                    <div className="panel-body__comment-icon">
                      <i className="material-icons">speaker_notes</i>
                    </div>
                    <div className="panel-body__comment-info">Marisa Conway, 2 hours ago</div>
                    <div className="panel-body__comment-content">
                      <span>Tim Kamau</span>
                      Change the wording to CAPS since they are a call to action
                    </div>
                  </div>

                  <div className="panel-body__comment">
                    <div className="panel-body__comment-icon">
                      <i className="material-icons">speaker_notes</i>
                    </div>
                    <div className="panel-body__comment-info">Marisa Conway, 2 hours ago</div>
                    <div className="panel-body__comment-content">
                      <span>Tim Kamau</span>
                      Change the wording to CAPS since they are a call to action
                    </div>
                  </div>

                  <div className="panel-body__comment">
                    <div className="panel-body__comment-icon">
                      <i className="material-icons">speaker_notes</i>
                    </div>
                    <div className="panel-body__comment-info">Marisa Conway, 2 hours ago</div>
                    <div className="panel-body__comment-content">
                      <span>Tim Kamau</span>
                      Change the wording to CAPS since they are a call to action
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>

      <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
    </div>
  )
}

export default ContentLoading
