import React from 'react'

import { Modal, ModalHeader, ModalBody } from 'reactstrap'

const ModalWrapper = ({ size, isOpen, children, title, handleModalClose, className, centered }) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={(e) => handleModalClose(e)}
      className={className}
      centered={centered}
      size={size}
    >
      {title && <ModalHeader toggle={handleModalClose}>{title}</ModalHeader>}
      <ModalBody>{children}</ModalBody>
    </Modal>
  )
}

export default ModalWrapper
