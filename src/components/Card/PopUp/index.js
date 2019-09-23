import React, { Component } from "react";
import {
  Wrapper,
  ImageDiv,
  ContentWrapper,
  HeaderDiv,
  ActionDiv,
  GoalsDiv,
  ChallengesDiv,
  RoleDiv
} from "./styles";

import { ReactComponent as GithubIcon } from "../../../images/awesomeLogos/githubIcon.svg";
import { ReactComponent as LiveurlIcon } from "../../../images/awesomeLogos/liveurlIcon.svg";

import { ReactComponent as BackwardsIcon } from "../../../images/awesomeLogos/backwardsIcon.svg";
import { ReactComponent as ForwardsIcon } from "../../../images/awesomeLogos/forwardsIcon.svg";

import "react-image-gallery/styles/css/image-gallery.css";
import "./slideshow.css";
// import firebase from "../../images/icons/firebase.ico";

import ImageGallery from "react-image-gallery";

class PopUp extends Component {
  state = {
    selectedDesc: "goal"
  };

  componentDidMount() {
    // this.props.
  }

  choosenDesc(selected) {
    this.setState({ selectedDesc: selected });
  }

  render() {
    const { selectedDesc } = this.state;
    const {
      name,
      images,
      showThumbnail,
      githubURL,
      liveDemoURL,
      icons,
      prevPage,
      nextPage,
      totalProjects,
      currentProjectPage,
      goalsDesc,
      challengesDesc,
      myRoleDesc
    } = this.props;

    return (
      <Wrapper>
        <ActionDiv>
          <button id="prevPageButton" onClick={() => prevPage()}>
            <BackwardsIcon></BackwardsIcon> Previous
          </button>
          <p>
            {currentProjectPage + 1} /{totalProjects}{" "}
          </p>
          <button id="nextPageButton" onClick={() => nextPage()}>
            Next <ForwardsIcon></ForwardsIcon>
          </button>
        </ActionDiv>
        <ImageDiv>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            useTranslate3D={true}
            lazyLoad={true}
            showThumbnails={showThumbnail}
          />
        </ImageDiv>
        <ContentWrapper selectedDesc={selectedDesc}>
          <HeaderDiv>
            <h1>{name}</h1>
            <br />
            <div className="iconDiv">
              {icons
                ? icons.map((icon, index) => (
                    <img
                      src={icon.ico}
                      alt={icon.alt}
                      title={icon.alt}
                      key={icon.alt + index}
                    />
                  ))
                : null}
            </div>
          </HeaderDiv>
          <div className="cardButtons">
            <button
              id="goalButton"
              className="goalButton"
              onClick={() => this.choosenDesc("goal")}
            >
              Goals
            </button>{" "}
            /{" "}
            <button
              id="challengesButton"
              className="challengesButton"
              onClick={() => this.choosenDesc("challenges")}
            >
              Challenges
            </button>{" "}
            /{" "}
            <button
              id="roleButton"
              className="solutionsButton"
              onClick={() => this.choosenDesc("solutions")}
            >
              My Role
            </button>
          </div>

          {selectedDesc === "goal" ? (
            <GoalsDiv>
              {goalsDesc.split("/n").map((text, index) => (
                <p key={name + "goals" + index}>{text}</p>
              ))}
            </GoalsDiv>
          ) : selectedDesc === "challenges" ? (
            <ChallengesDiv>
              {challengesDesc.split("/n").map((text, index) => (
                <p key={name + "challenges" + index}>{text}</p>
              ))}
            </ChallengesDiv>
          ) : selectedDesc === "solutions" ? (
            <RoleDiv>
              {myRoleDesc.split("/n").map((text, index) => (
                <p key={name + "myRole" + index}>{text}</p>
              ))}
            </RoleDiv>
          ) : null}

          <div className="sourceButtons">
            <a
              href={githubURL}
              target="_blank"
              aria-label="Go to my githup repo and see the project code"
              rel="noopener noreferrer"
            >
              SOURCE CODE <GithubIcon className="githubIcon"></GithubIcon>
            </a>
            {/* ADDERA LIVE DEMO!!! */}
            {liveDemoURL ? (
              <a
                href={liveDemoURL}
                target="_blank"
                aria-label="Go to my githup repo and see the project code"
                rel="noopener noreferrer"
              >
                LIVE DEMO <LiveurlIcon className="liveUrlIcon"></LiveurlIcon>
              </a>
            ) : null}
          </div>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default PopUp;
