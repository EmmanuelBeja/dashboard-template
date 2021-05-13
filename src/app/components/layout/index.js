import React, { useRef } from 'react'

import TopNav from './components/Topnav'
import Sidebar from './components/Sidebar'

import './Layout.scss'

const Layout = ({ children, history }) => {
  const navElRef = useRef(null)
  const handleNavToggle = () => {
    navElRef.current.classList.toggle('nav-is-toggled')
    navElRef.current.classList.toggle('nav-is-default')
  }

  return (
    <div ref={navElRef} className="nav-is-default">
      <TopNav history={history} />
      <Sidebar handleNavToggle={handleNavToggle} />
      <main>
        <div className="main-content">{children}</div>
      </main>
    </div>
  )
}

export default Layout
