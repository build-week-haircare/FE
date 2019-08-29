import axios from 'axios';
import {LOGIN_FAILURE, LOGIN_SUCCESS} from '../Reducers'
import {REGISTER_SUCCESS} from '../Reducers'

export const loginActionCreator = (username, password) => 
    (dispatch) => {
        axios.post("https://bw-hair-care-be.herokuapp.com/api/users/login",{
            email: username,
            password: password
        }).then(res => {
            dispatch({type:LOGIN_SUCCESS, payload: res.data.body.token})
        }).catch(err => {
            dispatch({type: LOGIN_FAILURE, payload: "Wrong Credentials"})
        })
    } 

    export const registerActionCreator = ( email , password) => {
        return(dispatch) => {
        axios.post("https://bw-hair-care-be.herokuapp.com/api/auth/register" , { 
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