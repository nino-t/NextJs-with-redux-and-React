import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { getAuth, getJwt } from '../lib/auth'
import { constAuth } from '../constants'

class MyApp extends App {
  static getInitialProps(ctx) {
    if(ctx.ctx)
      ctx = ctx.ctx     
    
    if(!getJwt(ctx) && !getAuth(ctx))
      return {}

    return {
      token: getJwt(ctx),
      auth: JSON.parse(unescape(getAuth(ctx)))
    }
  }

  render () {
    const {Component, pageProps, token, auth} = this.props
    let {reduxStore} = this.props

    if (token && auth) {
      reduxStore.dispatch({
        type: constAuth.TOKEN_TO_USER_SUCCESS,
        token,
        auth
      })
    }

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
