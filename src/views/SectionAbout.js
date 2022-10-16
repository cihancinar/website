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

import { GeoAlt, Trophy } from 'react-bootstrap-icons';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import ExpertPdf from '../assets/pdf/Technical_Expert_Cihan_CINAR_Worldline.pdf';

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
                <h6 style={{ marginTop: '5px' }}><GeoAlt color="black" size={20} /> Vetraz-Monthoux, France</h6>
              </div>
              <p className="text-justify description text-dark" style={{ marginBottom: '15px' }}>
                I am a Full Stack Technical Expert, with over 7 years of experience and always eager to learn something new.
              </p>
              <p className="text-justify description text-dark" style={{ marginBottom: '15px' }}>
                I am currently employed at SQLI Suisse as a Technical Expert, where I am working in agile methodology on various projects, with high expectations and tight deadlines. Specialized in Java, I am actively working on software design, architecture and IaaS, CaaS deployment. However I am adaptable and I enjoy learning new technologies.
                <a
                    href={ExpertPdf}
                    without
                    rel="noopener noreferrer"
                    target="_blank"
                >
                  <Trophy color="black" size={15} /> Certification
                </a>
              </p>
              <p className="text-justify description text-dark">
                Pedagogue and passionate about my work, I participate in university or in-house technical trainings. I actively follow
                web conferences such as Devoxx to keep me informed of the latest technologies and trends and I try to
                implement new approaches that I think are promising. 
                The technical challenge is at the heart of my activity and as I enjoy taking initiatives I participated for few years at Labs as a day a week for R&D.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionAbout;
