import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 70vh;
  margin: 0 2%;
  border: 2px solid green;
  /* @media (min-height: 570px) {
    margin: 5vh 2% 10vh 2%;
  }*/
  /* @media (min-width: 500px ) {
    margin: 10% 2%;
  } 
  @media (min-height: 20px ) {
    margin: 10% 2%;
  } 
  @media (min-width: 1024px) {
    margin: 0 2%;
  } */
`;

export const TextWrapper = styled.div`
  flex: 1;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageDiv = styled.div`
  flex: 1;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TextHeader = styled.div`
  /* border: 1px solid orange; */

  width: 100%;
  text-align: center;
  h1 {
    /* font-family: "Oswald", sans-serif; */
    font-display: swap;
    font-family: "Amatic SC", cursive;
    font-size: 4rem;
    text-transform: uppercase;
    color: #d60e0d;
    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
    @media (max-width: 500px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    margin: 1em 0;
    text-transform: uppercase;

    /* font-family: "Oswald", sans-serif; */
  }

  img {
    display: none;

    @media (max-width: 1024px) {
      display: block;
      width: 55%;
      height: auto;
      margin: 0 auto;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) {
      width: 40%;
    }
  }
`;

export const ContactDiv = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  justify-content: center;
  margin-top: 5%;
  width: 100%;
  /* border: 1px solid red; */
`;

export const MaterialButton = styled.button`
  color: white;
  text-shadow: black -1px 0px, black 0px 1px, black 1px 0px, black 0px -1px;
  font-style: bold;
  background-color: #d60e0d;
  padding: 6px 16px;
  font-size: 1rem;
  min-width: 64px;
  box-sizing: border-box;
  border: 0;
  cursor: pointer;
  outline: 0;
  border-radius: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-display: swap;

  font-weight: 600;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
