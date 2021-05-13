import React from 'react'

import { Wizard, Steps, Step } from 'react-albus'
import ModalWrapper from '../../app/components/Modal'
import UserWelcome from './components/UserWelcome'
import UserAccountSetup from './components/UserAccountSetup'
import UserExpertise from './components/UserExpertise'
import UserCv from './components/UserCv'

import './Signup.scss'

const Signup = ({ isOpen, handleModalClose }) => {
  const componentMap = [UserWelcome, UserAccountSetup, UserExpertise, UserCv]

  return (
    <ModalWrapper
      size="lg"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      className=""
      centered={true}
    >
      <Wizard>
        <Steps>
          {componentMap.map((item, index) => (
            <Step
              key={index}
              id={`step${index}`}
              render={({ next, previous }) => {
                const ComponentName = item
                return (
                  <ComponentName
                    next={next}
                    previous={previous}
                    index={index}
                    handleModalClose={handleModalClose}
                  />
                )
              }}
            />
          ))}
        </Steps>
      </Wizard>
    </ModalWrapper>
  )
}

export default Signup
