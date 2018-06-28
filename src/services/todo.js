import { post, get } from '../../lib/request'

export const todoService = {
	fetchs
}

async function fetchs(params){
	try {
	    const res = await get("/api/todos", params.token)
		return res
	} catch (error) {
		return error
	}
}