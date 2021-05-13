import React from 'react'

import logo from '../../../assets/images/logo.svg'
import './Loading.scss'

const Loading = () => {
  return (
    <div class="loading-screen">
      <div class="loader-wrap">
        <span class="loader-animation">
          <img src={logo} alt="logo" />
        </span>
        <div class="loading-text">
          <span class="letter">L</span>
          <span class="letter">O</span>
          <span class="letter">A</span>
          <span class="letter">D</span>
          <span class="letter">I</span>
          <span class="letter">N</span>
          <span class="letter">G</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
