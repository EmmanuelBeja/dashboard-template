import React from 'react'

import {
  Collapse,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

const SequenceViewCard = (props) => {
  const { toggle, toggleKey, collapse } = props

  return (
    <div className="tree-sequence__card">
      <div className="tree-list__title">Lesson 1.</div>
      <div className="tree-list__item">
        Facts about covid
        <UncontrolledDropdown>
          <DropdownToggle className="btn-dropdown-toggle">
            <i
              className="material-icons dropdown-toggle"
              id="dropdownMenuPanel"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              more_vert
            </i>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>New Lesson</DropdownItem>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Make a Copy</DropdownItem>
            <DropdownItem>Trash</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="panel-group">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <Button id="collapse1" onClick={() => toggle(toggleKey)} role="button">
                5 Tranings under this
              </Button>
              <i className="material-icons" onMouseDown={() => toggle(toggleKey)}>
                arrow_drop_down
              </i>
            </h4>
          </div>
          <Collapse isOpen={collapse === toggleKey} className="panel-collapse collapse">
            <div className="panel-body">
              <div className="panel-body__header">Lesson 1. Facts about Covid</div>
              <div className="panel-body__content">
                <div className="panel-body__content-row">
                  1/5: Let's start with facts: COVID-19 is the disease caused by the new
                  coronavirus. It is all over the world, including Kenya.
                </div>
                <div className="panel-body__content-row">
                  (3/5) Lesson 1 of 3: Let's start with facts: COVID-19 is the disease caused by the
                  new coronavirus. It is all over the world, including Kenya.
                </div>
                <div className="panel-body__content-row">
                  (4/5) Lesson 1 of 3: Let's start with facts: COVID-19 is the disease caused by the
                  new coronavirus. It is all over the world, including Kenya.
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" />
                      1. Your eyes, nose, and mouth
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" />
                      2. Your food and skin
                    </label>
                  </div>
                </div>
                <div className="panel-body__content-row">
                  Correct! COVID-19 enters your eyes, nose, and mouth from a person who is too close
                  or when you touch your face after an infected surface.
                </div>
                <div className="panel-body__content-row">
                  Incorrect. COVID-19 enters your eyes, nose, and mouth from a person who is too
                  close or when you touch your face after an infected surface.
                </div>
                <div className="panel-body__content-bottom">
                  Enter Menu Text
                  <div className="panel-body__content-bottom__list">
                    <div>1. Next lesson</div>
                    <div>2. Main menu</div>
                  </div>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default SequenceViewCard
