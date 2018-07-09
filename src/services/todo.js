import { post, get, put, destroy } from '../../lib/request'

export const todoService = {
	fetchs,
	create,
	view,
	update,
	deleteReq
}

async function fetchs(params, token){
	try {
	    const res = await get("/api/todos", params, token)
		return res
	} catch (error) {
		return error
	}
}

async function create(params, token){
	try {
	    const res = await post("/api/todos", params, token)
		return res
	} catch (error) {
		return error
	}
}

async function update(params, token){
	try {
	    const res = await put(`/api/todos/${params.id}/edit`, params, token)
		return res
	} catch (error) {
		return error
	}
}

async function view(params, token){
	try {
	    const res = await get(`/api/todos/${params.id}/edit`, params, token)
		return res
	} catch (error) {
		return error
	}
}

async function deleteReq(params, token){
	try {
	    const res = await destroy(`/api/todos/${params.id}`, params, token)
		return res
	} catch (error) {
		return error
	}
}