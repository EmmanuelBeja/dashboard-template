import React, { useState } from 'react'

import ContentList from '../ContentList'
import Content from './Content'
import AssessmentQuestion from './AssessmentQuestion'
import SurveyQuestion from './SurveyQuestion'
import FreeResponse from './FreeResponse'

const questionTypes = {
  Content,
  AssessmentQuestion,
  SurveyQuestion,
  FreeResponse,
}

const ContentForm = (props) => {
  const [content, setContent] = useState('Lesson 1 of 4:(1/1)')
  const [questionType, setQuestionType] = useState('Content')
  const [showList, setShowList] = useState(false)

  const TagName = questionTypes[questionType]

  return (
    <>
      {showList && <ContentList content={content} />}
      <TagName
        setQuestionType={setQuestionType}
        setShowList={setShowList}
        setContent={setContent}
        content={content}
      />
    </>
  )
}

export default ContentForm
