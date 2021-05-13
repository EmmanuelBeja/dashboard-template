import React from 'react'

const ContentList = (props) => {
  return (
    <div className="content-list">
      <div className="content-form__input-container">
        <div className="input-left">
          <div className="text-indicator">
            <span>1</span>
            <img className="" src="/assets/img/custom/text-indicator-orange.svg" alt="" />
          </div>
          <i className="material-icons">done</i>
        </div>
        <div className="input-middle">
          <div className="input">
            <div className="text-highlight">
              <div className="text-highlight__row1"></div>
              <div className="text-highlight__row2"></div>
            </div>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2">
              {props.content}
            </textarea>
          </div>
        </div>
        <div className="input-right">
          <i className="material-icons" data-toggle="modal" data-target="#myModal">
            chat
          </i>
          <span>
            146/160 Characters
            <img src="/assets/img/custom/grammarly-icon.svg" alt="" />
          </span>
          <div className="edit-content">Edit Content</div>
        </div>
      </div>
      <div className="content-list__right">
        <i className="material-icons close-icon">close</i>
        <img
          className="content-thumbnail"
          src="/assets/img/custom/lesson-image_thumbnail.svg"
          alt="content thumbnail"
        />
        <div className="">
          <div className="tag-primary">Tag</div>
          <div className="tag-subtle">First Message</div>
        </div>
      </div>
    </div>
  )
}

export default ContentList
