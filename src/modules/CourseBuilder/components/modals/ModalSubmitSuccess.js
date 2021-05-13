import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Button } from 'reactstrap'
import ModalWrapper from '../../../../app/components/Modal'

const ModalSubmitSuccess = (props) => {
  const history = useHistory()
  const { toggle, isOpen } = props

  return (
    <>
      {/* Modal shareFeedback */}
      <ModalWrapper isOpen={isOpen} handleModalClose={toggle} className="" centered={true}>
        <Container className="modal-submit-success" fluid={true}>
          <div className="title">Successfully Submitted</div>
          <i className="far fa-check-circle"></i>
          <Button type="button" className="btn-transparent" onClick={() => history.push('/home')}>
            Go to dashboard
          </Button>
        </Container>
      </ModalWrapper>
    </>
  )
}

export default ModalSubmitSuccess
