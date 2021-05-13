import React, { useState } from 'react'

import { Button, FormGroup, InputGroup, Label, Input } from 'reactstrap'
import ModalComments from '../../modals/ModalComments'
import QuestionType from '../QuestionType'

import { socialLogoGrammarly, textIndicatorGreen } from '../../../../../assets/images'

const SurveyQuestion = (props) => {
  const { setQuestionType } = props
  const [commentsModal, setCommentsModal] = useState(false)
  const [content, setContent] = useState('')

  const toggleCommentsModal = () => setCommentsModal(!commentsModal)

  return (
    <>
      <div className="survey-question">
        <div className="survey-question__head">
          <div className="survey-question__head-title"></div>
          <Button className="btn-none survey-question__head-message__icon">
            <i className="material-icons" onMouseDown={() => toggleCommentsModal()}>
              chat
            </i>
          </Button>
        </div>
        <div className="survey-question__body">
          <InputGroup>
            <span className="input-group-addon">
              <i className="material-icons icon-absolute">search</i>
              <img src={textIndicatorGreen} alt="" />
            </span>
            <Input
              className="form-control"
              name="msg"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Enter intro: e.g. Well done! Follow this advice if you are sick. Answer 3 questions, then learn tips for your family, your business, and your money."
            />
            <div className="input-group-btn character-length">
              <Button className="btn btn-default" type="button">
                {content.length}/160 Characters
                <img src={socialLogoGrammarly} alt="grammarly icon" />
              </Button>
            </div>
          </InputGroup>
          <div className="">
            <Button className="btn btn-primary">
              <div className="overlap-group">
                <i className="fas fa-plus"></i>
              </div>
              Add Answers
            </Button>
          </div>

          <div className="sub-title">Correct Answer</div>
          <div>
            <InputGroup>
              <Input
                className="form-control"
                name="msg"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Enter Answer 1. e.g.  1. Very satisfied"
              />
              <div className="input-group-btn character-length">
                <Button className="btn btn-default" type="button">
                  {content.length}/160 Characters
                  <img src={socialLogoGrammarly} alt="grammarly icon" />
                </Button>
              </div>
            </InputGroup>
            <InputGroup>
              <Input
                className="form-control"
                name="msg"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Enter Answer 2. e.g.  2. A little satisfied"
              />
              <div className="input-group-btn character-length">
                <Button className="btn btn-default" type="button">
                  {content.length}/160 Characters
                  <img src={socialLogoGrammarly} alt="grammarly icon" />
                </Button>
              </div>
            </InputGroup>
            <InputGroup>
              <Input
                className="form-control"
                name="msg"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Enter Answer 3. e.g.  3. Dissatisfied"
              />
              <div className="input-group-btn character-length">
                <Button className="btn btn-default" type="button">
                  {content.length}/160 Characters
                  <img src={socialLogoGrammarly} alt="grammarly icon" />
                </Button>
              </div>
            </InputGroup>
            <InputGroup>
              <Input
                className="form-control"
                name="msg"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Enter Answer 4. e.g.  4. Very dissatisfied"
              />
              <div className="input-group-btn character-length">
                <Button className="btn btn-default" type="button">
                  {content.length}/160 Characters
                  <img src={socialLogoGrammarly} alt="grammarly icon" />
                </Button>
              </div>
            </InputGroup>
          </div>
        </div>
        <div className="survey-question__footer">
          <FormGroup className="form-inline">
            <Label htmlFor="sel">Add a Blooms Tag to this Assessment </Label>
            <Input type="select" className="form-control" id="sel">
              <option>Add Bloom Tags</option>
              <option>Understand</option>
              <option>Remember</option>
              <option>Apply</option>
              <option>Evaluate</option>
              <option>Analyze</option>
            </Input>
          </FormGroup>
          <Button className="btn-blue btn-semi" type="button" name="button">
            Satisfaction score question
            <i className="material-icons">close</i>
          </Button>
        </div>
      </div>

      <QuestionType activeQuestion="SurveyQuestion" setQuestionType={setQuestionType} />
      <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
    </>
  )
}

export default SurveyQuestion
