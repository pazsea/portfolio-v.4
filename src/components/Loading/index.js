import React from "react";
// import Breakpoint, { BreakpointProvider } from "react-socks";
import { css } from "@emotion/core";
import { PropagateLoader } from "react-spinners";
// import avatar from "../../images/meavatar-min.png";
import * as s from "./styles";

const override = css`
  display: flex;
  margin: 30vh auto;
  border-color: red;
`;

export default function Loading(props) {
  return (
    <s.LoadingDiv>
      
      <PropagateLoader
        css={override}
        // sizeUnit={"5px"}
        // size={1}
        color={"#4056A1"}
        loading={props.loading}
      >
      
      </PropagateLoader>
    </s.LoadingDiv>
  );
}
