import { combineReducers } from 'redux'
import authentication from './Auth'
import alert from './Alert'

const rootReducers  = combineReducers({
  authentication,
  alert
})

export default rootReducers
