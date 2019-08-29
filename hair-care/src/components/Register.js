import React from 'react'
import '../App.css'
import { Formik, Form, Field } from "formik";
import {connect} from 'react-redux';
import * as Yup from "yup"; 
import {registerActionCreator} from '../store/Actions'

  
function RegisterForm(props) { 

    const RegisterSchema = Yup.object().shape({
        username: Yup.string()
        .required("Your name is required"),
         email: Yup.string()
          .required("Your email is required"), 
        password: Yup.string()
          .min(8, "Your password must be at least 8 characters long")
          .required("Your password is required")
      });
    return ( 
        <Formik
        validationSchema={RegisterSchema}
        initialValues={{username: "" , email: "" , password: ""}}
        onSubmit={(values) => {
            props.registerActionCreator(values.username, values.email , values.password)
        }} 
        render = {({handleSubmit,errors,touched}) => {
            return(
        <div>
             <h1>RegisterForm</h1> 
             {props.error ? <p style={{ margin: "0", color: "red" }}>{props.error}</p> : null}
            <Form class="ui form" onSubmit = {handleSubmit}>
             {errors.username && touched.username ? (<p style={{ margin: "0", color: "red" }}>{errors.username}</p>) : null}
                <div class="field">
                    <label>User Name</label>
                    <Field id ="regUserName" type="text" name="user-name" placeholder="User Name" />
                </div> 
                {errors.email && touched.email ? (<p style={{ margin: "0", color: "red" }}>{errors.email}</p>) : null}
                <div class="field">
                    <label>Email</label>
                    <Field id ="regEmail" type="text" name="Email" placeholder="Email" />
                </div> 
                {errors.password && touched.password ? (<p style={{ margin: "0", color: "red" }}>{errors.password}</p>) : null}
                <div class="field">
                   <label>Password</label>
                    <Field id = "regPassword" type="text" name="password" placeholder="Password" />
                </div>
                <button className="ui button" id = "loginSubmit" type="submit">Submit</button> 
            </Form>
        </div>
   )
}} />  )
}   

export default connect(null ,{registerActionCreator})(RegisterForm);