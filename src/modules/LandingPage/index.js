import React, { useState } from 'react'

import NavBar from './components/Navbar'
import SectionHeader from './components/SectionHeader'
import SectionRoles from './components/SectionRoles'
import SectionOrganisations from './components/SectionOrganisations'
import SectionMore from './components/SectionMore'
import SectionContact from './components/SectionContact'
import SignupModal from '../Signup'
import LoginModal from '../Login'

import './LandingPage.scss'

const LandingPage = () => {
  const [isOpenSignupModal, setIsOpenSignupModal] = useState(false)
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false)

  const handleSignupToggle = () => setIsOpenSignupModal(!isOpenSignupModal)

  const handleLoginToggle = () => setIsOpenLoginModal(!isOpenLoginModal)

  return (
    <>
      <NavBar handleSignupToggle={handleSignupToggle} handleLoginToggle={handleLoginToggle} />
      <SectionHeader handleSignupToggle={handleSignupToggle} />

      <SectionRoles handleSignupToggle={handleSignupToggle} />

      <SectionOrganisations />

      <SectionMore />

      <SectionContact />

      <SignupModal isOpen={isOpenSignupModal} handleModalClose={handleSignupToggle} />
      <LoginModal isOpen={isOpenLoginModal} handleModalClose={handleLoginToggle} />
    </>
  )
}

export default LandingPage
