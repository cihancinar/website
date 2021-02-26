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

import { CloudArrowDown, Envelope, Telephone } from 'react-bootstrap-icons';

import Pdf from '../assets/pdf/Resume_Cihan-CINAR_Senior-SE.pdf';

// reactstrap components
import {
  CardText,
  CardDeck,
  CardTitle,
  CardBody,
  Card,
  Container,
} from "reactstrap";

function SectionContact() {
  return (
    <>
      <div className="section section-dark" id="contact" style={{ background: '#1e272e' }}>
        <Container>
          <div className="title">
            <h2>Contact</h2>
          </div>
            <CardDeck className="text-center">
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">
                      <Telephone color="black" size={100} />
                    </CardTitle>
                    <CardText>Phone</CardText>
                    <CardText>
                      <a href="tel:+3343279640">
                        +33 6 43 27 96 40
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">
                      <Envelope color="black" size={100} />
                    </CardTitle>
                    <CardText>Email</CardText>
                    <CardText>
                      <a href="mailto:cihancnr@gmail.com">
                        cihancnr@gmail.com
                      </a>
                    </CardText>
                  </CardBody>
                </Card>
                <Card>
                  <div className="card-vcard">
                    <img
                      alt="vcard"
                      height="143px"
                      src={require("assets/img/vcard.png")}
                      style={{ height:'143px', marginTop: '5px' }}
                    />
                  </div>
                  <CardBody>
                    <CardText tag="h5">VCard</CardText>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">
                      <a 
                      href={Pdf}
                      without 
                      rel="noopener noreferrer"
                      target="_blank"
                      >
                      <CloudArrowDown color="black" size={100} />
                      </a>
                    </CardTitle>
                    <CardText>Resume</CardText>
                    <CardText></CardText>
                  </CardBody>
                </Card>
            </CardDeck>
        </Container>
      </div>
    </>
  );
}

export default SectionContact;