import styled, { keyframes } from "styled-components";
import { fadeIn, zoomIn } from "react-animations";

const fadeInDownAnimation = keyframes`${fadeIn}`;
const zoomInAnimation = keyframes`${zoomIn}`;

export const GoalsDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};

  font-size: 1.3em;
  padding: 0.8em 0;
  font-weight: 500;
  flex-grow: 1;
`;
export const ChallengesDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};
  font-size: 1.3em;
  padding: 0.8em 0;
  font-weight: 500;
  flex-grow: 1;
`;
export const RoleDiv = styled.div`
  animation: 1s ${fadeInDownAnimation};

  font-size: 1.3em;
  padding: 0.8em 0;

  font-weight: 500;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  animation: 0.3s ${fadeInDownAnimation};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  border-radius: 10px;
  background: #fbeec1;
  padding: 1em;
  border: 2px solid whitesmoke;
  height: fit-content;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    flex: 5;
  }
  .iconDiv {
    display: flex;
    width: 100%;
    justify-content: center;
    img {
      width: 15%;
      max-height: 32px;

      margin-right: 2%;
    }
  }
`;

export const ActionDiv = styled.div`
  display: flex;
  width: 100%;
  /* border: 1px solid red; */
  justify-content: space-between;
  padding: 0.2em 0.5em 1.1em 0;
  font-family: "Amatic SC", cursive;
  font-display: swap;
  font-size: 1.2em;
  button {
    background: none;
    border: none;
    font-family: "Amatic SC", cursive;
    font-display: swap;
    font-size: 1.1em;
    padding: 0;
    :active {
      color: white;
      text-decoration: underline;
    }
    svg {
      width: 1em;
      position: relative;
      top: 3px;
    }
  }
`;

export const ImageDiv = styled.div`
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 0.85;
  flex-direction: column;
  border-radius: 10px;
  padding: 1em;
  background: lightcoral;
  color: black;

  h1 {
    font-style: bold;
    font-size: 2em;
    color: wheat;
    text-align: center;
  }
  .cardButtons {
    font-family: "Amatic SC", cursive;
    font-display: swap;
    padding-top: 0.5em;
    text-align: center;
    button {
      border: 0;
      animation: 1s ${zoomInAnimation};

      background: none;
      font-family: "Amatic SC", cursive;
      font-display: swap;
      font-size: 1.7em;
      cursor: pointer;
    }
    button:hover {
      color: white;
    }
    .goalButton {
      color: ${props => (props.selectedDesc === "goal" ? "gold" : "black")};
      text-decoration-line: ${props =>
        props.selectedDesc === "goal" ? "underline" : null};
    }
    .challengesButton {
      color: ${props =>
        props.selectedDesc === "challenges" ? "gold" : "black"};
      text-decoration-line: ${props =>
        props.selectedDesc === "challenges" ? "underline" : null};
    }
    .solutionsButton {
      color: ${props =>
        props.selectedDesc === "solutions" ? "gold" : "black"};
      text-decoration-line: ${props =>
        props.selectedDesc === "solutions" ? "underline" : null};
    }
  }
  .goal {
    font-size: 1.3em;
    padding: 0.8em 0;
    font-weight: 500;
    flex-grow: 1;
  }

  .sourceButtons {
    display: flex;
    flex-direction: column;
    a:first-child {
      margin-bottom: 5px;
    }
    a {
      flex: 1;
      text-align: center;
      -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
      -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
      box-shadow: inset 0px 1px 0px 0px #ffffff;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0.05, #f9f9f9),
        color-stop(1, #e9e9e9)
      );
      background: -moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
      background: -webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
      background: -o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
      background: -ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
      background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
      background-color: #f9f9f9;
      -moz-border-radius: 6px;
      -webkit-border-radius: 6px;
      border-radius: 6px;
      border: 1px solid #dcdcdc;
      display: inline-block;
      cursor: pointer;
      color: black;
      font-family: Arial;
      font-size: 15px;
      font-weight: bold;
      padding: 4px 24px 6px 24px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #ffffff;

      :hover {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(0.05, #e9e9e9),
          color-stop(1, #f9f9f9)
        );
        background: -moz-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
        background: -webkit-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
        background: -o-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
        background: -ms-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);
        background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='#f9f9f9',GradientType=0);
        background-color: #e9e9e9;
      }
      :active {
        position: relative;
        top: 1px;
      }
      .githubIcon {
        position: relative;
        top: 4px;
        width: 1.3em;
      }
      .liveUrlIcon {
        position: relative;
        top: 4px;
        width: 1.2em;
      }
    }
  }
`;
