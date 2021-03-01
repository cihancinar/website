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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import IndexFooter from "components/Footers/IndexFooter.js";

import SectionAbout from "views/SectionAbout.js";
import SectionContact from "views/SectionContact.js";
import SectionExperience from "views/SectionExperience.js";
import SectionSkill from "views/SectionSkill.js";

import CookieConsent from "react-cookie-consent";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionAbout />
        <SectionExperience />
        <SectionSkill />
        <SectionContact />
        <IndexFooter />
      </div>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="CookieConsent"
        style={{ background: "#1e272e" }}
        buttonStyle={{ background: "#f5593d", color: "white", fontSize: "13px" }}
        expires={365}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default Index;
