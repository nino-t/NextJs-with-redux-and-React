import { combineReducers } from 'redux'
import authentication from './Auth'
import alert from './Alert'
import todo from './Todo'

const rootReducers  = combineReducers({
  authentication,
  alert,
  todo
})

export default rootReducers
