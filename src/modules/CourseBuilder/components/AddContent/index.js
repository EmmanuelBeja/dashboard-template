import React, { useState, useEffect } from 'react'

import { Button } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import ContentForm from '../ContentForm'

const AddContent = ({ showFormProgrammatically }) => {
  const [showForm, setShowForm] = useState(false)
  const toggleForm = () => setShowForm(!showForm)

  useEffect(() => {
    setShowForm(showFormProgrammatically)
  }, [showFormProgrammatically])

  return (
    <>
      {showForm ? (
        <ContentForm />
      ) : (
        <div className="add-button-container">
          <Button
            className="btn btn-dark btn-ellipsis"
            id="add-button"
            onClick={() => toggleForm()}
            data-tip
            data-for="tooltip_add"
          >
            <ReactTooltip id="tooltip_add" aria-haspopup="true">
              <div className="tooltip--custom">
                <div className="tooltip--custom__content">Start by adding content here</div>
                <div className="tooltip--custom__footer">
                  <Button className="btn-ok">Got it</Button>
                </div>
              </div>
            </ReactTooltip>
            <i className="material-icons">add</i>
          </Button>
          Add content here
        </div>
      )}
    </>
  )
}

export default AddContent
