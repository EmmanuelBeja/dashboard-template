import React, { useState } from 'react'

import { Container } from 'reactstrap'
import Layout from '../../app/components/layout'

import './CourseBuilder.scss'

const Review = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1300)

  return (
    <Layout>
      <Container>
        <div className="content-wrapper content-wrapper--with-bg">
          <div className="content-success__container">
            <div className="content-success__icon">
              {loading ? (
                <div className="loading"></div>
              ) : (
                <>
                  <img
                    className="check-icon"
                    src="/assets/img/custom/check-green-icon.svg"
                    alt=""
                  />
                  <img className="" src="/assets/img/custom/success.svg" alt="" />
                </>
              )}
            </div>
            <div className="content-success__message">
              {loading
                ? 'Creating content variable'
                : 'Success. Your content has been submitted for Final approval. You will be notified within 2 Days.'}
            </div>
            {!loading && (
              <div className="content-success__footer">
                <div className="content-success__footer-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => window.location.replace('/course/builder')}
                  >
                    CREATE NEW CONTENT
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => window.location.replace('/home')}
                  >
                    GO TO DASHBOARD
                    <div className="overlap-group">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
                  </button>
                </div>
                <div
                  className="content-success__footer-info"
                  onMouseDown={() => window.location.replace('/content-loading/progress')}
                >
                  Create a <span>variation</span> on this?
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Review
