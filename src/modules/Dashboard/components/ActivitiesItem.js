import React from 'react'

const ActivitiesItem = ({ icon, content, timeline, read }) => {
  return (
    <div className="d-flex flex-row">
      <div className="list-item list-item__active">
        <div className="list-item__left">
          <i className="material-icons">{icon}</i>
        </div>
        <div className="list-item__right">
          <div className="list-item__right--top">{content}</div>
          {read && (
            <div className="list-item__right--mid">
              <div className="list-item__right--mid__right">Mark as read</div>
            </div>
          )}
          <div className="list-item__right--bottom">
            <div className="list-item__right--bottom__left">
              <i className="material-icons">schedule</i>
              {timeline}
            </div>
            {read && (
              <div className="list-item__right--bottom__right">
                <i className="material-icons">check_circle</i>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitiesItem
