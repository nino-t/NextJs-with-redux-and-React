import React from 'react'
import Login from '../../src/screens/Login'
import { redirectIfAuthenticated } from '../../lib/auth'

export default class Index extends React.Component {
	static getInitialProps(ctx) {
		redirectIfAuthenticated(ctx)		
		return {}
	}

	render() {
		return <Login />
	}
}
