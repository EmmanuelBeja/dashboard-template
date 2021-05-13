import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Row, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import { Accordion, Card } from 'react-bootstrap'
import ActionButtons from '../ActionButtons'
import AddContent from '../AddContent'
import ModalComments from '../modals/ModalComments'

import { lessons } from '../../utils/lessonsData'

const Draft = (props) => {
  const history = useHistory()

  const { next, index, setShowTranslate, showTranslate } = props
  const [dropdownOpen, setDropdownOpen] = useState('')
  const [commentsModal, setCommentsModal] = useState(false)

  const toggleDropdown = (id) => {
    setDropdownOpen((prevState) => (id === dropdownOpen ? '' : id))
  }
  const toggleCommentsModal = () => setCommentsModal(!commentsModal)

  return (
    <Row>
      <Col lg="9" md="12" sm="12" xs="12">
        <div className="left">
          <div className="left-header">Health & Sanitation- COVID-19</div>
          <div className="left">
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
                          <AddContent />
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Row>

            <ActionButtons />

            <Row className="bottom">
              <Col md="6"></Col>
              <Col md="6">
                {index === 0 && (
                  <Button className="btn btn-navy bottom-right" onClick={() => next()}>
                    SHARE FEEDBACK
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </Button>
                )}
                {(index === 1 || index === 2) && (
                  <Button className="btn btn-primary bottom-right" onClick={() => next()}>
                    SHARE FEEDBACK
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </Button>
                )}
              </Col>
            </Row>

            <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
          </div>
        </div>
      </Col>
      <Col lg="3" md="12" sm="12" xs="12">
        {/* right section of page */}
        <div className="right">
          <div className="right-top">
            <Card className="panel panel-default">
              <Card.Body className="panel-body panel-body__center">
                {index === 0 && (
                  <Button
                    type="button"
                    className="btn btn-primary btn-submit"
                    onClick={() => next()}
                  >
                    SHARE WITH THE PARTNER
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </Button>
                )}
                {(index === 1 || index === 2 || (index === 3 && showTranslate === true)) && (
                  <Button
                    type="button"
                    className="btn btn-primary btn-submit"
                    onClick={() => next()}
                  >
                    SEND APPROVAL
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </Button>
                )}
                {index === 3 && showTranslate === false && (
                  <>
                    <Button
                      type="button"
                      className="btn btn-primary btn-submit"
                      onClick={() => history.push('/course/review')}
                    >
                      PUBLISH
                      <div className="overlap-group">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-navy__outline"
                      onClick={() => setShowTranslate(true)}
                    >
                      TRANSLATE
                      <div className="overlap-group">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </div>
                    </Button>
                  </>
                )}
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

                <div className="panel-body__comment" data-tip data-for="tooltip_comment_review">
                  <ReactTooltip id="tooltip_comment_review" aria-haspopup="true">
                    <div className="tooltip--custom__warning">
                      <div className="tooltip--custom__warning__content">
                        Get all your reviews and comments here, you can reply to the comments too.
                      </div>
                      <div className="tooltip--custom__warning__footer">
                        <Button className="btn-warning">Next</Button>
                      </div>
                    </div>
                  </ReactTooltip>
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
  )
}

export default Draft
