import React from 'react'

const Telegram = (props) => {
  return (
    <div id="telegram">
      <div className="iphone">
        <div className="iphone-top">
          <span className="camera"></span>
          <span className="sensor"></span>
          <span className="speaker"></span>
        </div>
        <div className="top-bar"></div>
        <div className="iphone-screen">
          <div className="telegramPanel">
            <div className="topBar">
              <div className="rightSide">
                <button className="tbButton otherOptions">
                  <i className="material-icons">more_vert</i>
                </button>
              </div>
              <div className="leftSide">
                <p className="chatName">
                  Chatbot
                  <br />
                  <span>@Chatbot</span>
                </p>
              </div>
            </div>
            <div className="convHistory userBg">
              {/* CONVERSATION GOES HERE! */}
              <div className="msg messageReceived">
                (3/8) Those droplets can travel about 2-6 meters and can enter another persons nose,
                mouth or ears. Continue
                <span className="timestamp">00:00</span>
              </div>
              <div className="msg messageSent">
                A<i className="material-icons readStatus">done_all</i>
                <span className="timestamp">00:01</span>
              </div>
              <div className="msg messageReceived">
                (3/8) Those droplets can travel about 2-6 meters and can enter another persons nose,
                mouth or ears. Continue
                <span className="timestamp">00:02</span>
              </div>
              <div className="msg messageSent">
                B<span className="timestamp">00:02</span>
              </div>
              <div className="msg messageReceived">
                (3/8) Those droplets can travel about 2-6 meters and can enter another persons nose,
                mouth or ears. Continue
                <i className="material-icons readStatus">done</i>
                <span className="timestamp">00:04</span>
              </div>
            </div>
            <div className="replyBar">
              <button className="attach">
                <i className="material-icons d45">attach_file</i>
              </button>
              <input type="text" className="replyMessage" placeholder="Type your message..." />
              <div className="otherTools">
                <button className="toolButtons emoji">
                  <i className="material-icons">face</i>
                </button>
                <button className="toolButtons audio">
                  <i className="material-icons">mic</i>
                </button>
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

export default Telegram
