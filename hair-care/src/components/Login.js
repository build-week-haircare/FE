import React from 'react' 
import {Link} from 'react-router-dom'
import '../App.css'
import {loginActionCreator} from '../store/actions'
import {connect} from 'react-redux'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup"; 

function LoginForm(props) {

    const LoginSchema = Yup.object().shape({
        username: Yup.string()
          .email()
          .required("Your email is required"),
        password: Yup.string()
          .min(8, "Your password must be at least 8 characters long")
          .required("Your password is required")
      });

      return (
    <Formik
    validationSchema={LoginSchema}

    initialValues={{username: "", password: ""}}

    onSubmit={(values) => {
        props.loginActionCreator(values.username, values.password)
    }}

    render = {({handleSubmit,errors,touched}) => {
    return (
        <div> 
             <h1>LoginForm</h1>
             {props.error ? <p style={{ margin: "0", color: "red" }}>{props.error}</p> : null}
            <Form className="ui form"  onSubmit={handleSubmit}>
                {errors.username && touched.username ? (<p style={{ margin: "0", color: "red" }}>{errors.username}</p>) : null}
                <div className="field">
                    <label>UserName</label>
                    <Field id ="userName" type="text" name="username" placeholder="User Name" />
                </div>
                {errors.password && touched.password ? (<p style={{ margin: "0", color: "red" }}>{errors.password}</p>) : null}
                <div className="field">
                    <label>Password</label>
                    <Field  id ="password" type="text" name="password" placeholder="Password" />
                </div>
                <button className="ui button" id = "loginSubmit" type="submit">Submit</button> 
                <div>
                <Link to ="/reg">Not Enrolled ? Sign up now </Link>
                </div>
            </Form>
        </div>
    )
      }} />  )
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}
export default connect(mapStateToProps,{loginActionCreator})(LoginForm);