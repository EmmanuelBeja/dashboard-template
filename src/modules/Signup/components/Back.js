import React from 'react'

import { Button } from 'reactstrap'

import './Back.scss'

const Back = ({ previous, previousUrl }) => {
  const handlePrevious = () => window.location.replace(previousUrl)

  return (
    <div className="back">
      <Button
        color="link"
        onClick={() => {
          previousUrl ? handlePrevious() : previous()
        }}
      >
        <i className="fas fa-long-arrow-alt-left" />
      </Button>
    </div>
  )
}

export default Back
