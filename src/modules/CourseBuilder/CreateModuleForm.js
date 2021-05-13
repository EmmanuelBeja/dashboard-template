import React from 'react'

import { Row, Col, Button, Form, FormGroup, InputGroup, Label, Input } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import TipsCard from './components/TipsCard'

import { lessons } from './utils/lessonsData'

const CreateModuleForm = ({ next, previous }) => {
  return (
    <div className="page-content__section--one">
      <Row>
        <Col lg="9" md="12" sm="12" xs="12">
          <Form>
            <div className="left">
              <div className="left-header">Create your Content Module</div>
              <Row>
                <Col md="6">
                  <Label data-tip data-for="tooltip_sector">
                    Sector
                  </Label>
                  <ReactTooltip id="tooltip_sector" aria-haspopup="true">
                    <div className="tooltip--custom">
                      <div className="tooltip--custom__content">
                        A sector is a general area of practise you want to create content on.
                      </div>
                    </div>
                  </ReactTooltip>
                  <FormGroup className="section--bottom__left--badges">
                    <Input type="select" className="form-control">
                      <option>Agriculture</option>
                      <option>Consumer Goods</option>
                      <option>Education</option>
                      <option>Energy</option>
                      <option>Entrepreneurship</option>
                      <option>Financial literacy</option>
                      <option>Financial Services</option>
                      <option>Governance</option>
                      <option>Health</option>
                      <option>Hospitality</option>
                      <option>Humanitarian</option>
                      <option>Other</option>
                    </Input>
                  </FormGroup>

                  <Label data-tip data-for="tooltip_module">
                    Course Name
                  </Label>
                  <ReactTooltip id="tooltip_module" aria-haspopup="true">
                    <div className="tooltip--custom">
                      <div className="tooltip--custom__content">
                        A module is the subject matter you want to create content on.
                      </div>
                    </div>
                  </ReactTooltip>
                  <FormGroup className="section--bottom__left--badges">
                    <Input type="text" className="form-control" placeholder="COVID-19" />
                  </FormGroup>

                  <Label data-tip data-for="tooltip_lessons">
                    Number of Lessons
                  </Label>
                  <ReactTooltip id="tooltip_lessons" aria-haspopup="true">
                    <div className="tooltip--custom">
                      <div className="tooltip--custom__content">
                        Lessons will contain trainings. Eg Covid-19 Diagnosis, Prevention.. etc
                      </div>
                    </div>
                  </ReactTooltip>
                  <FormGroup className="section--bottom__left--badges">
                    <Input type="number" className="form-control" />
                  </FormGroup>

                  <Label data-tip data-for="tooltip_lesson_titles">
                    Lesson titles
                  </Label>
                  <ReactTooltip id="tooltip_lesson_titles" aria-haspopup="true">
                    <div className="tooltip--custom">
                      <div className="tooltip--custom__content">
                        Lessons will contain trainings. Eg Covid-19 Diagnosis, Prevention.. etc
                      </div>
                    </div>
                  </ReactTooltip>
                  <InputGroup className="section--bottom__left--badges">
                    <Input
                      type="text"
                      className="form-control form-border__bottom"
                      placeholder="Add lessons title here"
                    />
                    <div className="input-group-btn">
                      <Button type="button" className="btn-blue btn-ellipsis">
                        <i className="material-icons">add</i>
                      </Button>
                    </div>
                  </InputGroup>
                  <div className="list-lessons">
                    {lessons.map((lesson, idx) => (
                      <div className="list-lessons__item">
                        {idx}. {lesson.title}
                        <i className="material-icons">create</i>
                      </div>
                    ))}
                  </div>
                </Col>

                <Col md="6">
                  <Label>Course Description</Label>
                  <FormGroup>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter module description"
                    />
                  </FormGroup>

                  <Label>Channel</Label>
                  <FormGroup className="preview-checkbox">
                    <Label className="checkbox-inline">
                      <Input type="checkbox" value="" />
                      SMS
                    </Label>
                    <Label className="checkbox-inline">
                      <Input type="checkbox" value="" />
                      whatsApp
                    </Label>
                    <Label className="checkbox-inline">
                      <Input type="checkbox" value="" />
                      Telegram
                    </Label>
                    <Label className="checkbox-inline">
                      <Input type="checkbox" value="" />
                      Messenger
                    </Label>
                  </FormGroup>

                  <div className="create-module_btn-next__container">
                    <Button type="button" className="btn btn-primary" onClick={() => next()}>
                      NEXT STEP
                      <div className="overlap-group">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </div>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Form>
        </Col>
        <Col lg="3" md="12" sm="12" xs="12">
          <div className="right">
            <TipsCard
              text="This is the first step to creating a course. You can still edit this course details later."
              buttonText="Next tip"
              buttonClickHandler={() => {}}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CreateModuleForm
