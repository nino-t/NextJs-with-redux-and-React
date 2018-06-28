import { alertActions } from '../actions/Alert'
import { constTodo } from '../../constants'
import { todoService } from '../services'

export const todosFetch = (params) => {
  return dispatch => {
    dispatch(request())
    todoService.fetchs(params)
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