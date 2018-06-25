import { post } from '../../lib/request'

export const authService = {
	authLogin
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