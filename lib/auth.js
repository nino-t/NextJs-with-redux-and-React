import jwt from 'jsonwebtoken'
import redirect from './redirect'
import { authService } from "../src/services"
import { authValidation } from "../validations"
import { setCookie, getCookie, removeCookie } from "./session"

import { AUTH_KEY } from '../config'

export const signIn = async (email, password) => {
  const error = authValidation.credentials(email, password)
  if (error) {
    return error
  }

  const res = await authService.authLogin(email, password)
  if (res.response) {
    return res.response.data
  }

  setCookie("jwt", res.data)
  redirect("/")
  return null
}

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("jwt")
    redirect("/auth/login", ctx)
  }
}

export const getJwt = ctx => {
  return getCookie("jwt", ctx.req)
}

export const isAuthenticated = ctx => !!getJwt(ctx)

export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect("/", ctx)
    return true
  }

  return false
}

export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect("/auth/login", ctx)
    return true
  }

  return false
}