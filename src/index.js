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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import TermsPage from "views/TermsPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
      <Route
        path="/terms"
        render={(props) => <TermsPage {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
