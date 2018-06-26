import { constAlert } from '../../constants'

export default function alert(state = {}, action) {
  switch (action.type) {
    case constAlert.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      }
    case constAlert.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      }
    case constAlert.CLEAR:
      return {};
    default:
      return state
  }
}