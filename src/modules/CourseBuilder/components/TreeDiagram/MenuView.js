import React, { useState } from 'react'

// import { Collapse, Button } from 'reactstrap';
import { Tree, TreeNode } from 'react-organizational-chart'
import { Root, MenuViewCard } from './MenuView.Cards'

const MenuView = (props) => {
  const [collapse, setCollapse] = useState()

  const toggle = (item) => {
    if (item === collapse) {
      setCollapse(null)
      return true
    }

    setCollapse(item)
  }

  return (
    <div className="tree-menu">
      <Tree
        lineWidth={'2px'}
        lineHeight={'20px'}
        lineColor={'#5395c1'}
        lineBorderRadius={'10px'}
        label={<Root />}
      >
        <TreeNode
          label={<MenuViewCard toggle={toggle} toggleKey={1} collapse={collapse} />}
        ></TreeNode>
        <TreeNode
          label={<MenuViewCard toggle={toggle} toggleKey={2} collapse={collapse} />}
        ></TreeNode>
        <TreeNode
          label={<MenuViewCard toggle={toggle} toggleKey={3} collapse={collapse} />}
        ></TreeNode>
      </Tree>
    </div>
  )
}

export default MenuView
