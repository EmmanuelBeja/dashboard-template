import React, { useState } from 'react'

import { Button, Row, Col } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import MenuView from './components/TreeDiagram/MenuView'
import SequenceView from './components/TreeDiagram/SequenceView'
import TipsCard from './components/TipsCard'

const Sequence = ({ next, previous }) => {
  const [tab, setTab] = useState('SEQUENCE')

  return (
    <div className="page-content__section--one">
      <Row>
        <Col lg="9" md="12" sm="12" xs="12">
          <div className="left">
            <div className="left-header">Content Flow - {tab}</div>
            <div className="left-subheader-right">
              <span
                className="toggle-view toggle-view__left"
                onMouseDown={() => setTab('MENU')}
                data-tip
                data-for="tooltip_toggle"
              >
                <i
                  className="fas fa-bars"
                  style={{
                    color: tab === 'MENU' ? '#5395c1' : 'inherit',
                  }}
                />
              </span>
              <span
                className="toggle-view"
                onMouseDown={() => setTab('SEQUENCE')}
                data-tip
                data-for="tooltip_toggle"
              >
                <i
                  className="fas fa-list-ul"
                  style={{
                    color: tab === 'SEQUENCE' ? '#5395c1' : 'inherit',
                  }}
                />
              </span>
              <ReactTooltip id="tooltip_toggle" aria-haspopup="true">
                <div className="tooltip--custom">
                  <div className="tooltip--custom__content">
                    You can toggle between Menu and Sequence flow of content
                  </div>
                </div>
              </ReactTooltip>
            </div>

            {/* tree diagram start */}
            {tab === 'SEQUENCE' ? <SequenceView /> : <MenuView />}
            {/* tree diagram end */}
          </div>
        </Col>
        <Col lg="3" md="12" sm="12" xs="12">
          {/* right page section */}
          <div className="right">
            <div className="right-top">
              <div className="panel panel-default">
                <div className="panel-body">
                  <Button className="btn btn-primary" onClick={() => next()}>
                    PREVIEW CONTENT
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="right-bottom">
              <TipsCard
                text="This is the flow of your content. You can move the lessons from one position to another."
                buttonText="Next tip"
                buttonClickHandler={() => {}}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Sequence
