import redirect from './redirect'
import { setCookie, getCookie, removeCookie } from "./session"

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("token")
    removeCookie("auth")
    redirect("/auth/login", ctx)
  }
}

export const getJwt = ctx => {
  return getCookie("token", ctx.req)
}

export const getAuth = ctx => {
  return getCookie("auth", ctx.req)
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