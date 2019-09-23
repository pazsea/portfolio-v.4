import React, { Component } from "react";
import { ReactComponent as MailIcon } from "../../images/awesomeLogos/mailIcon.svg";

import { connect } from "react-redux";
import * as a from "../../constants/actionTypes";
import * as ROUTES from "../../constants/routes";
import { Wrapper, CustomForm } from "./styles";

// import { APIUrl } from "../../constants/api";

import { Formik } from "formik";
import * as Yup from "yup";
const axios = require("axios");

class Contact extends Component {
  componentWillMount() {
    this.props.setPage("Contact", ROUTES.HOME, ROUTES.PROJECTS);
  }

  render() {
    return (
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        onSubmit={({ name, email, message }, { setSubmitting }) => {
          let data = {
            name: name,
            email: email,
            message: message
          };
          axios
            .post("http://localhost:4444/api", data)
            .then(res => {
              setSubmitting(false);
            })
            .catch(res => {
              setSubmitting(false);
            });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Please provide a valid email so I can reach you."),
          name: Yup.string().required(
            "Please provide an name. Nickname will do."
          )
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur
          } = props;
          return (
            <Wrapper>
              <CustomForm
                method="POST"
                action="https://formspree.io/patrick.sjoberg@live.se"
              >
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email
                      ? "text-input error"
                      : "emailInput"
                  }
                  required
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? "text-input error"
                      : "nameInput"
                  }
                  required
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  name="message"
                  type="text"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.message && touched.message
                      ? "text-input error"
                      : "messageInput"
                  }
                />

                <button type="submit" disabled={isSubmitting}>
                  SEND EMAIL <MailIcon></MailIcon>
                </button>
              </CustomForm>
            </Wrapper>
          );
        }}
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPage: (current, next, previous) =>
    dispatch({ type: a.SET_PAGES, current, next, previous })
});

export default connect(
  null,
  mapDispatchToProps
)(Contact);
