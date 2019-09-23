import React, { PureComponent } from "react";
import { HorizontalCardStyle } from "./styles";
import { PulseAnimationDiv } from "./styles";
import { ReactComponent as HandIcon } from "../../../images/awesomeLogos/handIcon.svg";

class HorizontalCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { icons, name, image, index, description, togglePopup } = this.props;
    return (
      <HorizontalCardStyle image={image} onClick={() => togglePopup(index)}>
        <div className="unPressed">
          <h4>{name}</h4>
          <div className="iconDiv">
            {icons
              ? icons.map(icon => (
                  <img src={icon.ico} alt={icon.alt} key={icon.alt + index} />
                ))
              : null}
          </div>
          {description}
          <p className="tap">
            <em>
              <br />
              Touch here to open this project. <br />
              <PulseAnimationDiv>
                <HandIcon
                  style={{
                    margin: "0.4em auto 0 auto",
                    color: "limegreen",
                    width: "3em",
                    padding: "0.4em",
                    border: "1.5px solid black",
                    borderRadius: " 100%",
                    textShadow:
                      "black -1px 0px, black 0px 1px, black 1px 0px, black 0px -1px"
                  }}
                />
              </PulseAnimationDiv>
            </em>
          </p>
        </div>
      </HorizontalCardStyle>
    );
  }
}

export default HorizontalCard;
