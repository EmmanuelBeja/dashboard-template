import React from 'react'
import { Button } from 'reactstrap'

const ArrowTab = ({ tab, tabs, stepItem, steps, step, push, index, topNavClick }) => {
  const getClassName = (steps, step, index, stepItem, element) => {
    if (steps.indexOf(step) === index) {
      return 'item active'
    }
    // done step
    if (steps.indexOf(step) > index || stepItem.isDone) {
      return 'item doneStep'
    }
    return 'item'
  }

  return (
    <>
      <div
        className={getClassName(steps, step, index, stepItem)}
        onMouseDown={() => topNavClick(stepItem, push)}
      >
        <div className="nav-wedge" />
        <Button className="btn-transparent hidden-xs">
          {tab.name}
          <i className="material-icons">check</i>
        </Button>
        <div className="nav-arrow" />
      </div>
    </>
  )
}

export default ArrowTab
