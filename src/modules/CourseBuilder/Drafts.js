import React, { useState, useEffect } from 'react'

import Layout from '../../app/components/layout'
import { Wizard, Steps, Step } from 'react-albus'
import ArrowTabsNav from './components/ArrowTabsNav'
import ModalComments from './components/modals/ModalComments'
import Draft from './components/Drafts'
import Translate from './components/Translate'

import { draftTabs } from './utils/draftTabsData'
import './CourseBuilder.scss'

const Drafts = (props) => {
  const [componentMap, setComponentMap] = useState([Draft, Draft, Draft, Draft, Draft])
  const [commentsModal, setCommentsModal] = useState(false)
  const [showTranslate, setShowTranslate] = useState(false)

  const toggleCommentsModal = () => setCommentsModal(!commentsModal)

  useEffect(() => {
    if (showTranslate) {
      setComponentMap([Draft, Draft, Draft, Translate, Draft])
    }
  }, [showTranslate])

  return (
    <Layout>
      <div className="page-content__section--one">
        <Wizard>
          <ArrowTabsNav disableNav={false} />
          <div className="left-body">
            <Steps>
              {draftTabs.map((tab, index) => (
                <Step
                  key={index}
                  id={`step${index}`}
                  name={tab.name}
                  render={({ next, previous }) => {
                    const ComponentName = componentMap[index]
                    return (
                      (
                        <ComponentName
                          next={next}
                          previous={previous}
                          index={index}
                          showTranslate={showTranslate}
                          setShowTranslate={setShowTranslate}
                        />
                      ) || tab.name
                    )
                  }}
                />
              ))}
            </Steps>
          </div>
        </Wizard>
      </div>

      <ModalComments toggle={toggleCommentsModal} isOpen={commentsModal} />
    </Layout>
  )
}

export default Drafts
