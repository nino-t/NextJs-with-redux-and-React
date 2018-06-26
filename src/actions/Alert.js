import { constAlert } from '../../constants'

export const alertActions = {
    success,
    error,
    clear
}

function success(message) {
    return { type: constAlert.SUCCESS, message }
}

function error(message) {
    return { type: constAlert.ERROR, message }
}

function clear() {
    return { type: constAlert.CLEAR }
}