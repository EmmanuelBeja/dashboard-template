import React from 'react'

import { Container, Row, Col, Button } from 'reactstrap'
import ReactStars from 'react-rating-stars-component'
import ModalWrapper from '../../../app/components/Modal'

import {
  certificateBlueIcon,
  sortListIcon,
  badgeLicenseBlueIcon,
  messengerFaintIcon,
  whatsappIcon,
  telegramFaintIcon,
  emailFaintIcon,
  dummyUser2,
} from '../../../assets/images'

import './InfoModal.scss'

const InfoModal = ({ isOpen, handleModalClose }) => {
  const ratingChanged = (newRating) => {}

  return (
    <ModalWrapper
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      className="info-modal"
      centered={true}
      title={
        <h4>
          11 Things I Wish I Knew When I Started My Business
          <img src={certificateBlueIcon} alt="certificate icon" />
        </h4>
      }
    >
      <Container className="info-modal__container" fluid={true}>
        <Row className="">
          <Col md="12" sm="12" xs="12" className="info-modal__ratings">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              value={3}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </Col>

          <Col md="12" sm="12" xs="12" className="info-modal__text">
            11 Things I Wish I Knew When I Started My Business11 Things I Wish I Knew When I Started
            My Business11 Things I Wish I Knew When I Started My Business
          </Col>
          <Col md="12" sm="12" xs="12" className="info-modal__details">
            <div className="info-modal__details-lessons">
              <img src={sortListIcon} alt="lessons icon" />8 Lessons
            </div>
            <div className="info-modal__details-review">
              <img src={badgeLicenseBlueIcon} alt="review icon" />
              Reviewed
            </div>
          </Col>
          <Col md="12" sm="12" xs="12" className="info-modal__channels">
            <div>Channels</div>
            <div className="info-modal__channels-icons">
              <div>
                <img src={messengerFaintIcon} alt="messenger icon" />
              </div>
              <div>
                <img src={whatsappIcon} alt="whatsapp icon" />
              </div>
              <div>
                <img src={telegramFaintIcon} alt="telegram icon" />
              </div>
              <div>
                <img src={emailFaintIcon} alt="email icon" />
              </div>
            </div>
          </Col>
          <Col md="12" sm="12" xs="12" className="info-modal__preview-btn">
            <Button>Preview this Course</Button>
          </Col>
          <Col md="12" sm="12" xs="12" className="info-modal__wishlist-button">
            <i className="fas fa-heart" />
            Add to wishlist
          </Col>
          <Col md="12" sm="12" xs="12" className="info-modal__author">
            <img src={dummyUser2} alt="user avatar" />
            Author Yego Kevins
          </Col>
        </Row>
      </Container>
    </ModalWrapper>
  )
}

export default InfoModal
