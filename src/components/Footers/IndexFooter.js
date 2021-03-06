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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          {/* <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="/terms"
                  target="_blank"
                >
                  Terms
                </a>
              </li>
            </ul>
          </nav> */}
          <div className="credits ml-auto">
            <span className="copyright text-dark">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Cihan Cinar
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
