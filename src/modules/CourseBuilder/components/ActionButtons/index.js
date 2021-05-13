import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import AddLessonInput from '../AddLessonInput'

const ActionButtons = (props) => {
  const [showForm, setShowForm] = useState(false)
  const handleAddLesson = () => setShowForm(!showForm)

  return (
    <>
      {showForm && <AddLessonInput />}
      <Row>
        <Col md="12" className="action-buttons">
          <Button type="button" onClick={() => handleAddLesson()} className="btn btn-navy btn-semi">
            Add a Lesson
            <i className="material-icons">add</i>
          </Button>
          <Button type="button" className="btn btn-navy btn-semi" onClick={() => handleAddLesson()}>
            Add a Quiz
            <i className="material-icons">add</i>
          </Button>
          <Button type="button" className="btn btn-navy btn-semi" onClick={() => handleAddLesson()}>
            Add a Survey
            <i className="material-icons">add</i>
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default ActionButtons
