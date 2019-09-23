import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";

const pulseAnimation = keyframes`${bounceIn}`;

export const HorizontalCardStyle = styled.div`
  display: flex;
  margin: 0 1% 3% 1%;
  width: 100%;
  height: 220px;
  border: 1px solid whitesmoke;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .iconDiv {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    img {
      width: 10%;
      max-height: 30px;
      margin-right: 2%;
    }
  }
  .unPressed {
    text-align: center;
    font-size: 0.8em;
    width: 70%;
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.9);
    margin: auto;
    padding: 10px;
    .tap {
      text-align: center;
      font-weight: 900;
      text-decoration-line: underline;
    }
  }
`;

export const VerticalCardstyle = styled.div`
  display: flex;
  margin: 0 1% 3% 1%;
  width: 100%;
  height: 220px;
  border: 1px solid whitesmoke;
  background-image: url(${props => props.image});

  background-repeat: no-repeat;
  background-size: 32% 100%;
  background-position: center;
  .iconDiv {
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    img {
      width: 10%;
      max-height: 30px;
      margin-right: 2%;
    }
  }
  .unPressed {
    text-align: center;
    font-size: 0.8em;
    width: 70%;
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.9);
    margin: auto;
    padding: 10px;
    .tap {
      text-align: center;
      font-weight: 900;
      text-decoration-line: underline;
    }
  }
`;

export const PulseAnimationDiv = styled.div`
  animation: 3s ${pulseAnimation};
`;
