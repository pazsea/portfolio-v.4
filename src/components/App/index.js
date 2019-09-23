import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { BreakpointProvider } from "react-socks";
// import { connect } from 'react-redux';
// import { compose } from 'recompose';
import { GlobalStyle } from "./styles";

import Navigation from "../Navigation";
import ContactFooter from "../ContactFooter";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import * as ROUTES from "../../constants/routes";
const stripes = "https://howlygil.sirv.com/Images/icons/Group%202.png";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <BreakpointProvider>
          <GlobalStyle />
          <Navigation />
          <img
            src={stripes}
            alt="custom_stripes"
            className="stripes_image"
          ></img>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.PROJECTS} component={Projects} />
          <Route path={ROUTES.CONTACT} component={Contact} />

          <ContactFooter />
        </BreakpointProvider>
      </Router>
    );
  }
}

export default App;
