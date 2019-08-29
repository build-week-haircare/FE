const initialState = {
    isLoggedIn: false,
    isRegister:false,
    error: ""
}

export const LOGIN_SUCCESS = "login_success"
export const LOGIN_FAILURE = "login_failure"
export const REGISTER_SUCCESS = "register_success"

const reducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token",action.payload)
            return {...state, isLoggedIn: true}
        case LOGIN_FAILURE:
            localStorage.removeItem("token")
            return {...state, error:action.payload}
        case REGISTER_SUCCESS: 
        localStorage.setItem("token", action.payload) 
        return {...state , isRegister: true}
        default:
            return state
    }
}

export default reducer;