import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as InformationIcon } from "../../images/awesomeLogos/informationIcon.svg";
import { ReactComponent as GithubIcon } from "../../images/awesomeLogos/githubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/awesomeLogos/linkedinIcon.svg";
import { ReactComponent as MailIcon } from "../../images/awesomeLogos/mailIcon.svg";

import { FooterDiv, InformationDiv, PulseAnimationDiv } from "./styles";
import * as a from "../../constants/actionTypes";

class ContactFooter extends Component {
  state = {};
  render() {
    const { toggleInfo, infoOpen, projectIndex } = this.props;
    return (
      <Fragment>
        <PulseAnimationDiv>
          <InformationDiv projectIndex={projectIndex} infoOpen={infoOpen}>
            <InformationIcon onClick={toggleInfo}></InformationIcon>
          </InformationDiv>
        </PulseAnimationDiv>
        <FooterDiv projectIndex={projectIndex} infoOpen={infoOpen}>
          <a
            href="https://github.com/pazsea/"
            className="github"
            target="blank"
            rel="noopener noreferrer"
            onClick={toggleInfo}
            aria-label="Go to my Github page and see my projects"
          >
            <GithubIcon></GithubIcon>
          </a>
          <a
            href="http://www.linkedin.com/in/patrick-sjoberg"
            className="linkedin"
            target="blank"
            rel="noopener noreferrer"
            onClick={toggleInfo}
            aria-label="Go to my Linkedin page and send my a message"
          >
            <LinkedinIcon></LinkedinIcon>
          </a>
          <Link to="/contact" className="mail" onClick={toggleInfo}>
            <MailIcon></MailIcon>
          </Link>
        </FooterDiv>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  infoOpen: state.toggleInfoState.informationOpen,
  projectIndex: state.projectIndexState.projectIndex
});

const mapDispatchToProps = dispatch => ({
  toggleInfo: () => dispatch({ type: a.TOGGLE_INFORMATION })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactFooter);
