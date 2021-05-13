import React from 'react'

import { Modal, ModalBody } from 'reactstrap'

const ModalShareFeedback = (props) => {
  const { toggle, isOpen, className } = props

  return (
    <>
      {/* Modal shareFeedback */}
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalBody id="modal-comment__body">
          <div id="shareFeedback" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body modal-success__share">
                  <i className="material-icons">check_circle</i>
                  <div className="modal-success__share-message">
                    Success, your feedback has been submitted for 2nd Draft
                  </div>
                  <div className="modal-success__share-info">Go to content review</div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default ModalShareFeedback
