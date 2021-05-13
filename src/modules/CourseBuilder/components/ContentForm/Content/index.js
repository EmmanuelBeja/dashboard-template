import React, { useState } from 'react'

import ReactTooltip from 'react-tooltip'
import { Button, Input } from 'reactstrap'
import ModalComments from '../../modals/ModalComments'
import ModalUploadFile from '../../modals/ModalUploadFile'
import QuestionType from '../QuestionType'

import { socialLogoGrammarly, textIndicatorGreen } from '../../../../../assets/images'

const Content = (props) => {
  const { setQuestionType, setShowList, setContent, content } = props

  const [commentsModal, setCommentsModal] = useState(false)
  const [uploadModal, setUploadModal] = useState(false)

  const toggleCommentsModal = () => setCommentsModal(!commentsModal)
  const toggleUploadModal = () => setUploadModal(!uploadModal)

  return (
    <>
      <div className="content-form">
        <div className="content-form__left">
          <div className="content-form__input-container">
            <div className="input-left">
              <div className="text-indicator">
                <span>1</span>
                <img className="" src={textIndicatorGreen} alt="" />
              </div>
              <i className="material-icons">done</i>
            </div>
            <div className="input-middle">
              <div className="input" data-for="tooltip_form">
                <ReactTooltip id="tooltip_form" aria-haspopup="true">
                  <div className="tooltip--custom">
                    <div className="tooltip--custom__head">Content Creation</div>
                    <div className="tooltip--custom__content">
                      Start by typing or pasting your content. Remember. We save your work
                      automatically :)
                    </div>
                    <div className="tooltip--custom__footer">
                      <i className="material-icons">block</i>
                      Dismiss
                    </div>
                  </div>
                </ReactTooltip>
                {/*
                  <div className="text-highlight">
                    <div className="text-highlight__row1"></div>
                    <div className="text-highlight__row2"></div>
                  </div>
                */}

                <Input
                  type="textarea"
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      setShowList(true)
                    }
                  }}
                  rows={2}
                />
                <div className="input-highlight">{content.replace(/ /g, '\u00a0')}</div>
              </div>
            </div>
            <div className="input-right">
              <i className="material-icons" onMouseDown={() => toggleCommentsModal()}>
                chat
              </i>
              <span>
                {content.length}/160 Characters
                <img src={socialLogoGrammarly} alt="grammarly icon" />
              </span>
            </div>
          </div>

          <QuestionType activeQuestion="Content" setQuestionType={setQuestionType} />
        </div>
        <div className="content-form__right">
          <Button name="button" className="btn-blue__light" onClick={() => toggleUploadModal()}>
            <i className="material-icons">insert_photo</i>
            Add rich media
          </Button>
          <div className="">
            <div className="tag-primary">Tag</div>
            <div className="tag-subtle">First Message</div>
          </div>
        </div>

        <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
        <ModalUploadFile toggle={toggleUploadModal} isOpen={uploadModal} />
      </div>
    </>
  )
}

export default Content
