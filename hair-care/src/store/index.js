import axios from 'axios';
import {LOGIN_FAILURE, LOGIN_SUCCESS} from '../reducers'
import {REGISTER_SUCCESS} from '../reducers'

export const loginActionCreator = (username, password) => 
    (dispatch) => {
        axios.post("https://lambda-howto-app.herokuapp.com/api/v1/auth/login",{
            email: username,
            password: password
        }).then(res => {
            dispatch({type:LOGIN_SUCCESS, payload: res.data.body.token})
        }).catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: "Wrong Credentials"})
        })
    } 

    export const registerActionCreator = (username , email , password) => {
        return(dispatch) => {
        axios.post("https://lambda-howto-app.herokuapp.com/api/v1/auth/signup" , { 
             username : username ,
             email: email ,
             password : password 
            }).then(res => { 
                console.log(res)
                dispatch({type:REGISTER_SUCCESS , payload:res.data.body.token})
            }).catch(error => {
                console.log(error)
            })
        }
    }