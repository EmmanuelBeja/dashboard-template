import React, { useState } from 'react'

import { Button, Label, Input, InputGroup } from 'reactstrap'
import ModalComments from '../../modals/ModalComments'
import QuestionType from '../QuestionType'

import { socialLogoGrammarly, textIndicatorGreen } from '../../../../../assets/images'

const AssessmentQuestion = (props) => {
  const { setQuestionType } = props
  const [commentsModal, setCommentsModal] = useState(false)
  const [content, setContent] = useState('')

  const toggleCommentsModal = () => setCommentsModal(!commentsModal)

  return (
    <>
      <div className="assesment-question">
        <div className="assesment-question__head">
          <div className="assesment-question__head-title"></div>
          <Button className="btn-none assesment-question__head-message__icon">
            <i className="material-icons" onMouseDown={() => toggleCommentsModal()}>
              chat
            </i>
          </Button>
        </div>
        <div className="assesment-question__body">
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
            <div className="checkbox checkbox-answers">
              <Label>
                <Input type="checkbox" value="" />
                Enter Answer 1. e.g. 1. A persistent cough
              </Label>
            </div>
            <div className="checkbox checkbox-answers">
              <Label>
                <Input type="checkbox" value="" />
                Enter Answer 2. e.g. 2. A sore throat
              </Label>
            </div>
            <div className="checkbox checkbox-answers">
              <Label>
                <Input type="checkbox" value="" />
                Enter Answer 4. e.g. 3. Difficulty breathing
              </Label>
            </div>
          </div>
          <div className="sub-title">Answer Response</div>
          <InputGroup>
            <span className="input-group-addon correct-input-group-addon">
              <i className="material-icons">done</i>
              Correct!
            </span>
            <Input
              className="form-control correct-input"
              name="msg"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Insert correct answer e.g Go immediately to the hospital if you have difficulty breathing. For mild symptoms, stay home and rest."
            />
            <div className="input-group-btn character-length correct-input-group-btn">
              <Button className="btn" type="button">
                {content.length}/160 Characters
                <img src={socialLogoGrammarly} alt="grammarly icon" />
              </Button>
            </div>
          </InputGroup>
          <InputGroup>
            <span className="input-group-addon incorrect-input-group-addon">
              <i className="material-icons">close</i>
              Incorrect!
            </span>
            <Input
              className="form-control incorrect-input"
              name="msg"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Insert correct answer e.g Go immediately to the hospital if you have difficulty breathing. For mild symptoms, stay home and rest."
            />
            <div className="input-group-btn character-length incorrect-input-group-btn">
              <Button className="btn" type="button">
                {content.length}/160 Characters
                <img src={socialLogoGrammarly} alt="grammarly icon" />
              </Button>
            </div>
          </InputGroup>
        </div>
        <div className="assesment-question__footer">
          <div className="form-group form-inline">
            <Label htmlFor="sel">Add a Blooms Tag to this Assessment </Label>
            <select className="form-control" id="sel">
              <option>Add Bloom Tags</option>
              <option>Understand</option>
              <option>Remember</option>
              <option>Apply</option>
              <option>Evaluate</option>
              <option>Analyze</option>
            </select>
          </div>
          <Button className="btn-blue btn-semi" type="button" name="button">
            Understand
            <i className="material-icons">close</i>
          </Button>
        </div>
      </div>

      <QuestionType activeQuestion="AssessmentQuestion" setQuestionType={setQuestionType} />
      <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
    </>
  )
}

export default AssessmentQuestion
