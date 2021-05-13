import React from 'react'

import { Container, Row, Col, Form, FormGroup, Input, Label, Button, Card } from 'reactstrap'

const Profile = () => {
  return (
    <Container className="page-content__section--profile" fluid={true}>
      <Row>
        <Col lg="4" md="12" sm="12" xs="12">
          <Card className="page-content__section--profile__left">
            <div className="top">
              <div className="top--left">
                <div className="top--left__name">Tim Kamau</div>
                <div className="top--left__title">Content Developer</div>
              </div>
              <div className="top--right">
                <img
                  className="top--right__avatar"
                  src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-144736,resizemode-1,msid-69036751/small-biz/startups/newsbuzz/fraud-is-only-possible-if-user-grants-access-oldrich-mller-coo-anydesk.jpg"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="bottom">
              <div className="bottom--right">
                <Button type="button" className="btn-light btn-plain__active" size="sm">
                  UPLOAD PICTURE
                </Button>
              </div>
              <div className="bottom--left">
                <Button type="button" className="btn-plain__inactive" size="sm">
                  REMOVE PICTURE
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg="8" md="12" sm="12" xs="12">
          <div className="page-content__section--profile__right">
            <Card className="top">
              <div className="top--head">
                Basic Profile
                <span>The information can be edited from yuor profile page</span>
              </div>
              <div className="top--body">
                <Form>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="First Name"
                        />
                        <small id="firstName" className="form-text text-muted">
                          Please specify the first name
                        </small>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder="Last Name"
                        />
                        <small id="firstName" className="form-text text-muted">
                          Please specify the last name
                        </small>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          placeholder="john.doe@mail.com"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          type="text"
                          className="form-control"
                          id="inputNumber"
                          placeholder="Phone Number"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          type="text"
                          className="form-control"
                          id="inputCompany"
                          placeholder="Company"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Ramnicu Valcea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className="top--footer">
                <Button type="button" className="btn-dark-blue" name="button">
                  SAVE SETTINGS
                </Button>
              </div>
            </Card>

            <Card className="bottom">
              <div className="bottom--head">
                Notifications
                <span>Mange the notifications emailing</span>
              </div>
              <Row className="bottom--body">
                <Col md="6">
                  <h3>Notifications</h3>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck1">
                      Email
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck2">
                      Push notifications
                    </Label>
                    <br />
                    <small id="defaultCheck2" className="form-text text-muted">
                      For your mobile or tablet device
                    </small>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck3">
                      Text Messages
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck4">
                      Phone Calls
                    </Label>
                  </div>
                </Col>
                <Col md="6">
                  <h3>Messages</h3>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck1">
                      Email
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck2">
                      Push notifications
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <Label className="form-check-label" htmlFor="defaultCheck3">
                      Text Messages
                    </Label>
                  </div>
                </Col>
              </Row>
              <div className="bottom--footer">
                <Button type="button" className="btn-dark-blue__outline" name="button">
                  SAVE
                </Button>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
