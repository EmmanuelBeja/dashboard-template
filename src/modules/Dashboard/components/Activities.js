import React, { useState } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import ActivitiesItem from './ActivitiesItem'

import activities from './activitiesDummyData'
import './Activities.scss'

const Activities = () => {
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab) => activeTab !== tab && setActiveTab(tab)
  return (
    <>
      <div className="dropdown-header">
        <div className="dropdown-header__top">
          <div className="dropdown-header__top--title">Activities</div>
          <div className="dropdown-header__top--icon">
            <span className="material-icons">error_outline</span>
          </div>
        </div>
        <div className="dropdown-header__bottom">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1')
                }}
              >
                VIEW ALL
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2')
                }}
              >
                APPROVALS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3')
                }}
              >
                COMMENTS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => {}}>
                <span className="badge">Clear All</span>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="list">
            {activities.map((notification, index) => (
              <ActivitiesItem key={index} {...notification} />
            ))}
          </div>
        </TabPane>
        <TabPane tabId="2">Approvals</TabPane>
        <TabPane tabId="3">Comments</TabPane>
      </TabContent>
    </>
  )
}

export default Activities
