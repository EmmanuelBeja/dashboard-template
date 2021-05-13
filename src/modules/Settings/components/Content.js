import React, { useState } from 'react'

import { Row, Col, Input, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {
  UserColumn,
  PartnerColumn,
  ModuleColumn,
  DetailsColumn,
  StatusColumn,
  ChannelColumn,
  DateSubmittedColumn,
  ActionColumn,
} from './Content.columns'

import { contentData } from './Mocks/contentData'
import classnames from 'classnames'

const Content = (props) => {
  const { toggleNewDeveloperModal } = props
  const [activeTab, setActiveTab] = useState('1')

  const toggle = (tab) => activeTab !== tab && setActiveTab(tab)

  const columns = [
    {
      dataField: 'user',
      text: 'Full Name/Role',
      formatter: (cellContent, row) => <UserColumn row={row} />,
    },
    {
      dataField: 'partner',
      text: 'Partner/Project',
      formatter: (cellContent, row) => <PartnerColumn row={row} />,
    },
    {
      dataField: 'module',
      text: 'Module Name',
      formatter: (cellContent, row) => <ModuleColumn row={row} />,
    },
    {
      dataField: 'details',
      text: 'Details',
      formatter: (cellContent, row) => <DetailsColumn row={row} />,
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true,
      formatter: (cellContent, row) => <StatusColumn row={row} />,
    },
    {
      dataField: 'channel',
      text: 'Channel',
      formatter: (cellContent, row) => <ChannelColumn row={row} />,
    },
    {
      dataField: 'date',
      text: 'Date Submitted',
      formatter: (cellContent, row) => <DateSubmittedColumn row={row} />,
    },
    {
      dataField: 'action',
      text: 'Action',
      formatter: (cellContent, row) => (
        <ActionColumn row={row} toggleNewDeveloperModal={toggleNewDeveloperModal} />
      ),
    },
  ]

  const noDataIndication = () => {
    return (
      <div className="text-center">
        <p>Table is Empty</p>
      </div>
    )
  }

  return (
    <div className="page-content__section--content">
      <Row className="header">
        <Col md="12" sm="12" xs="12" className="header-title">
          Content Reviewer Dashboard
        </Col>
        <Col lg="3" md="12" sm="12" xs="12" className="header-left">
          <span>
            <Input type="select" name="week" id="week">
              <option>Week</option>
              <option>2</option>
              <option>3</option>
            </Input>
          </span>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12" className="header-middle">
          <div className="btn-modal__date-range">
            <i className="material-icons">event</i>
          </div>
          <div className="date-range">
            <i className="fas fa-chevron-left ellipse"></i>
            <div className="">Mar 11 - Mar 19, 2020</div>
            <i className="fas fa-chevron-right ellipse"></i>
          </div>
        </Col>
        <Col lg="5" md="12" sm="12" xs="12" className="header-right">
          <div className="search">
            <Input name="searchKeyword" id="searchKeyword" />
            <span className="search-icon" onClick={(e) => {}}>
              <i className="simple-icon-magnifier" />
            </span>
          </div>
          <div className="">
            <Button
              type="button"
              className="btn btn-primary"
              onClick={() => toggleNewDeveloperModal()}
            >
              NEW ROLE
              <div className="overlap-group">
                <i className="fas fa-plus"></i>
              </div>
            </Button>
          </div>
        </Col>
      </Row>

      <div className="content">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1')
              }}
            >
              Internal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2')
              }}
            >
              External
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="container-sort">
              <div className="container-sort__item">
                <span>Role</span>
                <Input type="select" name="role" id="role">
                  <option>All</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </div>
              <div className="container-sort__item">
                <span>Selector</span>
                <Input type="select" name="team" id="team">
                  <option>All</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </div>
              <div className="container-sort__item">
                <span>Partner</span>
                <Input type="select" name="location" id="location">
                  <option>All</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </div>
              <div className="container-sort__item">
                <span>Assigned</span>
                <Input type="select" name="location" id="location">
                  <option>All</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </div>
            </div>
            <BootstrapTable
              bootstrap4
              keyField="id"
              data={contentData}
              columns={columns}
              pagination={paginationFactory()}
              noDataIndication={noDataIndication}
              striped
              bordered={false}
              wrapperClasses="table-responsive table-striped table-hover"
            />
          </TabPane>
          <TabPane tabId="2"></TabPane>
        </TabContent>
      </div>
    </div>
  )
}

export default Content
