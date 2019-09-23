import React, { PureComponent, Fragment } from "react";
import Loading from "../Loading";
import { projects } from "../../constants/projects";
import { connect } from "react-redux";
import * as a from "../../constants/actionTypes";
import * as ROUTES from "../../constants/routes";
import Breakpoint from "react-socks";

import Card from "../Card/CardWeb";
import HorizontalCard from "../Card/CardMobile/HorizontalCard";
import VerticalCard from "../Card/CardMobile/VerticalCard";
import PopUp from "../Card/PopUp";

import { Wrapper, BackdropStyle } from "./styles";

import { ReactComponent as CloseIcon } from "../../images/awesomeLogos/closeIcon.svg";

// Skicka rätt project index till Redux
// Ta in project[rätt index] från redux och sätt state och skicka rätt project till module
// Next och prev funktioner som ändrar index på projekt
// skicka längd på objektet samt current index från redux

class Projects extends PureComponent {
  state = {
    loading: false,
    showPopup: false
  };

  componentWillMount() {
    this.props.setPage("Projects", ROUTES.CONTACT, ROUTES.HOME);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        loading: false
      });
    }, 1500);
  }

  componentWillUnmount() {
    this.closePopup();
  }

  closePopup = () => {
    // setTimeout(() => {
    const { setProjectIndex } = this.props;
    setProjectIndex(false);

    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
    // }, 120);
  };

  prevPage = () => {
    const {
      projectIndex: { projectIndex },
      setProjectIndex
    } = this.props;
    setTimeout(() => {
      if (projectIndex === 0) {
        const count = projectIndex + projects.length - 1;
        setProjectIndex(count);
      } else {
        setProjectIndex(projectIndex - 1);
      }
    }, 100);
  };

  nextPage = () => {
    const {
      projectIndex: { projectIndex },
      setProjectIndex
    } = this.props;
    setTimeout(() => {
      if (projectIndex === projects.length - 1) {
        setProjectIndex(0);
      } else {
        setProjectIndex(projectIndex + 1);
      }
    }, 100);
  };

  togglePopup = index => {
    const { setProjectIndex } = this.props;
    setProjectIndex(index);
    this.setState(prevState => ({
      showPopup: !prevState.showPopup
    }));
    window.scrollTo(0, 0);
  };

  render() {
    const { loading, showPopup } = this.state;
    const { projectIndex } = this.props;
    const choosenProject = projects[projectIndex.projectIndex];
    if (loading) {
      return <Loading loading={loading} />;
    } else {
      return (
        <Fragment>
          <Breakpoint medium up>
            {projects
              ? projects.map((project, index) => (
                  <Card
                    name={project.name}
                    key={project.name + index}
                    images={project.images}
                    showThumbnail={project.showThumbnail}
                    githubURL={project.githubURL}
                    liveDemoURL={project.liveDemoURL}
                    icons={project.icons}
                    description={project.shortDesc}
                    image={project.mobileImage}
                    goalsDesc={project.goalsDesc}
                    challengesDesc={project.challengesDesc}
                    myRoleDesc={project.myRoleDesc}
                  />
                ))
              : null}
            )}
          </Breakpoint>
          <Breakpoint small down>
            <Wrapper>
              {choosenProject && showPopup ? (
                <BackdropStyle>
                  <div className="closeIcon">
                    <button onClick={() => this.closePopup()}>
                      CLOSE <CloseIcon></CloseIcon>
                    </button>
                  </div>
                  <PopUp
                    name={choosenProject.name}
                    key={choosenProject.name}
                    images={choosenProject.images}
                    showThumbnail={choosenProject.showThumbnail}
                    githubURL={choosenProject.githubURL}
                    liveDemoURL={choosenProject.liveDemoURL}
                    icons={choosenProject.icons}
                    description={choosenProject.shortDesc}
                    image={choosenProject.mobileImage}
                    goalsDesc={choosenProject.goalsDesc}
                    challengesDesc={choosenProject.challengesDesc}
                    myRoleDesc={choosenProject.myRoleDesc}
                    //FUNCTIONS
                    totalProjects={projects.length}
                    currentProjectPage={projectIndex.projectIndex}
                    prevPage={this.prevPage}
                    nextPage={this.nextPage}
                  />
                </BackdropStyle>
              ) : null}
              {/* <PopUp /> */}

              {projects && !showPopup
                ? projects.map((project, index) =>
                    project.needVerticalClass ? (
                      <VerticalCard
                        name={project.name}
                        key={project.name + index}
                        githubURL={project.githubURL}
                        liveDemoURL={project.liveDemoURL}
                        icons={project.icons}
                        description={project.shortDesc}
                        image={project.mobileImage}
                        goalsDesc={project.goalsDesc}
                        challengesDesc={project.challengesDesc}
                        myRoleDesc={project.myRoleDesc}
                        // FUNCTIONS
                        index={index}
                        togglePopup={this.togglePopup}
                      />
                    ) : (
                      <HorizontalCard
                        name={project.name}
                        key={project.name + index}
                        githubURL={project.githubURL}
                        liveDemoURL={project.liveDemoURL}
                        icons={project.icons}
                        description={project.shortDesc}
                        image={project.mobileImage}
                        goalsDesc={project.goalsDesc}
                        challengesDesc={project.challengesDesc}
                        myRoleDesc={project.myRoleDesc}
                        // FUNCTIONS
                        index={index}
                        togglePopup={this.togglePopup}
                      />
                    )
                  )
                : null}
            </Wrapper>
          </Breakpoint>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  projectIndex: state.projectIndexState
});

const mapDispatchToProps = dispatch => ({
  setPage: (current, next, previous) =>
    dispatch({ type: a.SET_PAGES, current, next, previous }),
  setProjectIndex: index => dispatch({ type: a.SET_PROJECT_INDEX, index })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
