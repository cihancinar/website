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

import { GeoAlt } from 'react-bootstrap-icons';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionAbout() {
  return (
    <>
      <div className="section section-buttons" id="about">
        <Container>
          <Row>
            <Col md="12">
              <div className="title">
                <h2>About me</h2>
                <h3>Cihan Cinar</h3>
                <h6 style={{ marginTop: '0' }}><GeoAlt color="black" size={20} /> Lyon, France</h6>
              </div>
              <p className="text-justify description">I work as a Java and Web Architect.</p>
              <p className="text-justify description">
                Passionate about my work, I participate in university or in-house technical trainings, actively following
                web conferences such as Devoxx to keep me informed of the latest technologies and trends and try to
                implement new approaches that I think are promising. I also participate as one day a week at LABS on
                experimentation of new technologies.  
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionAbout;
