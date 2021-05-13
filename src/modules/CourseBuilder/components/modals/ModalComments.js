import React from 'react'

import { Modal, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap'
import ReactTooltip from 'react-tooltip'

const ModalComments = (props) => {
  const { toggle, isOpen, className } = props

  return (
    <Modal isOpen={isOpen} toggle={toggle} className={className}>
      <ModalBody id="modal-comment__body">
        <div className="modal-comment">
          <div className="modal-comment__head">
            <div className="modal-avatar">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE1vyNmUSNwoN--40FthmgQevZcl6z2bLpg&usqp=CAU"
                alt=""
              />
            </div>
            <div className="modal-user">
              Marisa
              <span> 11 hours ago</span>
            </div>
            <div className="modal-resolve">
              <i className="material-icons">more_horiz</i>
              <i
                className="material-icons"
                onMouseDown={toggle}
                data-tip
                data-for="tooltip_resolve"
              >
                check_circle_outline
              </i>

              <ReactTooltip id="tooltip_resolve" aria-haspopup="true">
                <div className="tooltip--custom">
                  <div className="tooltip--custom__content">resolve</div>
                </div>
              </ReactTooltip>
            </div>
          </div>
          <div className="modal-comment__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </div>
        </div>

        <div className="modal-comment">
          <div className="modal-comment__head">
            <div className="modal-avatar">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE1vyNmUSNwoN--40FthmgQevZcl6z2bLpg&usqp=CAU"
                alt=""
              />
            </div>
            <div className="modal-user">
              Marisa
              <span> 11 hours ago</span>
            </div>
            <div className="modal-resolve">
              <i className="material-icons">more_horiz</i>
              <i
                className="material-icons"
                data-toggle="tooltip"
                data-title="resolve"
                data-placement="bottom"
              >
                check_circle_outline
              </i>
            </div>
          </div>
          <div className="modal-comment__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </div>
        </div>
      </ModalBody>
      <ModalFooter id="modal-comment__footer">
        <Form className="modal-comment__reply">
          <FormGroup>
            <Input type="text" className="form-control" placeholder="Reply" />
          </FormGroup>
        </Form>
      </ModalFooter>
    </Modal>
  )
}

export default ModalComments
