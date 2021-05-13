import React, { useState } from 'react'

import { Container, Row, Col, FormGroup, Label, Button } from 'reactstrap'
import ModalWrapper from '../../app/components/Modal'
import { UserWelcomeRight } from '../Signup/components/UserWelcome'
import SocialAuth from '../Signup/components/SocialAuth'
import { Formik, Form, Field } from 'formik'
import './Login.scss'

const Login = ({ isOpen, handleModalClose }) => {
  const [email] = useState('')
  const [password] = useState('')

  const initialValues = { email, password }

  const validateEmail = (value) => {
    let error
    if (!value) {
      error = 'Please enter your email address'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }

  const validatePassword = (value) => {
    let error
    if (!value) {
      error = 'Please enter your password'
    } else if (value.length < 4) {
      error = 'Value must be longer than 3 characters'
    }
    return error
  }

  const onUserLogin = (values) => {
    console.log('Values', values)
  }

  return (
    <ModalWrapper
      size="lg"
      isOpen={isOpen}
      handleModalClose={handleModalClose}
      className=""
      centered={true}
    >
      <Container className="user-welcome__container" fluid={true}>
        <Row className="">
          <Col md="7" sm="12" xs="12" className="">
            <Row className="user-welcome-left">
              <Col md="12" sm="12" xs="12" className="user-welcome-left__header">
                <h2>Login</h2>
              </Col>
              <Col md="12" sm="12" xs="12" className="user-welcome-left__form">
                <Formik initialValues={initialValues} onSubmit={onUserLogin}>
                  {({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label for="email">Enter email</Label>
                        <Field className="form-control" name="email" validate={validateEmail} />
                        {errors.email && touched.email && (
                          <div className="invalid-feedback d-block">{errors.email}</div>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Enter Password</Label>
                        <Field
                          className="form-control"
                          type="password"
                          name="password"
                          validate={validatePassword}
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback d-block">{errors.password}</div>
                        )}
                      </FormGroup>
                      <Button color="primary" type="submit">
                        Continue
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
              <Col md="12" sm="12" xs="12" className="">
                <Row className="other-auth-option__container">
                  <Col md="12" sm="12" xs="12" className="other-auth-option">
                    <hr />
                    <span>or signup with</span>
                    <hr />
                  </Col>
                </Row>
                <SocialAuth />
                <div className="text-center">
                  Don’t have an account?
                  <Button color="link" onClick={() => {}}>
                    Signup
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="5" sm="12" xs="12" className="">
            <UserWelcomeRight />
          </Col>
        </Row>
      </Container>
    </ModalWrapper>
  )
}

export default Login
