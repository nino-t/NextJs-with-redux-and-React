import { constAuth } from '../../constants'

export default function authentication(state = {}, action) {
  switch (action.type) {
    case constAuth.LOGIN_REQUEST:
      return {
        loggingIn: true,
        auth: action.auth
      }
    case constAuth.LOGIN_FAILURE:
      return {}
    case constAuth.LOGIN_LOGOUT:
      return {}
    case constAuth.TOKEN_TO_USER_REQUEST:
      return {
        loggingIn: true,
        token: action.token
      }
    case constAuth.TOKEN_TO_USER_SUCCESS:
      return {
        loggedIn: true,
        token: action.token,
        auth: action.auth
      }
    default:
      return state
  }
}