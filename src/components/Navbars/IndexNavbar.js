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
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function scrollTo(element) {
  scroller.scrollTo(element, {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -50
  })
}

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            onClick={() => scrollTo('header')}
            data-placement="bottom"
            title="Cihan Cinar"
          >
            Home
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://fr.linkedin.com/in/cihancinar"
                target="_blank"
                title="Linkedin"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/cihancinar"
                target="_blank"
                title="GitHub"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>


            <NavItem>
              <NavLink
                onClick={() => scrollTo('about')}
                style= {{ cursor: 'pointer' }}
              >
                <i className="nc-icon nc-badge" /> About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => scrollTo('experience')}
                style= {{ cursor: 'pointer' }}
              >
                <i className="nc-icon nc-briefcase-24" /> History
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => scrollTo('skill')}
                style= {{ cursor: 'pointer' }}
              >
                <i className="nc-icon nc-atom" /> Skills
              </NavLink>
            </NavItem>


            <NavItem>
              <Button
                className="btn-round"
                color="danger"
                onClick={() => scrollTo('contact')}
              >
                Contact
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
