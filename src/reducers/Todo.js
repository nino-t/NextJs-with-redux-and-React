import { constTodo } from '../../constants'

const INITIAL_STATE = { 
  list: {todos: [], loading: false},
  new: {todo:null, loading: false}, 
  active: {todo:null, loading: false}, 
  delete: {todo: null, loading: false}
}

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constTodo.FETCHS_REQUEST:
      return { 
        ...state, 
        list: {todos:[], loading: true}
      }
    case constTodo.FETCHS_SUCCESS:
      return { 
        ...state, 
        list: {todos: action.todos, loading: false}
      }
    case constTodo.FETCHS_FAILURE:
      return {
        ...state, 
        list: {todos: [], loading: false}
      }
    case constTodo.FETCHS_RESET:
      return { 
        ...state,
        list: {todos: [], loading: false} 
      }
    default:
      return state
  }
}