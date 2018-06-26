import { post, get } from '../../lib/request'

export const authService = {
	authLogin,
	initToken
}

async function authLogin(email, password){
	try {
	    const res = await post("/auth/login", {
	      email: email,
	      password: password
	    })

		return res
	} catch (error) {
		return error
	}
}

async function initToken(token){
	try {
	    const res = await get("/api/verify-token", token)
		return res
	} catch (error) {
		return error
	}
}