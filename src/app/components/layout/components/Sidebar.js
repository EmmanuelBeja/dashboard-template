import React from 'react'

import { Nav, NavItem, NavLink, Button } from 'reactstrap'

import menuItems from './menuConfig'
import { supportSidebarUndraw } from '../../../../assets/images'

const Sidebar = ({ handleNavToggle }) => {
  const currentUrl = window.location.href

  return (
    <aside className="nav-side">
      <Nav className="nav-side-links">
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <NavItem>
              <NavLink
                href={item.to}
                className={
                  currentUrl.includes(item.to) ? 'nav-link__active nav-side-item' : 'nav-side-item'
                }
              >
                <span data-flag={item.id} data-tip={item.label}>
                  {item.icon}
                </span>
                <span className="link-text">{item.label}</span>
              </NavLink>
            </NavItem>
            {item.borderBottom && (
              <NavItem key={item.id} className="nav-item__break">
                <div>
                  <hr />
                </div>
              </NavItem>
            )}
          </React.Fragment>
        ))}

        <NavItem className="nav-item__spaced">
          <NavLink onClick={() => handleNavToggle()} className="nav-side-item">
            <i className="icon material-icons" data-tip="Toggle sidebar">
              view_sidebar
            </i>
            <span className="link-text">Toggle sidebar</span>
          </NavLink>
        </NavItem>
        <NavItem className="nav-item__contact-us-container">
          <div className="nav-item__contact-us">
            <div className="nav-item__contact-us-content">
              <div className="nav-item__contact-us-content__title">Support 24/7</div>
              <div className="nav-item__contact-us-content__text">Contacts us anytime</div>
              <Button>Start</Button>
            </div>
            <img src={supportSidebarUndraw} alt="contact us anytime illustraation" />
          </div>
        </NavItem>
      </Nav>
    </aside>
  )
}

export default Sidebar
