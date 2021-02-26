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
  Col
} from "reactstrap";

function SectionExperience() {
  return (
    <>
      <div className="section" id="experience" style={{ background: '#ebebeb' }}>
        <Container>
          <div className="title">
            <h2>History</h2>
          </div>
          <Row>
            <div id="resume" className="resume-timeline">
              <Col md="12">
              <div className="resume-header">
                <h2><strong>Professional</strong></h2>
                </div>
              </Col>
              
              <Col md="12">
                <div className="timeline-wrap">

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ewl.PNG")} />
                    <div className="timeline-header">
                      <h4><strong>Architect</strong></h4>
                      <p>06/2020 - Present</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>equensWorldline</strong></h4>
                      <p>
                      Design and development of a generic consent, authorization and authentication solution using the OPENID connect protocol through Keycloak and Apigee.
                      </p>
                      <p style={{ marginTop:"10px" }}><em>
                      Keycloak, Apigee, Java 11, SpringBoot (Security, MVC, Data, WebFlux), Maven, Angular 9, Openshift, Helm, Gitlab-ci, Docker, Jira
                      </em></p>
                    </div>
                  </div> 

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ewl.PNG")} />
                    <div className="timeline-header">
                      <h4><strong>Architect / Technical Lead</strong></h4>
                      <p>09/2019 - 06/2020</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>equensWorldline</strong></h4>
                      <p>
                      Design and development of a chatbot solution using channels such as Alexa, Google Home,
                      Messenger, Rest API, WebSocket, using for intention recognition our RASA-based NLP
                      engine coupled with an approaching search and disambiguation engine.
                      Implementation of an administration tool for corpus management and administration of the
                      bot and discussions on the different channels.
                      </p>
                      <p style={{ marginTop:"10px" }}><em>
                      Kotlin, SpringBoot (Security, MVC, Data), Maven, Angular 9, Openshift, Helm, Gitlab-ci, Docker, Jira
                      </em></p>
                    </div>
                  </div> 

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ewl.PNG")} />
                    <div className="timeline-header">
                      <h4><strong>Lead Developer</strong></h4>
                      <p>10/2018 - 09/2019</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>equensWorldline</strong></h4>
                      <p>
                      Design, development and operation of the Digital Banking product line for the implementation
                      of the PSD2 standard based on the BerlinGroup and OpenBanking standards, through the
                      Apigee API manager.
                      </p>
                      <p style={{ marginTop:"10px" }}><em>
                      Java, SpringBoot (Cloud, Security, Data, MVC), Docker, Ember, Maven, Node, TLS
                      </em></p>
                    </div>
                  </div> 

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ewl.PNG")} />
                    <div className="timeline-header">
                      <h4><strong>Software Engineer</strong></h4>
                      <p>03/2016 - 10/2018</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>equensWorldline</strong></h4>
                      <p>
                      - Design, development and operation of underwriting applications of
                      dematerialized contracts for various banking and insurance customers, implementing the
                      electronic signature.
                      </p>
                      <p style={{ marginTop:"10px" }}><em>
                      Java, SpringBoot (XML, Boot, MVC, Data), AngularJs, REST et SOAP, Maven, TLS
                      </em></p>
                      <p style={{ marginTop:"10px" }}>
                      - Design, development and operation of a digital banking product for
                      the implementation of API connector between third parties and bank for all banking
                      transactions.
                      </p>
                      <p style={{ marginTop:"10px" }}><em>
                      Java, JEE, Spring (Cloud), Ember, REST, Maven, Node, TLS
                      </em></p>
                    </div>
                  </div> 

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ucbl.jpg")} />
                    <div className="timeline-header">
                      <h4><strong>Part-time teacher</strong></h4>
                      <p>10/2018 - 12/2018 & 10/2019 - 12/2019</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>Université Claude Bernard Lyon 1</strong></h4>
                      <p>
                      Teacher (practical work) for web application design courses for 1st year of master computer
                      science of the university Lyon 1.
                      </p>
                      <p>
                      The general theme is "web-oriented" design using software engineering patterns (MVC, REST,
                      asynchronous, framework, templating.). Technically, it involves programming in Java on the
                      server side (servlet, JSP, Spring) and in JS on the client side (AJAX, jQuery).
                      </p>
                    </div>
                  </div> 

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/liris.jpg")} />
                    <div className="timeline-header">
                      <h4><strong>Internship</strong></h4>
                      <p>05/2015 - 08/2015</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>LIRIS - CNRS (Research Laboratory in computer science)</strong></h4>
                      <p>
                      Development of a graph storage engine for a distributed system.
                      Multi-segment partition loading, latices generation, compression and code optimization with
                      float loading.
                      </p>
                      <p>
                      Work on the Petasky project, on the fragmentation and data storage part, in C++, JAVA,
                      SPARQL and RDF.
                      </p>
                    </div>
                  </div> 

                </div>			
              </Col>
            </div>
          </Row>

          <Row>
            <div id="resume" className="resume-timeline">
              <Col md="12">
                <div className="resume-header">
                  <h2><strong>Educational</strong></h2>
                </div>
              </Col>
              
              <Col md="12">
                <div className="timeline-wrap">

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ucbl.jpg")} />
                    <div className="timeline-header">
                      <h4><strong>Master Degree</strong></h4>
                      <p>2014 - 2016</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>Université Claude Bernard Lyon 1, France, Lyon</strong></h4>
                      <p>
                      Master of Information Technology and Web in Computer Science
                      </p>
                    </div>
                  </div> 

                  <div className="timeline-block">
                    <img className="timeline-image" alt="equensWorldline" src={require("assets/img/ucbl.jpg")} />
                    <div className="timeline-header">
                      <h4><strong>Bachelor Degree</strong></h4>
                      <p>2011 – 2013</p>
                    </div>
                    <div className="timeline-content">
                      <h4><strong>IUT Informatique Dijon, France, Dijon</strong></h4>
                      <p>
                      University of Computer Science                                                                         
                      </p>
                    </div>
                  </div> 

                </div>			
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionExperience;
