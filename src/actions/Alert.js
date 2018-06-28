import { constAlert } from '../../constants'

export const alertActions = {
    success,
    error,
    clear
}

function success(message) {
	if(message.message)
		message = message.message

    return { type: constAlert.SUCCESS, message }
}

function error(message) {
	if(message.message)
		message = message.message
			
    return { type: constAlert.ERROR, message }
}

function clear() {
    return { type: constAlert.CLEAR }
}