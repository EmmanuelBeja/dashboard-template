/* eslint-disable react/no-array-index-key */
import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, Badge, NavbarText } from 'reactstrap'
import Activities from '../../../../modules/Dashboard/components/Activities'

const TopnavNotifications = () => {
  return (
    <NavbarText>
      <UncontrolledDropdown>
        <DropdownToggle color="empty">
          <i className="simple-icon-bell" />
          <Badge className="badge-float" color="danger" pill>
            3
          </Badge>
        </DropdownToggle>

        <DropdownMenu className="mt-3 scroll" right id="notificationDropdown">
          <Activities />
        </DropdownMenu>
      </UncontrolledDropdown>
    </NavbarText>
  )
}

export default TopnavNotifications
