import React, { Component } from "react";
import { ReactComponent as BriefCaseIcon } from "../../images/awesomeLogos/briefcaseIcon.svg";
import { ReactComponent as HeartIcon } from "../../images/awesomeLogos/heartIcon.svg";
import { ReactComponent as LaptopIcon } from "../../images/awesomeLogos/laptopIcon.svg";

import "./style.scss";

class TextAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content">
        <div className="content__container">
          {/* <p className="content__container__text">Hello</p> */}

          <ul className="content__container__list">
            <li className="content__container__list__item">
              Patrick Sjöberg's Portfolio{" "}
              <BriefCaseIcon
                style={{
                  verticalAlign: "middle",
                  width: "0.8em",
                  color: "brown",
                  textShadow:
                    "black -1px 0px, black 0px 1px, black 1px 0px, black 0px -1px"
                }}
              ></BriefCaseIcon>
            </li>
            <li className="content__container__list__item">
              Front End Developer{" "}
              <LaptopIcon
                style={{
                  verticalAlign: "middle",
                  width: "0.8em",
                  color: "dimgrey"
                }}
                className="fas fa-laptop-code fa-1x"
              ></LaptopIcon>
            </li>
            <li className="content__container__list__item">
              Made with React + Redux{" "}
              <HeartIcon
                style={{
                  verticalAlign: "middle",
                  width: "0.8em",
                  color: "red"
                }}
                className="fas fa-heart"
              ></HeartIcon>
            </li>

            <li className="content__container__list__item">
              Check out my projects!
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TextAnimation;
