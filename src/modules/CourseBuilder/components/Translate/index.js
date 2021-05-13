import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Row,
  Col,
  Button,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { Accordion, Card } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import ActionButtons from '../ActionButtons'
import ModalComments from '../modals/ModalComments'

import { lessons } from '../../utils/lessonsData'

import { randomImage, socialLogoGrammarly } from '../../../../assets/images'
import './Translate.scss'

const Translate = (props) => {
  const history = useHistory()
  const { next, index } = props

  const [dropdownOpen, setDropdownOpen] = useState('')
  const [commentsModal, setCommentsModal] = useState(false)
  const [content, setContent] = useState(
    'Lesson 1 of 3:(1/4)Tuanze na ukweli, Covid-19 ni ugonjwa ambao huambukizwa na virusi vya corona. Ipo duniani mzima ikiwepo Kenya'
  )

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
            <Row className="translate-container">
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
                        <Row className="panel-body">
                          <Col lg="6" md="6" sm="12" xs="12">
                            <div className="translate-titles">Original - English</div>

                            <div className="content-list">
                              <div className="content-form__input-container">
                                <div className="input-middle">
                                  <div className="input">
                                    <Input
                                      type="textarea"
                                      className="form-control"
                                      value="Lesson 1 of 4:(1/1) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                      placeholder="Enter intro: e.g. Well done! Follow this advice if you are sick. Answer 3 questions, then learn tips for your family, your business, and your money."
                                      rows={2}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="input-right">
                                  <span>146/160 Characters</span>
                                </div>
                              </div>
                              <div className="content-list__right">
                                <img
                                  className="content-thumbnail"
                                  src={randomImage}
                                  alt="content thumbnail"
                                />
                              </div>
                            </div>

                            <div className="content-list">
                              <div className="content-form__input-container">
                                <div className="input-middle">
                                  <div className="input">
                                    <Input
                                      type="textarea"
                                      className="form-control"
                                      value="Lesson 1 of 4:(1/1) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                      placeholder="Enter intro: e.g. Well done! Follow this advice if you are sick. Answer 3 questions, then learn tips for your family, your business, and your money."
                                      rows={2}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div className="input-right">
                                  <span>146/160 Characters</span>
                                </div>
                              </div>
                              <div className="content-list__right">
                                <img
                                  className="content-thumbnail"
                                  src={randomImage}
                                  alt="content thumbnail"
                                />
                              </div>
                            </div>
                          </Col>

                          <Col lg="6" md="6" sm="12" xs="12">
                            <div className="translate-titles">Translation - Kiswahili</div>
                            <div className="content-list content-list__right">
                              <div className="content-form__input-container content-form__input-container__right">
                                <div className="input-middle">
                                  <div className="input">
                                    <Input
                                      type="textarea"
                                      className="form-control"
                                      name="msg"
                                      value={content}
                                      onChange={(event) => setContent(event.target.value)}
                                      rows={2}
                                    />
                                  </div>
                                </div>
                                <div className="input-right">
                                  <span>
                                    {content.length}/160 Characters
                                    <img src={socialLogoGrammarly} alt="grammarly icon" />
                                  </span>
                                </div>

                                <i
                                  className="material-icons float-top-right"
                                  onMouseDown={toggleCommentsModal}
                                >
                                  chat
                                </i>
                              </div>
                            </div>

                            <div className="content-list content-list__right">
                              <div className="content-form__input-container content-form__input-container__right">
                                <div className="input-middle">
                                  <div className="input">
                                    <Input
                                      type="textarea"
                                      className="form-control"
                                      name="msg"
                                      value={content}
                                      onChange={(event) => setContent(event.target.value)}
                                      rows={2}
                                    />
                                  </div>
                                </div>
                                <div className="input-right">
                                  <span>
                                    {content.length}/160 Characters
                                    <img src={socialLogoGrammarly} alt="grammarly icon" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
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
                <Button
                  type="button"
                  className="btn btn-primary btn-submit"
                  onClick={() => history.push('/course/review')}
                >
                  SEND APPROVAL
                  <div className="overlap-group">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </div>
                </Button>
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

export default Translate
