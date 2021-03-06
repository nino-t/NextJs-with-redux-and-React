import React from 'react'
import { connect } from 'react-redux'
import Dashboard from '../src/screens/Dashboard'
import { redirectIfNotAuthenticated, getJwt } from '../lib/auth'
import { todosFetch } from '../src/actions/Todo'
import { authInit } from '../src/actions/Auth'

class Index extends React.Component {
	static getInitialProps(ctx) {
		redirectIfNotAuthenticated(ctx)	
		return {
			token: getJwt(ctx)
		}
	}

	componentWillMount() {
		const { dispatch, token} = this.props
		dispatch(authInit(token))
		dispatch(todosFetch({}))
	}

	render() {
		return <Dashboard />
	}
}


export default connect()(Index)