import styled from "styled-components";

export const MobileNavDiv = styled.nav`
  color: black;
  display: flex;
  background: #efe2ba;

  z-index: 100;
  position: relative;
  font-size: 1.9rem;
  font-style: bold;
  padding: 0.4em 0.5em 0.5em 0.3em;
  justify-content: space-between;

  .currentPage {
    font-weight: 800;
    color: white;
    text-shadow: black 0px -1px black 0px -1px black 0px -1px black 0px -1px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }

  .activePageDiv {
    svg {
      border-radius: 100%;
      padding: 0.1em 0.3em 0.1em 0.3em;
      border: 1px solid transparent;
      width: 1em;
      position: relative;
      top: 4px;
      text-align: center;
      background: lightgoldenrodyellow;
    }
  }

  .logoDiv {
    display: flex;
    justify-content: flex-end;
    width: 20px;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    svg {
      color: black;
      width: 1.8em;
      position: relative;
      top: 4px;
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    display: none;
  }

  /* // Large devices (desktops, 992px and up) */
  /* @media (min-width: 992px) {
    justify-content: flex-end;
  } */

  /* // Extra large devices (large desktops, 1200px and up) */
  /* @media (min-width: 1200px) {
  } */
`;
