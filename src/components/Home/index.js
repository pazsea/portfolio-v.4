import React, { Component } from "react";
import {
  Wrapper,
  TextWrapper,
  ImageDiv,
  TextHeader,
  ContactDiv,
  MaterialButton
} from "./styles";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as FireIcon } from "../../images/awesomeLogos/fireIcon.svg";

import * as a from "../../constants/actionTypes";

import * as ROUTES from "../../constants/routes";
import TextAnimation from "../TextAnimation";
const cartoonMe = "https://howlygil.sirv.com/Images/avatars/patrickcartoon.png";

class Home extends Component {
  state = {};

  componentWillMount() {
    this.props.setPage("Home", ROUTES.PROJECTS, ROUTES.CONTACT);
  }

  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <TextHeader>
            <h1>Hi, I am Patrick</h1>
            <TextAnimation />
            <img src={cartoonMe} alt="Patrick Cartoon" />
          </TextHeader>
          <ContactDiv>
            <Link to="/projects">
              <MaterialButton>
                Check out my projects{" "}
                <FireIcon
                  style={{
                    width: "1em",
                    position: "relative",
                    top: 4,
                    color: "goldenrod"
                  }}
                ></FireIcon>
              </MaterialButton>
            </Link>
          </ContactDiv>
        </TextWrapper>
        <ImageDiv>
          <img src={cartoonMe} alt="Patrick Cartoon" />
        </ImageDiv>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPage: (current, next, previous) =>
    dispatch({ type: a.SET_PAGES, current, next, previous })
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
