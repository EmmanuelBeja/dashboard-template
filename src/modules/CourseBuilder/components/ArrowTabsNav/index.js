import React from 'react'
import { WithWizard } from 'react-albus'
import ArrowTab from './ArrowTab'

import { draftTabs } from '../../utils/draftTabsData'

const ArrowTabsNav = () => {
  const topNavClick = (stepItem, push) => {
    push(stepItem.id)
  }

  return (
    <div>
      <WithWizard
        render={({ next, previous, step, steps, go, push }) => (
          <div className="nav-wizard">
            {steps.map((stepItem, index) => (
              <ArrowTab
                key={`topNavStep_${index}`}
                tab={draftTabs[index]}
                stepItem={stepItem}
                steps={steps}
                step={step}
                push={push}
                id={index}
                index={index}
                topNavClick={topNavClick}
              />
            ))}
          </div>
        )}
      />
    </div>
  )
}

export default ArrowTabsNav
