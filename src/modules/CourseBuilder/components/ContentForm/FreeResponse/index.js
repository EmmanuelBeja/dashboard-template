import React, { useState } from 'react'

import { Button, InputGroup, Input } from 'reactstrap'
import ModalComments from '../../modals/ModalComments'
import QuestionType from '../QuestionType'

import { socialLogoGrammarly, textIndicatorGreen } from '../../../../../assets/images'

const FreeResponse = (props) => {
  const { setQuestionType } = props
  const [commentsModal, setCommentsModal] = useState(false)
  const [content, setContent] = useState('')

  const toggleCommentsModal = () => setCommentsModal(!commentsModal)

  return (
    <>
      <div className="freeresponse-question__container">
        <div className="freeresponse-question">
          <div className="freeresponse-question__head">
            <div className="freeresponse-question__head-title"></div>
            <Button className="btn-none freeresponse-question__head-message__icon">
              <i className="material-icons" onMouseDown={() => toggleCommentsModal()}>
                chat
              </i>
            </Button>
          </div>
          <div className="freeresponse-question__body">
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
          </div>
        </div>

        <QuestionType activeQuestion="FreeResponse" setQuestionType={setQuestionType} />
        <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
      </div>
    </>
  )
}

export default FreeResponse
