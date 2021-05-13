import React, { useState, useRef, useEffect } from 'react'

import { Container, Row, Col, Button, Input, FormGroup, Progress, Card, CardBody } from 'reactstrap'
import Back from './Back'

import { userCvUndraw } from '../../../assets/images'
import './UserCv.scss'

const UserCv = ({ previous, next, index, handleModalClose }) => {
  return (
    <Container className="user-cv__container" fluid={true}>
      <Row className="">
        <Col md="7" sm="12" xs="12" className="">
          <UserCvLeft
            previous={previous}
            next={next}
            index={index}
            handleModalClose={handleModalClose}
          />
        </Col>
        <Col md="5" sm="12" xs="12" className="user-cv-right__container">
          <UserCvRight />
        </Col>
      </Row>
    </Container>
  )
}

const UserCvLeft = ({ previous, next, index, handleModalClose }) => {
  const [dragStatus, setDragStatus] = useState('Drag and drop your files here')
  const [uploadFile, setUploadFile] = useState('')
  const [error, setError] = useState(false)
  const imageInputEl = useRef(null)

  useEffect(() => {
    /*
    prevent browser loading local file as new page
    when user drops file anywhere on window.
    */
    window.addEventListener(
      'dragover',
      (e) => {
        e.preventDefault()
      },
      false
    )

    window.addEventListener(
      'drop',
      (e) => {
        e.preventDefault()
      },
      false
    )
  })

  // monitor dragging and droping file
  const onDragEnter = (event) => {
    setDragStatus('File Detected')
    event.preventDefault()
    event.stopPropagation()
  }

  const onDragLeave = (event) => {
    setDragStatus('Drop Here')
    event.preventDefault()
  }

  const onDragOver = (event) => {
    event.preventDefault()
  }

  const onDrop = (event) => {
    event.preventDefault()
    const fileData = fileValidation(event.dataTransfer.files[0])
    setUploadFile(fileData)
  }

  const onImageChange = (e) => {
    e.preventDefault()
    setError(false)
    let fileData
    if (e.target.files[0]) {
      fileData = fileValidation(e.target.files[0])
    } else {
      fileData = ''
      setUploadFile('')
      setDragStatus('No file selected')
    }
    return fileData
  }

  // Check if file is valid
  const fileValidation = (file) => {
    const supportedFilesTypes = ['image/jpeg', 'image/jpg', 'image/png']
    setUploadFile(file)
    const { type } = file
    if (supportedFilesTypes.indexOf(type) > -1) {
      if (file.size < 1048576) {
        return file
      } else {
        setError(true)
        setDragStatus('Please upload an Image file less than 1MB')
      }
    } else {
      setError(true)
      setDragStatus('Please enter an Image file')
      return true
    }
  }

  const handleBrowseFiles = (e) => {
    e.stopPropagation()
  }

  return (
    <Row className="user-cv-left">
      <Back previous={previous} />
      <Col md="12" sm="12" xs="12" className="">
        <h2>Yaay! We’re almost there</h2>
        <p>We need your resume for approval purposes. Please upload your resume</p>
      </Col>
      <Col md="12" sm="12" xs="12" className="">
        <FormGroup>
          <div
            className={`image-upload_container ${uploadFile && !error && 'active-upload'} ${
              error && 'error-upload'
            }`}
            onDragEnter={(event) => onDragEnter(event)}
            onDragLeave={(event) => onDragLeave(event)}
            onDragOver={(event) => onDragOver(event)}
            onDrop={(event) => onDrop(event)}
          >
            <div className="upload-icon">
              <i className="fas fa-cloud-upload-alt" />
            </div>
            <div className="drag-photo_text">{dragStatus}</div>
            <div className="or_text">Or</div>
            <Button
              className="upload-image_button"
              type="button"
              onClick={(e) => handleBrowseFiles(e)}
            >
              Browse files
            </Button>
            <Input
              type="file"
              ref={imageInputEl}
              name="image"
              id="image"
              className="image-input"
              onChange={onImageChange}
            />
            <div>{uploadFile && uploadFile.name}</div>
          </div>
        </FormGroup>
      </Col>
      <Col md="12" sm="12" xs="12" className="">
        <Card className="progress-card__container">
          <CardBody className="progress-card">
            <Row>
              <Col md="2" sm="2" xs="2" className="progress-card__file-icon">
                <i className="far fa-file-alt"></i>
              </Col>
              <Col md="9" sm="9" xs="9" className="progress-card__content">
                <div className="progress-card__content-file-name">
                  John_doe_resume.pdf <i className="fas fa-check-circle"></i>
                </div>
                <div className="progress-card__content-file-size">6MB</div>
              </Col>
              <Col md="1" sm="1" xs="1" className="progress-card__close-icon">
                <i className="far fa-times-circle"></i>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Row>
              <Col md="2" sm="2" xs="2" className="progress-card__file-icon">
                <i className="far fa-file-alt"></i>
              </Col>
              <Col md="9" sm="9" xs="9" className="progress-card__content">
                <div className="progress-card__space-between">
                  <div className="progress-card__content-file-name">John_doe_resume.pdf</div>
                  <div className="progress-card__content-file-size">6MB</div>
                </div>
                <Progress color="success" value="25" />
                <div className="progress-card__flex-end">
                  <div>30 secs left</div>
                </div>
              </Col>
              <Col md="1" sm="1" xs="1" className="progress-card__close-icon">
                <i className="far fa-times-circle"></i>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col md="12" sm="12" xs="12" className="user-cv-left__form-buttons">
        <Button color="link" onClick={() => handleModalClose()}>
          Skip
        </Button>
        <Button
          color="primary"
          onClick={() => {
            handleModalClose()
            window.location.replace('/home')
          }}
        >
          Finish
        </Button>
      </Col>
    </Row>
  )
}

const UserCvRight = () => {
  return (
    <Row className="user-cv-right">
      <Col md="12" sm="12" xs="12" className="">
        <img src={userCvUndraw} className="user-cv-right__svg" alt="resume approval illustration" />
      </Col>
      <Col md="12" sm="12" xs="12" className="">
        Your resume helps us verify your your account and you can start creating content
      </Col>
    </Row>
  )
}

export default UserCv
