import React from 'react'

import { Row, Col, Button } from 'reactstrap'

import { socialLogoGoogle, socialLogoLinkedIn, socialLogoTwitter } from '../../../assets/images'
import './SocialAuth.scss'

const SocialAuth = () => {
  const buttonsData = [
    {
      icon: socialLogoGoogle,
      label: 'Google',
      handleClick: () => {},
    },
    {
      icon: socialLogoLinkedIn,
      label: 'LinkedIn',
      handleClick: () => {},
    },
    {
      icon: socialLogoTwitter,
      label: 'Twitter',
      handleClick: () => {},
    },
  ]
  return (
    <Row className="social-auth__container">
      <Col md="12" sm="12" xs="12" className="social-auth">
        {buttonsData.map((item) => (
          <Button outline onClick={() => item.handleClick()} className="social-auth__button">
            <img src={item.icon} className="" alt={`Authentication using ${item.label}`} />
            {item.label}
          </Button>
        ))}
      </Col>
    </Row>
  )
}

export default SocialAuth
