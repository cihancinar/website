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
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  const randBackgroundImage = "top" + Math.round(Math.random()) + ".webp";
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/" + randBackgroundImage) + ")",
        }}
        id="header"
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1>Hello, world!</h1>
              <h1 className="presentation-title">I'm Cihan Cinar</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.webp")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.webp")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center font-weight-bold">
              | Technical Expert |
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.webp") + ")",
          }}
        />
      </div>
    </>
  );
}

/*
<h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png")}
            />
          </a>
        </h6>
*/

export default IndexHeader;
