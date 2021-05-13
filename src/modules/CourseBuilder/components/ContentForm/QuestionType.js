import React from 'react'

import { Button } from 'reactstrap'
import ReactTooltip from 'react-tooltip'

const QuestionType = (props) => {
  const { setQuestionType, activeQuestion } = props
  return (
    <div className="content-form__input-bottom">
      <div className="input-button">
        <Button className="btn btn-navy btn-ellipsis" data-tip data-for="tooltip_add_question">
          <i className="material-icons">add</i>
        </Button>
        <ReactTooltip id="tooltip_add_question" aria-haspopup="true">
          <div className="tooltip--custom">
            <div className="tooltip--custom__content">Start by adding content here</div>
            <div className="tooltip--custom__footer">
              <Button className="btn-ok">Got it</Button>
            </div>
          </div>
        </ReactTooltip>
      </div>
      <div className="input-addon">
        <Button
          className={`btn-transparent addon-item ${
            activeQuestion === 'Content' && 'addon-item-active'
          } `}
          onMouseDown={() => setQuestionType('Content')}
        >
          <i className="material-icons">insert_comment</i>
          <span>+ Insert Content</span>
        </Button>
        <Button
          className={`btn-transparent addon-item ${
            activeQuestion === 'AssessmentQuestion' && 'addon-item-active'
          } `}
          onMouseDown={() => setQuestionType('AssessmentQuestion')}
        >
          <i className="material-icons">live_help</i>
          <span>+Assessment question</span>
        </Button>
        <Button
          className={`btn-transparent addon-item ${
            activeQuestion === 'SurveyQuestion' && 'addon-item-active'
          } `}
          onMouseDown={() => setQuestionType('SurveyQuestion')}
        >
          <i className="material-icons">spellcheck</i>
          <span>+ Insert survey question</span>
        </Button>
        <Button
          className={`btn-transparent addon-item ${
            activeQuestion === 'FreeResponse' && 'addon-item-active'
          } `}
          onMouseDown={() => setQuestionType('FreeResponse')}
        >
          <i className="material-icons">touch_app</i>
          <span>+Create a free response</span>
        </Button>
      </div>
    </div>
  )
}

export default QuestionType
