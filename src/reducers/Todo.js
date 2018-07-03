import { constTodo } from '../../constants'

const INITIAL_STATE = { 
  list: {todos: [], loading: false},
  new: {todo:null, loading: false}, 
  active: {todo:null, loading: false}, 
  delete: {todo: null, loading: false}
}

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {

    // FETCH LIST
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

      // CREATE
    case constTodo.CREATE_REQUEST: 
      return {
        ...state, 
        new: {...state.request, loading: true}
      }
    case constTodo.CREATE_SUCCESS:
      return {
        ...state, 
        new: {todo:action.todo, loading: false}
      }
    case constTodo.CREATE_FAILURE:
      return {
        ...state, 
        new: {todo:null, loading: false}
      }
    case constTodo.CREATE_RESET:
      return {
        ...state,  
        new:{todo:null, loading: false}
      }

      // GET
    case constTodo.FETCH_REQUEST: 
      return { 
        ...state, 
        active:{...state.active, loading: true}
      }
    case constTodo.FETCH_SUCCESS: 
      return { 
        ...state, 
        active: {todo: action.todo, loading: false}
      }
    case constTodo.FETCH_FAILURE: 
      return { 
        ...state, 
        active: {todo: null, loading:false}
      }
    case constTodo.FETCH_RESET: 
      return {
        ...state, 
        active: {todo: null, loading: false}
      }

      // DELETE
    case constTodo.DELETE_REQUEST:
      return {
        ...state, 
        delete: {...state.delete, loading: true}
      }
    case constTodo.DELETE_SUCCESS:
      return {
        ...state, 
        delete: {todo:action.todo, loading: false}
      }
    case constTodo.DELETE_FAILURE:
      return {
        ...state, 
        delete: {todo:null, loading: false}
      }
    case constTodo.DELETE_RESET:
      return {
        ...state,  
        delete:{todo:null, loading: false}
      }

      // DEFAULT RETURN
    default:
      return state
  }
}