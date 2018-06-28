import { alertActions } from '../actions/Alert'
import { constAuth } from '../../constants'
import { authService } from '../services'
import redirect from '../../lib/redirect'
import { setCookie } from "../../lib/session"

const failure = error => { return { type: constAuth.LOGIN_FAILURE, error } }

export const authLogin = (data) => {
  let { email, password } = data
  return dispatch => {
    dispatch(request(email))
    authService.authLogin(email, password)
      .then(res => {
        if (res.response) {
          dispatch(alertActions.error(res.response.data))
          dispatch(failure(res.response.data))
          return
        }

        let token = res.data
        dispatch(authInit(token))
        setCookie("token", token)
        redirect("/")        
      },
      error => {
        dispatch(alertActions.error(error))
        dispatch(failure(error))
      })
  }

  function request(auth) { return { type: constAuth.LOGIN_REQUEST, auth } }
}

export const authInit = token => {
  return dispatch => {
    dispatch(request(token))
    authService.initToken(token)
      .then(res => {
        if (res.response) {
          dispatch(alertActions.error(res.response.data))
          dispatch(failure(res.response.data))
          return
        }

        dispatch(success(token, res.data))
        setCookie("auth", JSON.stringify(res.data))
      },
      error => {
        dispatch(alertActions.error(error))
        dispatch(failure(error))
      })
  }

  function request(token) { return { type: constAuth.TOKEN_TO_USER_REQUEST, token } }
  function success(token, auth) { 
    return { 
      type: constAuth.TOKEN_TO_USER_SUCCESS, 
      token: token,
      auth: auth
    } 
  }
}

export const authLogout = () => {
  return dispatch => {
    dispatch(logout())
  }

  function logout() { return { type: constAuth.LOGIN_LOGOUT } }
}