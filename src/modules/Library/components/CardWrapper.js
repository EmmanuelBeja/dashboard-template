import React, { useState } from 'react'

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  CardSubtitle,
  CardFooter,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'
import InfoModal from './InfoModal'

import {
  libraryUndraw1,
  libraryUndraw2,
  libraryUndraw3,
  badgeLicenseBlueIcon,
  certificateWhiteIcon,
  messengerIcon,
  whatsappIcon,
} from '../../../assets/images'
import './CardWrapper.scss'

const CardWrapper = (props) => {
  const { status, cardTitle, cardSubtitle, cardText } = props
  const [isOpenInfoModal, setIsOpenInfoModal] = useState(false)

  const handleInfoToggle = () => setIsOpenInfoModal(!isOpenInfoModal)

  const images = [libraryUndraw1, libraryUndraw2, libraryUndraw3]

  return (
    <Card className="card-wrapper">
      <InfoModal isOpen={isOpenInfoModal} handleModalClose={handleInfoToggle} />
      <div className="card-wrapper__top" onMouseDown={() => handleInfoToggle()}>
        <div className={`content-status ${status.toLowerCase()}`}>
          <img src={certificateWhiteIcon} alt="certificate icon" />
          {status}
        </div>
        <div className="icon-badge-merit">
          <img src={badgeLicenseBlueIcon} alt="badge merit icon" />
        </div>
        <div className="icon-bell">
          <i className="far fa-bell" />
          <span class="icon-bell__notification"></span>
        </div>
        <CardImg top width="100%" src={images[Math.floor(Math.random() * 3 + 0)]} alt="Card svg" />
      </div>
      <CardBody onMouseDown={() => handleInfoToggle()}>
        <CardTitle tag="h5">{cardTitle}</CardTitle>
        <CardSubtitle>{cardSubtitle}</CardSubtitle>
        <CardText>{cardText}</CardText>
      </CardBody>
      <CardFooter>
        <div className="card-footer__left">
          <div className="icon-messenger">
            <img src={messengerIcon} alt="messenger icon" />
          </div>
          <div className="icon-whatsapp">
            <img src={whatsappIcon} alt="whatsapp icon" />
          </div>
        </div>
        <div className="card-footer__right">
          <UncontrolledDropdown>
            <DropdownToggle className="p-0 center-content" color="empty">
              <i className="fas d-none d-lg-block fa-ellipsis-h" />
            </DropdownToggle>
            <DropdownMenu className="mt-3 align-items-start" right>
              <DropdownItem>Licence this content</DropdownItem>
              <DropdownItem>View revenue generated</DropdownItem>
              <DropdownItem>Invite people to collaborate</DropdownItem>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Make a Copy</DropdownItem>
              <DropdownItem>Trash</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
