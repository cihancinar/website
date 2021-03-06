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
  Container
} from "reactstrap";

// core components
import TermsNavbar from "components/Navbars/TermsNavbar.js";
import TermsHeader from "components/Headers/TermsHeader.js";
import IndexFooter from "components/Footers/IndexFooter.js";

function TermsPage() {
  // const [activeTab, setActiveTab] = React.useState("1");

  // const toggle = (tab) => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab);
  //   }
  // };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <TermsNavbar />
      <TermsHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <h4 className="title">
                Terms <br />
              </h4>
            </div>
          </div>
          TODO
        </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default TermsPage;
