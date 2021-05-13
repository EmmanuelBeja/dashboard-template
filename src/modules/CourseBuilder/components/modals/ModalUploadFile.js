import React from 'react'

import { Modal, ModalBody, Button } from 'reactstrap'

const ModalUploadFile = (props) => {
  const { toggle, isOpen, className } = props

  return (
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
      <ModalBody>
        <div className="modal-upload">
          <div className="modal-upload__form">
            <span className="material-icons">backup</span>
            <div className="modal-upload__form-placeholder">
              Drag and drop here or <span>browse</span>
            </div>
          </div>
          <div className="modal-upload__grid">
            <div className="modal-upload__grid-head">Search our Media library</div>
            <div className="modal-upload__grid-content">
              <div className="grid-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsJoGKlOJnxl-GNgfUtluGobgx_M8JBdsng&usqp=CAU"
                  alt="video upload"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://img-global.cpcdn.com/recipes/804ee7a9c119ee09/751x532cq70/random-fruit-smoothie-recipe-main-photo.jpg"
                  alt="video upload"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsJoGKlOJnxl-GNgfUtluGobgx_M8JBdsng&usqp=CAU"
                  alt="video upload"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://longboardingnation.com/wp-content/uploads/2016/11/hard-longboarding.jpg"
                  alt="video upload"
                />
              </div>
              <div className="grid-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsJoGKlOJnxl-GNgfUtluGobgx_M8JBdsng&usqp=CAU"
                  alt="video upload"
                />
              </div>
            </div>
          </div>

          <div className="modal-upload__footer">
            <Button type="button" className="btn-navy btn-semi" name="button">
              Upload
            </Button>
            <Button
              type="button"
              className="btn-plain__inactive"
              name="button"
              onClick={() => toggle()}
            >
              Or Cancel
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ModalUploadFile
