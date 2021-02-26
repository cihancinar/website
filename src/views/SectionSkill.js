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
  Progress
} from "reactstrap";

function SectionSkill() {
  return (
    <>
      <div className="section section-buttons" id="skill">
        <Container>
          <Col md="6">
            <div className="title">
              <h2>Skills</h2>
              <h3>Software dev</h3>
            </div>
            <Row>
              <Col md="4">Java</Col>
              <Col md="4" className="text-center">5 ans</Col>
              <Col md="4" className="text-right">100%</Col>
            </Row>
            <Progress
              max="100"
              value="100"
              barClassName="progress-bar-success"
            />
            <Row>
              <Col md="4">Kotlin</Col>
              <Col md="4" className="text-center">1 an</Col>
              <Col md="4" className="text-right">60%</Col>
            </Row>
            <Progress
              max="100"
              value="60"
              barClassName="progress-bar-success"
            />
          </Col>
          <Col md="6">
            <div className="title">
              <h3>Web dev</h3>
            </div>
            <Row>
              <Col md="4">Angular 2+</Col>
              <Col md="4" className="text-center">2 ans</Col>
              <Col md="4" className="text-right">70%</Col>
            </Row>
            <Progress
              max="100"
              value="70"
              barClassName="progress-bar-success"
            />
          </Col>
          <Col md="6">
            <div className="title">
              <h3>Web service</h3>
            </div>
            <Row>
              <Col md="4">Rest</Col>
              <Col md="4" className="text-center">5 ans</Col>
              <Col md="4" className="text-right">100%</Col>
            </Row>
            <Progress
              max="100"
              value="100"
              barClassName="progress-bar-success"
            />
          </Col>
        </Container>
      </div>
    </>
  );
}

export default SectionSkill;
