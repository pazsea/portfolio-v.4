import styled, { keyframes } from "styled-components";

import { bounceInRight } from "react-animations";

const pulseAnimation = keyframes`${bounceInRight}`;

export const InformationDiv = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 100;
  display: ${props =>
    props.projectIndex || props.projectIndex === 0 ? "none" : "block"};
  svg {
    width: 4em;
    color: ${props => (props.infoOpen ? "#D79922" : "#4056A1")};
    background-color: white;
    border-radius: 100%;
    cursor: pointer;
  }
`;

export const PulseAnimationDiv = styled.div`
  animation: 2s ${pulseAnimation};
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 60;
`;

export const FooterDiv = styled.footer`
  bottom: ${props => (props.infoOpen ? "0" : "-230px")};
  overflow: hidden;
  transition: bottom 0.2s ease-out;
  height: 12rem;
  width: 12rem;
  position: fixed;
  right: 0;
  border-radius: 100% 0 0 0;
  background: #c5cbe3;
  z-index: 50;
  display: ${props =>
    props.projectIndex || props.projectIndex === 0 ? "none" : "block"};

  .github {
    svg {
      width: 3em;

      color: #333;
      bottom: 10px;
      left: 10px;
      position: absolute;
      cursor: pointer;
    }
  }

  .linkedin {
    svg {
      width: 3em;

      color: rgb(0, 119, 181);
      top: 55px;
      left: 60px;
      position: absolute;
      cursor: pointer;
    }
  }

  .mail {
    svg {
      width: 3em;

      color: whitesmoke;

      top: 10px;
      right: 10px;
      position: absolute;
      cursor: pointer;
    }
  }
`;
