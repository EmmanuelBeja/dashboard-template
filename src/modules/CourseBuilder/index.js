import React from 'react'

import Layout from '../../app/components/layout'
import { Wizard, Steps, Step } from 'react-albus'
import { Container } from 'reactstrap'
import CreateModuleForm from './CreateModuleForm'
import ContentLoading from './ContentLoading'
import Sequence from './Sequence'
import Simulate from './Simulate'
import Drafts from './Drafts'
import Review from './Review'

import { progressTabs1 as progressTabs } from './utils/progressTabsData'
import './CourseBuilder.scss'

const ContentLoadingWizard = () => {
  const componentMap = [CreateModuleForm, ContentLoading, Sequence, Simulate, Drafts, Review]

  return (
    <Layout>
      <Container>
        <div className="content-wrapper content-wrapper--with-bg">
          <Wizard>
            <Steps>
              {progressTabs.map((tab, index) => (
                <Step
                  key={index}
                  id={`step${index}`}
                  name={tab.name}
                  render={({ next, previous }) => {
                    const ComponentName = componentMap[index]
                    return <ComponentName next={next} previous={previous} /> || tab.name
                  }}
                />
              ))}
            </Steps>
          </Wizard>
        </div>
      </Container>
    </Layout>
  )
}

export default ContentLoadingWizard
