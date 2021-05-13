import React, { useState } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import Layout from '../../app/components/layout'
import Profile from './components/Profile'
import Content from './components/Content'
import { NewDeveloper } from './components/Modals'

import './Settings.scss'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [newDeveloperModal, setNewDeveloperModal] = useState(false)

  const toggle = (tab) => activeTab !== tab && setActiveTab(tab)
  const toggleNewDeveloperModal = () => setNewDeveloperModal(!newDeveloperModal)

  return (
    <Layout>
      <div className="content-wrapper__profile">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1')
              }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2')
              }}
            >
              Content
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                toggle('3')
              }}
            >
              People
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => {
                toggle('4')
              }}
            >
              Partners
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Profile />
          </TabPane>
          <TabPane tabId="2">
            <Content toggleNewDeveloperModal={toggleNewDeveloperModal} />
          </TabPane>
          <TabPane tabId="3"></TabPane>
          <TabPane tabId="4"></TabPane>
        </TabContent>
      </div>

      {/* modals here */}
      <NewDeveloper toggle={toggleNewDeveloperModal} isOpen={newDeveloperModal} />
    </Layout>
  )
}

export default Settings
