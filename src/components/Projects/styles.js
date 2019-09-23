import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BackdropStyle = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: fit-content;
  background: rgba(0, 0, 0, 0.9);
  padding: 0 0 1.3em 0;
  .closeIcon {
    width: 100%;

    display: flex;
    justify-content: flex-end;

    /* border: 1px solid green; */
    button {
      font-family: "Amatic SC", cursive;
      font-display: swap;

      color: whitesmoke;
      font-size: 1.6em;
      background: none;
      border: none;
      padding: 15px 10px;
      :active {
        color: red;
      }
      svg {
        width: 1em;
        position: relative;
        top: 4px;
      }
    }
  }
`;

export const PopUpStyle = styled.div`
  width: 90%;
  margin: auto;
  vertical-align: center;
  height: 90%;
  border: 1px solid red;
`;
