import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function LoginForm(props) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      // onSubmit - submit handler that takes values from rendered inputs username & password
      // and makes a post request to local Node.js server to authenticate user.
      onSubmit={(values, formikBag) => {
        console.log("values:", values);
        // formikBag update isSubmitting prop to indicate to user in the rendered view
        // request is still in progress
        formikBag.setSubmitting(true);
        const url = "https://bw-hair-care-be.herokuapp.com/api/auth/login";
        axios
          .post(url, values)
          .then(response => {
            // use setter from custom hook (declared above) to set token to local storage
            localStorage.setItem("token", response.data.token);
            // resets form in case user logs out
            formikBag.resetForm();
            // re-enables submit button
            formikBag.setSubmitting(false);
            // redirects user Dashboard
            props.history.push("/Mainpage");
          })
          .catch(error => {
            // if request fails, logs error and re-enables submit button
            console.log("error:", error.message);
            formikBag.setSubmitting(false);
          });
      }}
      // used Yup to provide rules for input validation
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Email is required."),
        password: Yup.string()
          .min(3, "Password must be 3-20 characters.")
          .max(20)
          .required("Password is required.")
      })}
      // render function renders form (passes formikBag props)
      render={({ values, errors, touched, isSubmitting }) => (
        <Form className="form">
          <div className="form-group">
            <label className="label">Username</label>
            <Field
              className="input"
              name="email"
              type="text"
              autoComplete="off"
              // maps value of username html input tag in the form of a field component
              // to the formik value username
              value={values.email}
            />
            {/*if someone touched username field & it doesn't match Yup validation then displays error in p tag*/}
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-group">
            <label className="label">Password</label>
            <Field
              className="input"
              name="password"
              type="password"
              autoComplete="off"
              // maps value of username html input tag in the form of a field component
              // to the formik value username
              value={values.password}
            />
          </div>
          {/*if someone touched password field & it doesn't match Yup validation then displays error in p tag*/}
          {touched.password && errors.password && <p>{errors.password}</p>}
          <button className="btn" type="submit" disabled={isSubmitting}>
            Submit &rarr;
          </button>
        </Form>
      )}
    ></Formik>
  );
}
