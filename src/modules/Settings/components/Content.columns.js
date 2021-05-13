import React from 'react'

import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import ReactTooltip from 'react-tooltip'

const UserColumn = ({ row }) => {
  return (
    <div className="">
      {row.badge === 'Reviewed' && <div className="badge-half user-primary">Reviewed</div>}
      {row.badge === 'Unreviewed' && <div className="badge-half user-danger">Unreviewed</div>}
      {row.badge === 'New Content' && <div className="badge-half user-success">New Content</div>}
      <div className="name-row user-primary__row">
        <div className="name-row--left">
          <img className="ellipse" src={row.userImage} alt="ellipse" />
        </div>
        <div className="name-row--right">
          <div className="title">{row.userName}</div>
          <div className="sub-title">{row.userTitle}</div>
        </div>
      </div>
    </div>
  )
}

const PartnerColumn = ({ row }) => {
  return (
    <div className="custom-td flex-column justify-content__center">
      {row.partners.map((partner, idx) => (
        <div key={idx}>{partner}</div>
      ))}
    </div>
  )
}

const ModuleColumn = ({ row }) => {
  return <div className="custom-td flex-column justify-content__center">{row.modules}</div>
}

const DetailsColumn = ({ row }) => {
  return (
    <div className="custom-td flex-column justify-content__center">
      <div className="">Lessons: {row.lessons}</div>
      <div className="">Language: {row.language}</div>
      <div className="">Translation: {row.translation}</div>
    </div>
  )
}

const StatusColumn = ({ row }) => {
  return (
    <div className="custom-td flex-column justify-content__center">
      {row.status === '1st Draft' && <span className="badge-half warning">1st Draft</span>}
      {row.status === '2nd Draft' && <span className="badge-half primary">2nd Draft</span>}
      {row.status === 'Final Draft' && <span className="badge-half success">Final Draft</span>}
    </div>
  )
}

const ChannelColumn = ({ row }) => {
  return (
    <div className="custom-td social-stack flex-center">
      <span className={row.messenger ? 'active-messenger' : ''}>
        <i className="fab fa-facebook-messenger"></i>
      </span>
      <span className={row.whatsapp ? 'active-whatsapp' : ''}>
        <i className="fab fa-whatsapp"></i>
      </span>
      <span className={row.telegram ? 'active-telegram' : ''}>
        <i className="fab fa-telegram-plane"></i>
      </span>
      <span className={row.email ? 'active-email' : ''}>
        <i className="fas fa-envelope"></i>
      </span>
    </div>
  )
}

const DateSubmittedColumn = ({ row }) => {
  return (
    <>
      {row.date.status === 'now' && (
        <div className="custom-td flex-column justify-content__center text-color__time-now">
          {' '}
          {row.date.label}
        </div>
      )}
      {row.date.status === 'recent' && (
        <div className="custom-td flex-column justify-content__center text-color__time-now">
          {' '}
          {row.date.label}
        </div>
      )}
      {row.date.status === 'old' && (
        <div className="custom-td flex-column justify-content__center text-color__time-now">
          {' '}
          {row.date.label}
        </div>
      )}
    </>
  )
}

const ActionColumn = ({ row, toggleNewDeveloperModal, setDropdownOpen, dropdownOpen }) => {
  return (
    <div className="custom-td flex-center justify-content__center">
      <div className="custom-td flex-center">
        <Button
          type="button"
          className="btn btn-primary btn-review"
          onClick={() => toggleNewDeveloperModal()}
        >
          Review
          <div className="overlap-group">
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
        </Button>
        <ReactTooltip id={`tooltip-${row.id}`} aria-haspopup="true">
          <div className="tooltip--custom">
            <div className="tooltip--custom__head">
              <i className="material-icons">block</i>
              Helpul tips
            </div>
            <div className="tooltip--custom__content">
              This is an admin page, here you can review, approve, assign content to a reviewer, or
              a translator. If you have been assigned content for review you will see your content
              on this page.
            </div>
          </div>
        </ReactTooltip>
      </div>
      <UncontrolledDropdown>
        <DropdownToggle className="btn-transparent">
          <i className="material-icons more_vert">more_vert</i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>New Lesson</DropdownItem>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Make a Copy</DropdownItem>
          <DropdownItem>Trash</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}

export {
  UserColumn,
  PartnerColumn,
  ModuleColumn,
  DetailsColumn,
  StatusColumn,
  ChannelColumn,
  DateSubmittedColumn,
  ActionColumn,
}
