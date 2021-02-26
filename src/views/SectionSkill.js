/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Progress
} from "reactstrap";

function SectionSkill() {
  return (
    <>
      <div className="section section-buttons" id="skill">
        <Container>
          <Col md="12">
            <div className="title">
              <h2>Skills</h2>
            </div>
          </Col>
          {/* Backend */}
          <Card>
            <CardHeader>Programmation</CardHeader>
            <CardBody>
            <Row>
              
            <Col md="6">
                <div className="title">
                  <h3>Backend</h3>
                </div>
                <Row style={{ marginTop: '5px' }}>
                  <Col className="text-center">
                    <img
                    alt="Spring"
                    className="img-rounded img-responsive"
                    src={require("assets/img/spring.png")}
                    style={{ marginTop: '5px' }}
                    />
                  </Col>
                  <Col xs={10}>
                    <Row xs={4}>
                      <Col>Spring</Col>
                      <Col className="text-center">5 years</Col>
                      <Col className="text-right">100%</Col>
                    </Row>
                    <Progress
                      max="100"
                      value="100"
                      barClassName="progress-bar-primary"
                    />
                  </Col>
                </Row>
              
              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/nodejs.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>NodeJS</Col>
                    <Col className="text-center">1 year</Col>
                    <Col className="text-right">60%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="60"
                    barClassName="progress-bar-primary"
                  />
                </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/quarkus.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Quarkus</Col>
                    <Col className="text-center">2 months</Col>
                    <Col className="text-right">30%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="30"
                    barClassName="progress-bar-primary"
                  />
                </Col>
              </Row>

              </Col>
              {/* Frontend */}
              <Col md="6">
                <div className="title">
                  <h3>Frontend</h3>
                </div>

                <Row style={{ marginTop: '5px' }}>
                  <Col className="text-center">
                    <img
                    alt="Spring"
                    className="img-rounded img-responsive"
                    src={require("assets/img/angular.png")}
                    style={{ width: '29px', marginTop: '5px' }}
                    />
                  </Col>
                  <Col xs={10}>
                    <Row xs={4}>
                      <Col>Angular 2+</Col>
                      <Col className="text-center">2 years</Col>
                      <Col className="text-right">70%</Col>
                    </Row>
                    <Progress
                      max="100"
                      value="70"
                      barClassName="progress-bar-primary"
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: '5px' }}>
                  <Col className="text-center">
                    <img
                    alt="Spring"
                    className="img-rounded img-responsive"
                    src={require("assets/img/react.png")}
                    style={{ width: '51px', marginTop: '5px' }}
                    />
                  </Col>
                  <Col xs={10}>
                    <Row xs={4}>
                      <Col>React</Col>
                      <Col className="text-center">2 months</Col>
                      <Col className="text-right">20%</Col>
                    </Row>
                    <Progress
                      max="100"
                      value="20"
                      barClassName="progress-bar-primary"
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: '5px' }}>
                  <Col className="text-center">
                    <img
                    alt="Spring"
                    className="img-rounded img-responsive"
                    src={require("assets/img/ember.png")}
                    style={{ marginTop: '5px' }}
                    />
                  </Col>
                  <Col xs={10}>
                    <Row xs={4}>
                      <Col>Ember</Col>
                      <Col className="text-center">1 year</Col>
                      <Col className="text-right">60%</Col>
                    </Row>
                    <Progress
                      max="100"
                      value="60"
                      barClassName="progress-bar-primary"
                    />
                  </Col>
                </Row>


            </Col>
            </Row>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Architecture</CardHeader>
            <CardBody>
              <Row>
              {/* Web service */}
              <Col md="6">
                  <div className="title">
                    <h3>Web service</h3>
                  </div>

                <Row style={{ marginTop: '5px' }}>
                  <Col className="text-center">
                    <img
                    alt="Spring"
                    className="img-rounded img-responsive"
                    src={require("assets/img/rest.png")}
                    style={{ marginTop: '5px' }}
                    />
                  </Col>
                  <Col xs={10}>
                  <Row xs={4}>
                    <Col>Rest</Col>
                    <Col className="text-center">5 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                  <Col className="text-center">
                    <img
                    alt="Spring"
                    className="img-rounded img-responsive"
                    src={require("assets/img/soap.jpeg")}
                    style={{ marginTop: '5px', maxHeight: '25px' }}
                    />
                  </Col>
                  <Col xs={10}>
                  <Row xs={4}>
                    <Col>SOAP</Col>
                    <Col className="text-center">1 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/microservices.png")}
                  style={{ marginTop: '5px', maxHeight: '30px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Microservices</Col>
                    <Col className="text-center">3 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/apigee.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Apigee</Col>
                    <Col className="text-center">2 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>


                </Col>
                {/* Deployment */}
                <Col md="6">
                  <div className="title">
                    <h3>Deployment</h3>
                  </div>

                  <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/docker.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Docker</Col>
                    <Col className="text-center">4 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/openshift.svg")}
                  style={{ marginTop: '5px', maxHeight: '25px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Openshift</Col>
                    <Col className="text-center">2 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/gitlab.jpg")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Gitlab-ci</Col>
                    <Col className="text-center">5 years</Col>
                    <Col className="text-right">100%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="100"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/helm.svg")}
                  style={{ marginTop: '5px', maxHeight: '25px' }}
                  />
                </Col>
                <Col xs={10}>
                  <Row xs={4}>
                    <Col>Helm</Col>
                    <Col className="text-center">3 months</Col>
                    <Col className="text-right">60%</Col>
                  </Row>
                  <Progress
                    max="100"
                    value="60"
                    barClassName="progress-bar-success"
                  />
                  </Col>
              </Row>


                </Col>
              </Row>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>Data</CardHeader>
            <CardBody>
              <Row>
              {/* Data Storing */}
              <Col md="6">
                <div className="title">
                  <h3>Data Storing</h3>
                </div>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/mysql.png")}
                  style={{ marginTop: '5px', maxHeight: '25px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={4}>
                  <Col>MySQL</Col>
                  <Col className="text-center">5 years</Col>
                  <Col className="text-right">100%</Col>
                </Row>
                <Progress
                  max="100"
                  value="100"
                  barClassName="progress-bar-danger"
                />
                </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/mongodb.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={4}>
                  <Col>MongoDB</Col>
                  <Col className="text-center">3 months</Col>
                  <Col className="text-right">30%</Col>
                </Row>
                <Progress
                  max="100"
                  value="30"
                  barClassName="progress-bar-danger"
                />
                </Col>
              </Row>


              </Col>
              {/* Big Data */}
              <Col md="6">
                <div className="title">
                  <h3>Big Data</h3>
                </div>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/redis.svg")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={4}>
                  <Col>Redis</Col>
                  <Col className="text-center">6 months</Col>
                  <Col className="text-right">60%</Col>
                </Row>
                <Progress
                  max="100"
                  value="60"
                  barClassName="progress-bar-danger"
                />
                </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/kafka.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={4}>
                  <Col>Kafka</Col>
                  <Col className="text-center">1 year</Col>
                  <Col className="text-right">60%</Col>
                </Row>
                <Progress
                  max="100"
                  value="60"
                  barClassName="progress-bar-danger"
                />
                </Col>
              </Row>


              </Col>
              </Row>
            </CardBody>
          </Card>

          
          {/* Language */}
          <Card>
            <CardHeader>Language</CardHeader>
            <CardBody>
              <Row>
              <Col md="6">

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/france.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={6}>
                  <Col>French</Col>
                  <Col className="text-right">100%</Col>
                </Row>
                <Progress
                  max="100"
                  value="100"
                  barClassName="progress-bar-warning"
                />
                </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/turkey.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={6}>
                  <Col>Turkish</Col>
                  <Col className="text-right">100%</Col>
                </Row>
                <Progress
                  max="100"
                  value="100"
                  barClassName="progress-bar-warning"
                />
                </Col>
              </Row>

              <Row style={{ marginTop: '5px' }}>
                <Col className="text-center">
                  <img
                  alt="Spring"
                  className="img-rounded img-responsive"
                  src={require("assets/img/uk.png")}
                  style={{ marginTop: '5px' }}
                  />
                </Col>
                <Col xs={10}>
                <Row xs={6}>
                  <Col>English</Col>
                  <Col className="text-right">70%</Col>
                </Row>
                <Progress
                  max="100"
                  value="70"
                  barClassName="progress-bar-warning"
                />
                </Col>
              </Row>


              </Col>
              </Row>
            </CardBody>
          </Card>

          
        </Container>
      </div>
    </>
  );
}

export default SectionSkill;
