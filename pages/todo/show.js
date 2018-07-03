import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import Show from '../../src/screens/Todo/Show'
import { redirectIfNotAuthenticated, getJwt } from '../../lib/auth'
import { authInit } from '../../src/actions/Auth'
import { todoView } from '../../src/actions/Todo'

class Index extends React.Component {
	static getInitialProps(ctx) {
		redirectIfNotAuthenticated(ctx)	
		return {
			token: getJwt(ctx)
		}
	}

	componentWillMount() {
		const { dispatch, token, router } = this.props
		dispatch(authInit(token))
		dispatch(todoView({id: router.query.id}))
	}

	render() {
		return <Show />
	}
}

export default connect()(withRouter(Index))