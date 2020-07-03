

/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import Products from "../Pages/products";
// reactstrap components
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

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const logo = require('./images/logo.jpg');

function Header() {
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
                        data-placement="bottom"
                        href="/index"
                        target="_blank"
                        title="Spencer Laird resume"
                    >
                        Technical Blog
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse
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
                                href="https://github.com/salaird0324"
                                target="_blank"
                            >
                                <i className="nc-icon nc-planet" /> Github
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://linkedin.com/in/spencer-laird-72a040150/"
                                target="_blank"
                            >
                                <i className="nc-icon nc-book-bookmark" /> LinkedIn
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
