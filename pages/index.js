import React from 'react'
import Dashboard from '../src/screens/Dashboard'
import { redirectIfNotAuthenticated, getJwt } from '../lib/auth'
import { authInit } from '../src/actions/Auth'

export default class Index extends React.Component {
	static getInitialProps(ctx) {
		redirectIfNotAuthenticated(ctx)	
		ctx.reduxStore.dispatch(authInit(getJwt(ctx)))
		
		return {}
	}

	render() {
		return <Dashboard />
	}
}

