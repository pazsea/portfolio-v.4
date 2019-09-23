import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  /* border: 1px solid red; */
  height: 70vh;
  margin: 2em auto 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 80%;
  }
`;

export const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 70vh;
  /* border: 1px solid red; */

  button {
    display: inline-block;
    svg {
      width: 1em;
      vertical-align: middle;
      color: grey;
      text-shadow: black 0px -1px;
    }
    /* text-align: center; */
    /* font-family: "Amatic SC", cursive; */

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
    font-family: "Amatic SC", cursive;
    font-display: swap;
    font-size: 20px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;

    :hover {
      svg {
        color: green;
      }
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
  }

  input {
    padding: 0.8rem;
    font-size: 15px;
    display: block;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0.5em 0 1em 0;
    :focus {
      border-color: #007eff;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 0 3px rgba(0, 126, 255, 0.1);
      outline: none;
    }
    ::placeholder {
      font-size: 16px;
      font-family: "Amatic SC", cursive;
      font-display: swap;
      font-style: bold;
    }
  }

  .messageInput {
    flex: 5;
    overflow: auto;
    resize: none;
    padding: 0.8rem;
    font-size: 13px;
    display: block;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0.5em 0 1em 0;
    :focus {
      border-color: #007eff;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 0 3px rgba(0, 126, 255, 0.1);
      outline: none;
    }
    ::placeholder {
      font-size: 16px;
      font-family: "Amatic SC", cursive;
      font-display: swap;
      font-style: bold;
    }
  }
  .text-input error {
    border-color: red;
  }

  .input-feedback {
    text-align: center;
    color: red;
    font-style: bold;
  }
`;
