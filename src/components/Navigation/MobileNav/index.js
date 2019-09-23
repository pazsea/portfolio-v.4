import React, { Component } from "react";
import { MobileNavDiv } from "./styles";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { ReactComponent as AnglerightIcon } from "../../../images/awesomeLogos/anglerightIcon.svg";
import { ReactComponent as AngleleftIcon } from "../../../images/awesomeLogos/angleleftIcon.svg";
import { ReactComponent as HamburgerIcon } from "../../../images/awesomeLogos/hamburgerIcon.svg";

class MobileNav extends Component {
  render() {
    const { toggleNav, pagesState } = this.props;

    if (pagesState) {
      const { currentPage, nextPage, previousPage } = this.props.pagesState;
      return (
        <MobileNavDiv>
          <div className="activePageDiv">
            <Link to={previousPage}>
              <AngleleftIcon></AngleleftIcon>
            </Link>
            <span className="currentPage"> {currentPage} </span>
            <Link to={nextPage}>
              <AnglerightIcon></AnglerightIcon>
            </Link>
          </div>
          <div className="hamburgerDiv">
            <button onClick={toggleNav} type="button">
              <HamburgerIcon></HamburgerIcon>
            </button>
          </div>
        </MobileNavDiv>
      );
    } else {
      return (
        <MobileNavDiv>
          {/* <div className="logoDiv">L</div> */}
          <div className="activePageDiv"> Loading..</div>
        </MobileNavDiv>
      );
    }
  }
}

const mapStateToProps = state => ({
  pagesState: state.pagesState
});

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(MobileNav);
