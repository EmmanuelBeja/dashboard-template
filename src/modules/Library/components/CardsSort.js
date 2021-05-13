import React from 'react'

import { Col } from 'reactstrap'

import { searchIcon } from '../../../assets/images'
import './CardsSort.scss'

const CardsSort = (props) => {
  return (
    <Col md="12" sm="12" xs="12" className="cards-sort">
      <div className="cards-sort__search">
        <span className="search__icon" onClick={(e) => {}}>
          <img className="search__icon-img" src={searchIcon} alt="search icon" />
        </span>
      </div>
      <div className="cards-sort__status">
        All Status
        <div className="cards-sort__status-icons">
          <i className="fas fa-angle-up"></i>
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
      <div className="cards-sort__list">
        <i className="fas fa-list"></i>
        12 Records
      </div>
      <div className="cards-sort__grid">
        <i className="fas fa-th-large"></i>
        Grid View
      </div>
    </Col>
  )
}

export default CardsSort
