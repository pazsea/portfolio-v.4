import React, { Component, Fragment } from "react";

import { NavLink, withRouter } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import MobileNav from "./MobileNav";
import { Nav } from "./styles";

class Navigation extends Component {
  state = {
    navOpen: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  };

  toggleNavFalse = () => {
    if (this.state.navOpen) {
      this.setState({ navOpen: false });
    } else {
      return null;
    }
  };

  render() {
    const { navOpen } = this.state;
    return (
      <Fragment>
        <MobileNav toggleNav={this.toggleNav} navOpen={navOpen} />
        <Nav navOpen={navOpen}>
          <li>
            <NavLink
              exact
              to={ROUTES.HOME}
              onClick={this.toggleNavFalse}
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.PROJECTS}
              onClick={this.toggleNavFalse}
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to={ROUTES.CONTACT}
              onClick={this.toggleNavFalse}
              activeStyle={{
                fontWeight: "bold",
                color: "white",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Contact
            </NavLink>
          </li>
        </Nav>
      </Fragment>
    );
  }
}

export default withRouter(Navigation);
