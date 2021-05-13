import React, { useState } from 'react'

import { Tree, TreeNode } from 'react-organizational-chart'
import SequenceViewCard from './SequenceView.Card'

const SequenceView = (props) => {
  const [collapse, setCollapse] = useState()

  const toggle = (item) => {
    if (item === collapse) {
      setCollapse(null)
      return true
    }

    setCollapse(item)
  }

  return (
    <div className="tree-sequence">
      <Tree
        lineWidth={'2px'}
        lineHeight={'20px'}
        lineColor={'#5395c1'}
        label={<SequenceViewCard toggle={toggle} toggleKey={1} collapse={collapse} />}
      >
        <TreeNode label={<SequenceViewCard toggle={toggle} toggleKey={2} collapse={collapse} />}>
          <TreeNode
            label={<SequenceViewCard toggle={toggle} toggleKey={3} collapse={collapse} />}
          />
        </TreeNode>
      </Tree>
    </div>
  )
}

export default SequenceView
