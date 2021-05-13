import React from 'react'

const Messenger = (props) => {
  return (
    <div id="messenger">
      <div className="iphone">
        <div className="iphone-top">
          <span className="camera"></span>
          <span className="sensor"></span>
          <span className="speaker"></span>
        </div>
        <div className="top-bar"></div>
        <div className="iphone-screen">
          <div className="messenger-container">
            <div className="screen">
              <div className="message__list">
                <img
                  className="bot__image"
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                  alt=""
                />
                <div className="message__item message__item--bot">
                  <span className="message message--bot">
                    (3/8) Those droplets can travel about 2-6 meters and can enter another persons
                    nose, mouth or ears. Continue
                  </span>
                </div>
              </div>
              <div className="message__list">
                <div className="message__item message__item--user">
                  <span className="message message--user">A</span>
                </div>
              </div>
              <div className="message__list">
                <img
                  className="bot__image"
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e"
                  alt=""
                />
                <div className="message__item message__item--bot">
                  <span className="message message--bot">
                    (3/8) Those droplets can travel about 2-6 meters and can enter another persons
                    nose, mouth or ears. Continue
                  </span>
                </div>
              </div>
              <div className="message__list">
                <div className="message__item message__item--user">
                  <span className="message message--user">B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <span className="on-off"></span>
          <span className="sleep"></span>
          <span className="up"></span>
          <span className="down"></span>
        </div>
        <div className="bottom-bar"></div>
        <div className="iphone-bottom">
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Messenger
