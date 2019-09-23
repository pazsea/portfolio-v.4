import React, { Component } from "react";
import {
  Wrapper,
  ImageDiv,
  ContentWrapper,
  HeaderDiv,
  GoalsDiv,
  ChallengesDiv,
  RoleDiv
} from "./styles";
import "react-image-gallery/styles/css/image-gallery.css";
import "./slideshow.css";
import { ReactComponent as GithubIcon } from "../../../images/awesomeLogos/githubIcon.svg";
import { ReactComponent as LiveurlIcon } from "../../../images/awesomeLogos/liveurlIcon.svg";

import ImageGallery from "react-image-gallery";

class Card extends Component {
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
      goalsDesc,
      challengesDesc,
      myRoleDesc
    } = this.props;

    return (
      <Wrapper>
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
              className="goalButton"
              onClick={() => this.choosenDesc("goal")}
            >
              Goals
            </button>{" "}
            /{" "}
            <button
              className="challengesButton"
              onClick={() => this.choosenDesc("challenges")}
            >
              Challenges
            </button>{" "}
            /{" "}
            <button
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
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              SOURCE CODE <GithubIcon className="githubIcon"></GithubIcon>
            </a>
            {/* ADDERA LIVE DEMO!!! */}
            {liveDemoURL ? (
              <a href={liveDemoURL} target="blank">
                LIVE DEMO <LiveurlIcon className="liveUrlIcon"></LiveurlIcon>
              </a>
            ) : null}
          </div>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default Card;
