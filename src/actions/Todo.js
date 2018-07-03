import { alertActions } from '../actions/Alert'
import { constTodo } from '../../constants'
import { todoService } from '../services'
import redirect from '../../lib/redirect'

export const todosFetch = (params) => {
  return (dispatch, getState) => {
    const { token } = getState().authentication    
    dispatch(request())
    todoService.fetchs(params, token)
      .then(res => {
        if (res.response) {
          dispatch(alertActions.error(res.response.data))
          dispatch(failure(res.response.data))
          return
        }

        dispatch(success(res.data))
      },
      error => {
        dispatch(alertActions.error(error))
        dispatch(failure(error))
      })
  }

  function request() { return { type: constTodo.FETCHS_REQUEST } }
  function success(todos) { return { type: constTodo.FETCHS_SUCCESS, todos} }
  function failure(error) { return { type: constTodo.FETCHS_FAILURE } }
}

export const todoCreate = (params) => {
  return (dispatch, getState) => {
    const { token } = getState().authentication    
    dispatch(request())
    todoService.create(params, token)
      .then(res => {
        if (res.response) {
          dispatch(alertActions.error(res.response.data))
          dispatch(failure(res.response.data))
          return
        }

        dispatch(success(res.data))
        redirect("/")
      },
      error => {
        dispatch(alertActions.error(error))
        dispatch(failure(error))
      })
  }

  function request(request) { return { type: constTodo.CREATE_REQUEST, request} }
  function success(todo) { return { type: constTodo.CREATE_SUCCESS, todo} }
  function failure(error) { return { type: constTodo.CREATE_FAILURE } }
}

export const todoView = (params) => {
  return (dispatch, getState) => {
    const { token } = getState().authentication    
    dispatch(request(params))
    todoService.view(params, token)
      .then(res => {
        if (res.response) {
          dispatch(alertActions.error(res.response.data))
          dispatch(failure(res.response.data))
          return
        }

        dispatch(success(res.data))
      },
      error => {
        dispatch(alertActions.error(error))
        dispatch(failure(error))
      })
  }

  function request(request) { return { type: constTodo.FETCH_REQUEST, request} }
  function success(todo) { return { type: constTodo.FETCH_SUCCESS, todo} }
  function failure(error) { return { type: constTodo.FETCH_FAILURE } }
}

export const todoDelete = (params) => {
  return (dispatch, getState) => {
    const { token } = getState().authentication    
    dispatch(request(params))
    todoService.deleteReq(params, token)
      .then(res => {
        redirect("/")
      },
      error => {
        dispatch(alertActions.error(error))
        dispatch(failure(error))
      })
  }

  function request(request) { return { type: constTodo.DELETE_REQUEST, request} }
  function success(todo) { return { type: constTodo.DELETE_SUCCESS, todo} }
  function failure(error) { return { type: constTodo.DELETE_FAILURE } }
}